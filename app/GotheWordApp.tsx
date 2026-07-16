"use client";

import {
  Button,
  Card,
  Cursor,
  Divider,
  Footer,
  Modal,
  Progress,
  Radio,
  Tabs,
  Tag,
  Time,
  Title,
} from "animal-island-ui";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  addLocalDays,
  AppState,
  DailyStats,
  EMPTY_DAILY_STATS,
  EMPTY_PROGRESS,
  EMPTY_STATE,
  formatDuration,
  getLastDays,
  insertThreeToFiveLater,
  isDue,
  localDayKey,
  REVIEW_INTERVALS,
  WordProgress,
} from "./learning";
import { getDisplayWord, Word, WORDS } from "./words";

const STORAGE_KEY = "gotheword-state-v1";

type SessionMode = "new" | "review" | "free";

type Feedback = {
  wordId: string;
  correct: boolean;
  selected: string;
  streak: number;
  target: number;
  completed: boolean;
};

type StudySession = {
  mode: SessionMode;
  phase: "memory" | "quiz";
  memoryIndex: number;
  wordIds: string[];
  queue: string[];
  completed: string[];
  weakIds: string[];
  answers: number;
  correct: number;
  elapsedSeconds: number;
  paused: boolean;
  inactive: boolean;
  feedback?: Feedback;
};

type SessionReport = {
  mode: SessionMode;
  total: number;
  completed: number;
  answers: number;
  correct: number;
  seconds: number;
  weakIds: string[];
};

function stableShuffle(items: string[], seed: string) {
  let value = 0;
  for (const char of seed) value = (value * 31 + char.charCodeAt(0)) >>> 0;
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    value = (value * 1664525 + 1013904223) >>> 0;
    const target = value % (index + 1);
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function speakGerman(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function getWord(wordId?: string) {
  return WORDS.find((word) => word.id === wordId);
}

function hasActivity(stats?: DailyStats) {
  return Boolean(stats && (stats.seconds > 0 || stats.newLearned > 0 || stats.reviewed > 0));
}

function calculateStreak(stats: Record<string, DailyStats>) {
  const cursor = new Date();
  if (!hasActivity(stats[localDayKey(cursor)])) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (hasActivity(stats[localDayKey(cursor)])) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export default function GotheWordApp() {
  const [state, setState] = useState<AppState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [goalChoice, setGoalChoice] = useState<5 | 10 | 20>(10);
  const [activeTab, setActiveTab] = useState("today");
  const [session, setSession] = useState<StudySession | null>(null);
  const [report, setReport] = useState<SessionReport | null>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const lastActivityRef = useRef(0);
  const sessionActive = session !== null;
  const sessionPaused = session?.paused ?? true;
  const sessionInactive = session?.inactive ?? true;

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw) as AppState;
          if (saved.version === 1) {
            setState(saved);
            if (saved.dailyGoal) setGoalChoice(saved.dailyGoal);
          }
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(hydrationTimer);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, state]);

  useEffect(() => {
    if (!sessionActive) return;

    const markActive = () => {
      lastActivityRef.current = Date.now();
      setSession((current) =>
        current?.inactive ? { ...current, inactive: false } : current,
      );
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") markActive();
      else setSession((current) => (current ? { ...current, inactive: true } : current));
    };
    const inactivityTimer = window.setInterval(() => {
      if (Date.now() - lastActivityRef.current >= 30_000) {
        setSession((current) =>
          current && !current.inactive ? { ...current, inactive: true } : current,
        );
      }
    }, 1_000);

    window.addEventListener("pointerdown", markActive);
    window.addEventListener("keydown", markActive);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.clearInterval(inactivityTimer);
      window.removeEventListener("pointerdown", markActive);
      window.removeEventListener("keydown", markActive);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [sessionActive]);

  useEffect(() => {
    if (!sessionActive || sessionPaused || sessionInactive) return;
    const timer = window.setInterval(() => {
      setSession((current) =>
        current ? { ...current, elapsedSeconds: current.elapsedSeconds + 1 } : current,
      );
    }, 1_000);
    return () => window.clearInterval(timer);
  }, [sessionActive, sessionPaused, sessionInactive]);

  const todayKey = localDayKey();
  const todayStats = state.stats[todayKey] ?? EMPTY_DAILY_STATS;
  const dailyGoal = state.dailyGoal ?? goalChoice;
  const remainingGoal = Math.max(0, dailyGoal - todayStats.goalNewLearned);
  const availableNewWords = WORDS.filter((word) => {
    const progress = state.progress[word.id];
    return !progress || progress.state === "unlearned" || progress.state === "learning";
  });
  const dueWords = WORDS.filter((word) => isDue(state.progress[word.id])).sort(
    (left, right) => {
      const leftProgress = state.progress[left.id];
      const rightProgress = state.progress[right.id];
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const leftOverdue = new Date(leftProgress.nextReviewAt ?? 0).getTime() < startOfToday.getTime();
      const rightOverdue =
        new Date(rightProgress.nextReviewAt ?? 0).getTime() < startOfToday.getTime();
      if (leftOverdue !== rightOverdue) return leftOverdue ? -1 : 1;
      if (leftProgress.weak !== rightProgress.weak) return leftProgress.weak ? -1 : 1;
      return new Date(leftProgress.nextReviewAt ?? 0).getTime() -
        new Date(rightProgress.nextReviewAt ?? 0).getTime();
    },
  );
  const masteredCount = Object.values(state.progress).filter(
    (progress) => progress.state === "mastered",
  ).length;
  const weakCount = Object.values(state.progress).filter((progress) => progress.weak).length;
  const totalAnswers = Object.values(state.progress).reduce(
    (sum, progress) => sum + progress.totalAnswers,
    0,
  );
  const totalCorrect = Object.values(state.progress).reduce(
    (sum, progress) => sum + progress.correctAnswers,
    0,
  );
  const currentWord = session
    ? getWord(
        session.feedback?.wordId ??
          (session.phase === "memory"
            ? session.wordIds[session.memoryIndex]
            : session.queue[0]),
      )
    : undefined;
  const quizOptions = useMemo(() => {
    if (!currentWord) return [];
    return stableShuffle(
      [currentWord.translation, ...currentWord.distractors],
      `${currentWord.id}-${session?.answers ?? 0}`,
    );
  }, [currentWord, session?.answers]);
  const chartDays = getLastDays(7);
  const maxWords = Math.max(
    1,
    ...chartDays.map(({ key }) => {
      const stats = state.stats[key] ?? EMPTY_DAILY_STATS;
      return stats.newLearned + stats.reviewed;
    }),
  );
  const maxMinutes = Math.max(
    1,
    ...chartDays.map(({ key }) => Math.ceil((state.stats[key]?.seconds ?? 0) / 60)),
  );

  const updateToday = (update: Partial<DailyStats>) => {
    setState((current) => {
      const existing = current.stats[todayKey] ?? EMPTY_DAILY_STATS;
      const next = Object.fromEntries(
        Object.entries(update).map(([key, value]) => [
          key,
          (existing[key as keyof DailyStats] as number) + (value ?? 0),
        ]),
      ) as Partial<DailyStats>;
      return {
        ...current,
        stats: { ...current.stats, [todayKey]: { ...existing, ...next } },
      };
    });
  };

  const beginSession = (mode: SessionMode) => {
    const selected =
      mode === "review"
        ? dueWords
        : availableNewWords.slice(0, mode === "new" ? remainingGoal : 5);
    if (selected.length === 0) return;
    const wordIds = selected.map((word) => word.id);
    if (mode !== "review") {
      setState((current) => ({
        ...current,
        progress: {
          ...current.progress,
          ...Object.fromEntries(
            wordIds.map((wordId) => [
              wordId,
              { ...(current.progress[wordId] ?? EMPTY_PROGRESS), state: "learning" },
            ]),
          ),
        },
      }));
    }
    lastActivityRef.current = Date.now();
    setReport(null);
    setSession({
      mode,
      phase: mode === "review" ? "quiz" : "memory",
      memoryIndex: 0,
      wordIds,
      queue: wordIds,
      completed: [],
      weakIds: [],
      answers: 0,
      correct: 0,
      elapsedSeconds: 0,
      paused: false,
      inactive: false,
    });
  };

  const finishSession = (current: StudySession) => {
    updateToday({ seconds: current.elapsedSeconds });
    setReport({
      mode: current.mode,
      total: current.wordIds.length,
      completed: current.completed.length,
      answers: current.answers,
      correct: current.correct,
      seconds: current.elapsedSeconds,
      weakIds: current.weakIds,
    });
    setSession(null);
  };

  const leaveSession = () => {
    if (!session) return;
    updateToday({ seconds: session.elapsedSeconds });
    setSession(null);
    setActiveTab("today");
  };

  const answerWord = (selected: string | null) => {
    if (!session || !currentWord || session.feedback) return;
    const correct = selected === currentWord.translation;
    const target = session.mode === "review" ? 2 : 3;
    const previous = state.progress[currentWord.id] ?? EMPTY_PROGRESS;
    const streak = correct ? previous.streak + 1 : 0;
    const reviewMistakes =
      session.mode === "review" && !correct
        ? previous.reviewMistakes + 1
        : previous.reviewMistakes;
    const weakThisRound = reviewMistakes >= 2;
    const weak = previous.weak || weakThisRound;
    const completed = streak >= target;
    const now = new Date();

    let nextProgress: WordProgress = {
      ...previous,
      state: session.mode === "review" ? (weak ? "weak" : "scheduled") : "learning",
      streak,
      totalAnswers: previous.totalAnswers + 1,
      correctAnswers: previous.correctAnswers + (correct ? 1 : 0),
      reviewMistakes,
      weak,
    };

    if (completed && session.mode !== "review") {
      nextProgress = {
        ...nextProgress,
        state: "scheduled",
        stage: 1,
        streak: 0,
        reviewMistakes: 0,
        weak: false,
        firstLearnedAt: previous.firstLearnedAt ?? now.toISOString(),
        nextReviewAt: addLocalDays(now, 1),
      };
    }

    if (completed && session.mode === "review") {
      if (previous.stage >= 6) {
        nextProgress = {
          ...nextProgress,
          state: "mastered",
          stage: 7,
          streak: 0,
          reviewMistakes: 0,
          weak: false,
          nextReviewAt: undefined,
        };
      } else {
        const nextStage = Math.max(2, previous.stage + 1);
        const interval = weakThisRound ? 1 : (REVIEW_INTERVALS[previous.stage] ?? 3);
        nextProgress = {
          ...nextProgress,
          state: weakThisRound ? "weak" : "scheduled",
          stage: nextStage,
          streak: 0,
          reviewMistakes: 0,
          weak: weakThisRound,
          nextReviewAt: addLocalDays(now, interval),
        };
      }
    }

    setState((current) => ({
      ...current,
      progress: { ...current.progress, [currentWord.id]: nextProgress },
    }));
    updateToday({
      answers: 1,
      correct: correct ? 1 : 0,
      newLearned: completed && session.mode !== "review" ? 1 : 0,
      goalNewLearned: completed && session.mode === "new" ? 1 : 0,
      reviewed: completed && session.mode === "review" ? 1 : 0,
    });

    const remainingQueue = session.queue.slice(1);
    const nextQueue = completed
      ? remainingQueue
      : insertThreeToFiveLater(remainingQueue, currentWord.id);
    setSession({
      ...session,
      queue: nextQueue,
      completed: completed ? [...session.completed, currentWord.id] : session.completed,
      weakIds:
        weakThisRound && !session.weakIds.includes(currentWord.id)
          ? [...session.weakIds, currentWord.id]
          : session.weakIds,
      answers: session.answers + 1,
      correct: session.correct + (correct ? 1 : 0),
      feedback: {
        wordId: currentWord.id,
        correct,
        selected: selected ?? "忘记了",
        streak,
        target,
        completed,
      },
    });
  };

  const continueAfterFeedback = () => {
    if (!session) return;
    if (session.queue.length === 0) finishSession(session);
    else setSession({ ...session, feedback: undefined });
  };

  if (!state.dailyGoal) {
    return (
      <Cursor>
        <main className="onboarding-shell">
          <section className="onboarding-copy" aria-labelledby="onboarding-title">
            <Tag color="app-teal" variant="outlined">德语 · A1 起步</Tag>
            <h1 id="onboarding-title">把德语，慢慢种进记忆里。</h1>
            <p>
              每天几分钟，通过短测试和恰到好处的复习，稳稳记住每一个单词。
            </p>
            <div className="loop-line" aria-label="学习流程">
              <span>学习新词</span><span>→</span><span>连续答对</span><span>→</span><span>间隔复习</span>
            </div>
          </section>
          <Card color="default" className="onboarding-card">
            <Title size="large" color="app-yellow">先定一个轻松的目标</Title>
            <p>之后可以随时修改，不会影响已经在复习中的单词。</p>
            <Radio
              className="goal-radio"
              direction="vertical"
              size="large"
              value={goalChoice}
              onChange={(value) => setGoalChoice(value as 5 | 10 | 20)}
              options={[
                { label: "每天 5 个 · 约 5 分钟", value: 5 },
                { label: "每天 10 个 · 推荐", value: 10 },
                { label: "每天 20 个 · 进阶", value: 20 },
              ]}
            />
            <Button
              type="primary"
              size="large"
              block
              onClick={() => setState({ ...EMPTY_STATE, dailyGoal: goalChoice })}
            >
              开始我的德语旅程
            </Button>
            {!hydrated && <p className="hydration-note">正在读取你的学习记录…</p>}
          </Card>
        </main>
        <Footer type="sea" />
      </Cursor>
    );
  }

  if (session && currentWord) {
    const feedback = session.feedback;
    const progressValue =
      session.phase === "memory"
        ? ((session.memoryIndex + 1) / session.wordIds.length) * 100
        : (session.completed.length / session.wordIds.length) * 100;
    const displayWord = getDisplayWord(currentWord);
    return (
      <Cursor>
        <main className="study-shell">
          <header className="study-header">
            <Button type="text" onClick={leaveSession}>← 返回首页</Button>
            <div className="study-progress">
              <span>
                {session.phase === "memory"
                  ? `${session.memoryIndex + 1} / ${session.wordIds.length}`
                  : `${session.completed.length} / ${session.wordIds.length}`}
              </span>
              <Progress percent={progressValue} showInfo={false} size="small" />
            </div>
            <div className="study-clock" aria-live="polite">
              <span>{session.inactive ? "已因无操作暂停" : session.paused ? "已暂停" : "本次学习"}</span>
              <strong>{formatDuration(session.elapsedSeconds)}</strong>
              <Button
                size="small"
                type="default"
                onClick={() => setSession({ ...session, paused: !session.paused })}
              >
                {session.paused ? "继续" : "暂停"}
              </Button>
            </div>
          </header>

          {feedback ? (
            <Card
              color={feedback.correct ? "app-green" : "app-red"}
              className="feedback-card"
            >
              <Tag color={feedback.correct ? "app-green" : "app-red"} variant="outlined">
                {feedback.correct ? "回答正确" : "需要再巩固"}
              </Tag>
              <h1>{displayWord}</h1>
              <p className="word-translation">{currentWord.translation}</p>
              {feedback.correct ? (
                <>
                  <p className="feedback-message">
                    {feedback.completed
                      ? session.mode === "review"
                        ? "本轮复习完成，已安排下一阶段"
                        : "已记住，明天再见一次"
                      : `连续记住 ${feedback.streak} / ${feedback.target} 次`}
                  </p>
                  <Progress
                    percent={(feedback.streak / feedback.target) * 100}
                    infoFormat={() => `${feedback.streak} / ${feedback.target}`}
                  />
                </>
              ) : (
                <div className="error-review">
                  <p>你选择了：<strong>{feedback.selected}</strong></p>
                  <p>当前连续正确次数已清零，历史答题记录仍然保留。</p>
                  <div className="focus-example">
                    <span>{currentWord.examples[0].de}</span>
                    <Button
                      type="text"
                      size="small"
                      aria-label={`朗读例句 ${currentWord.examples[0].de}`}
                      onClick={() => speakGerman(currentWord.examples[0].de)}
                    >
                      🔊
                    </Button>
                    <small>{currentWord.examples[0].zh}</small>
                  </div>
                </div>
              )}
              <div className="feedback-actions">
                <Button
                  type="text"
                  onClick={() => speakGerman(displayWord)}
                  aria-label={`朗读 ${displayWord}`}
                >
                  🔊 听发音
                </Button>
                <Button type="primary" size="large" onClick={continueAfterFeedback}>
                  {session.queue.length === 0 ? "查看学习报告" : "继续"}
                </Button>
              </div>
            </Card>
          ) : session.phase === "memory" ? (
            <article className="memory-layout">
              <Card color="app-teal" pattern="app-yellow" className="word-card">
                <Tag color="app-yellow" variant="solid">
                  {currentWord.kind === "noun" ? "名词 · 连同冠词记忆" : "动词 · 不定式"}
                </Tag>
                <div className="word-heading">
                  <h1>{displayWord}</h1>
                  <Button
                    type="default"
                    aria-label={`朗读 ${displayWord}`}
                    onClick={() => speakGerman(displayWord)}
                  >
                    🔊 发音
                  </Button>
                </div>
                <p className="word-translation">{currentWord.translation}</p>
                {currentWord.plural && (
                  <p className="word-form">单数：{displayWord}　·　复数：{currentWord.plural}</p>
                )}
              </Card>
              <Card className="examples-card">
                <Title size="middle" color="app-yellow">在句子里认识它</Title>
                <div className="example-list">
                  {currentWord.examples.map((example, index) => (
                    <div className="example-row" key={example.de}>
                      <span className="example-number">0{index + 1}</span>
                      <div>
                        <p>{example.de}</p>
                        <small>{example.zh}</small>
                      </div>
                      <Button
                        type="text"
                        size="small"
                        aria-label={`朗读例句 ${example.de}`}
                        onClick={() => speakGerman(example.de)}
                      >
                        🔊
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={() => {
                    const nextIndex = session.memoryIndex + 1;
                    setSession({
                      ...session,
                      memoryIndex: nextIndex,
                      phase: nextIndex >= session.wordIds.length ? "quiz" : "memory",
                    });
                  }}
                >
                  {session.memoryIndex + 1 >= session.wordIds.length
                    ? "我记住了，开始测试"
                    : "我记住了，下一个"}
                </Button>
              </Card>
            </article>
          ) : (
            <Card className="quiz-card">
              <Tag color="app-blue" variant="outlined">
                {session.mode === "review" ? "复习测试 · 连续答对 2 次" : "新词测试 · 连续答对 3 次"}
              </Tag>
              <p className="quiz-prompt">请选择正确的中文释义</p>
              <div className="quiz-word-line">
                <h1>{displayWord}</h1>
                <Button
                  type="text"
                  aria-label={`朗读 ${displayWord}`}
                  onClick={() => speakGerman(displayWord)}
                >
                  🔊
                </Button>
              </div>
              <div className="quiz-options">
                {quizOptions.map((option, index) => (
                  <Button
                    key={option}
                    type="default"
                    size="large"
                    block
                    onClick={() => answerWord(option)}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option}
                  </Button>
                ))}
              </div>
              {session.mode === "review" && (
                <Button type="text" onClick={() => answerWord(null)}>忘记了，查看答案</Button>
              )}
            </Card>
          )}
        </main>
      </Cursor>
    );
  }

  if (report) {
    const accuracy = report.answers ? Math.round((report.correct / report.answers) * 100) : 0;
    const weakWords = report.weakIds.map((wordId) => getWord(wordId)).filter(Boolean) as Word[];
    return (
      <Cursor>
        <main className="report-shell">
          <Tag color="app-green" variant="outlined">本轮完成</Tag>
          <h1>{report.mode === "review" ? "今日复习完成" : "今天的单词种下啦"}</h1>
          <p>
            {report.mode === "review"
              ? "每一次重新想起，都在让记忆变得更牢。"
              : "这些单词已经进入你的复习计划，明天会在合适的时候再见。"}
          </p>
          <div className="report-grid">
            <Card color="app-teal"><strong>{report.completed}</strong><span>{report.mode === "review" ? "完成复习" : "新学单词"}</span></Card>
            <Card color="app-yellow"><strong>{report.answers}</strong><span>答题次数</span></Card>
            <Card color="app-blue"><strong>{accuracy}%</strong><span>正确率</span></Card>
            <Card color="app-pink"><strong>{formatDuration(report.seconds)}</strong><span>学习时长</span></Card>
          </div>
          {weakWords.length > 0 && (
            <Card className="weak-report">
              <Title size="middle" color="app-orange">需要多见几面的词</Title>
              <div className="weak-tags">
                {weakWords.map((word) => <Tag key={word.id}>{getDisplayWord(word)}</Tag>)}
              </div>
              <p>这些词已安排在明天优先出现。</p>
            </Card>
          )}
          <div className="report-actions">
            <Button
              type="primary"
              size="large"
              onClick={() => {
                setReport(null);
                setActiveTab("today");
              }}
            >
              返回首页
            </Button>
            <Button
              size="large"
              disabled={availableNewWords.length === 0}
              onClick={() => beginSession("free")}
            >
              自由学习更多单词
            </Button>
          </div>
        </main>
        <Footer type="sea" />
      </Cursor>
    );
  }

  const homeContent = (
    <div className="dashboard-stack">
      <section className="welcome-row">
        <div>
          <Tag color="app-teal" variant="outlined">Heute · 今天</Tag>
          <h1>Guten Tag！准备好今天的小进步了吗？</h1>
          <p>先完成到期复习，再认识新的单词，记忆会更轻松。</p>
        </div>
        <Time />
      </section>

      <section className="primary-grid">
        <Card color={dueWords.length > 0 ? "app-orange" : "app-green"} pattern="app-yellow" className="review-hero">
          <div>
            <Tag color={dueWords.length > 0 ? "app-orange" : "app-green"} variant="outlined">优先任务</Tag>
            <span className="eyebrow">今日待复习</span>
            <strong className="hero-number">{dueWords.length}</strong>
            <p>{dueWords.length > 0 ? "个单词在等你重新想起" : "今天的记忆花园已经打理好"}</p>
          </div>
          <Button
            type="primary"
            size="large"
            disabled={dueWords.length === 0}
            onClick={() => beginSession("review")}
          >
            {dueWords.length > 0 ? "开始今日复习" : "暂无到期复习"}
          </Button>
        </Card>

        <Card className="goal-card">
          <div className="card-heading-row">
            <div>
              <span className="eyebrow">今日新词目标</span>
              <h2>{todayStats.goalNewLearned} / {dailyGoal} 个</h2>
            </div>
            <Tag color="app-yellow">每日计划</Tag>
          </div>
          <Progress
            percent={(todayStats.goalNewLearned / dailyGoal) * 100}
            infoFormat={() => `${todayStats.goalNewLearned} / ${dailyGoal}`}
          />
          <p>还差 {remainingGoal} 个新词完成今天的计划。</p>
          <Button
            type="primary"
            size="large"
            block
            disabled={remainingGoal === 0 || availableNewWords.length === 0}
            onClick={() => beginSession("new")}
          >
            {remainingGoal === 0 ? "今日目标已完成" : "学习新单词"}
          </Button>
        </Card>
      </section>

      <section aria-labelledby="today-data-title">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">DAILY MOMENTUM</span>
            <h2 id="today-data-title">今天的学习足迹</h2>
          </div>
          <Button type="link" onClick={() => setActiveTab("stats")}>查看完整统计 →</Button>
        </div>
        <div className="metric-grid">
          <Card><span>新学单词</span><strong>{todayStats.newLearned}</strong><small>个</small></Card>
          <Card><span>完成复习</span><strong>{todayStats.reviewed}</strong><small>个</small></Card>
          <Card><span>学习时长</span><strong>{Math.floor(todayStats.seconds / 60)}</strong><small>分钟</small></Card>
          <Card><span>连续学习</span><strong>{calculateStreak(state.stats)}</strong><small>天</small></Card>
        </div>
      </section>

      <Card type="dashed" className="free-study-card">
        <div>
          <Tag color="app-blue" variant="outlined">自由学习</Tag>
          <h2>还有一点时间？再认识 5 个词</h2>
          <p>自由学习计入总学习数量，但不会改变今天的计划完成进度。</p>
        </div>
        <Button
          size="large"
          disabled={availableNewWords.length === 0}
          onClick={() => beginSession("free")}
        >
          自由学习
        </Button>
      </Card>
    </div>
  );

  const statsContent = (
    <div className="dashboard-stack">
      <section className="welcome-row stats-heading">
        <div>
          <Tag color="app-blue" variant="outlined">Lernstatistik · 学习统计</Tag>
          <h1>看见每一天积累起来的力量。</h1>
          <p>统计以实际完成和有效互动时间为准。</p>
        </div>
      </section>
      <div className="metric-grid stats-overview">
        <Card color="app-teal"><span>今日新词</span><strong>{todayStats.newLearned}</strong><small>个</small></Card>
        <Card color="app-blue"><span>今日复习</span><strong>{todayStats.reviewed}</strong><small>个</small></Card>
        <Card color="app-yellow"><span>已掌握</span><strong>{masteredCount}</strong><small>个</small></Card>
        <Card color="app-orange"><span>薄弱单词</span><strong>{weakCount}</strong><small>个</small></Card>
      </div>
      <div className="charts-grid">
        <Card className="chart-card">
          <div className="card-heading-row">
            <div><span className="eyebrow">最近 7 天</span><h2>每日学习数量</h2></div>
            <div className="chart-legend"><span className="legend-new">新学</span><span className="legend-review">复习</span></div>
          </div>
          <div className="bar-chart" aria-label="最近七天新学和复习单词数量柱状图">
            {chartDays.map(({ key, label }) => {
              const stats = state.stats[key] ?? EMPTY_DAILY_STATS;
              return (
                <div className="bar-column" key={key}>
                  <div className="bar-value">{stats.newLearned + stats.reviewed || ""}</div>
                  <div className="bar-track">
                    <div className="bar-review" style={{ height: `${(stats.reviewed / maxWords) * 100}%` }} />
                    <div className="bar-new" style={{ height: `${(stats.newLearned / maxWords) * 100}%` }} />
                  </div>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="chart-card">
          <div className="card-heading-row">
            <div><span className="eyebrow">最近 7 天</span><h2>每日学习时长</h2></div>
            <Tag color="app-pink" variant="outlined">分钟</Tag>
          </div>
          <div className="bar-chart time-chart" aria-label="最近七天学习时长柱状图">
            {chartDays.map(({ key, label }) => {
              const minutes = Math.ceil((state.stats[key]?.seconds ?? 0) / 60);
              return (
                <div className="bar-column" key={key}>
                  <div className="bar-value">{minutes || ""}</div>
                  <div className="bar-track">
                    <div className="bar-time" style={{ height: `${(minutes / maxMinutes) * 100}%` }} />
                  </div>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <Card className="accuracy-card">
        <div>
          <span className="eyebrow">累计答题表现</span>
          <h2>{totalAnswers ? Math.round((totalCorrect / totalAnswers) * 100) : 0}% 正确率</h2>
          <p>共完成 {totalAnswers} 次作答，历史记录不会因为答错而清除。</p>
        </div>
        <Progress percent={totalAnswers ? (totalCorrect / totalAnswers) * 100 : 0} size="large" />
      </Card>
    </div>
  );

  const settingsContent = (
    <div className="settings-layout">
      <section>
        <Tag color="app-yellow" variant="outlined">Einstellungen · 设置</Tag>
        <h1>让计划适合你，而不是反过来。</h1>
        <p>目标修改只影响之后的新词计划，已经进入复习流程的单词不会变化。</p>
      </section>
      <Card className="settings-card">
        <Title size="middle" color="app-yellow">每日新词目标</Title>
        <Radio
          direction="vertical"
          size="large"
          value={dailyGoal}
          onChange={(value) =>
            setState((current) => ({ ...current, dailyGoal: value as 5 | 10 | 20 }))
          }
          options={[
            { label: "每天 5 个 · 轻松保持", value: 5 },
            { label: "每天 10 个 · 平衡推荐", value: 10 },
            { label: "每天 20 个 · 加速积累", value: 20 },
          ]}
        />
      </Card>
      <Card type="dashed" className="settings-card danger-zone">
        <div>
          <h2>重新开始</h2>
          <p>清除本设备上的学习进度、复习计划和统计数据。</p>
        </div>
        <Button danger onClick={() => setResetOpen(true)}>清除学习记录</Button>
      </Card>
    </div>
  );

  return (
    <Cursor>
      <div className="app-shell">
        <header className="app-header">
          <div className="brand-lockup" aria-label="GotheWord 德语记忆花园">
            <span className="brand-mark">G</span>
            <div><strong>GotheWord</strong><small>德语记忆花园</small></div>
          </div>
          <Tag color="app-teal">A1 · 初学者</Tag>
        </header>
        <Divider type="wave-yellow" />
        <main className="app-main">
          <Tabs
            aria-label="主要页面"
            shadow
            activeKey={activeTab}
            onChange={setActiveTab}
            items={[
              { key: "today", label: "今日学习", children: homeContent },
              { key: "stats", label: "学习统计", children: statsContent },
              { key: "settings", label: "设置", children: settingsContent },
            ]}
          />
        </main>
        <Footer type="sea" />
      </div>
      <Modal
        open={resetOpen}
        title="确认清除学习记录？"
        typewriter={false}
        onClose={() => setResetOpen(false)}
        footer={
          <>
            <Button onClick={() => setResetOpen(false)}>取消</Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                window.localStorage.removeItem(STORAGE_KEY);
                setState(EMPTY_STATE);
                setGoalChoice(10);
                setResetOpen(false);
              }}
            >
              确认清除
            </Button>
          </>
        }
      >
        此操作会删除本设备上的单词进度、复习安排和学习统计，且无法恢复。
      </Modal>
    </Cursor>
  );
}
