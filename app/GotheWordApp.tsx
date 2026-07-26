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
  ActiveSession,
  answerActiveSession,
  AppState,
  createActiveSession,
  DailyStats,
  DEFAULT_REVIEW_BATCH_SIZE,
  EMPTY_DAILY_STATS,
  EMPTY_PROGRESS,
  EMPTY_STATE,
  formatDuration,
  getLastDays,
  isDue,
  localDayKey,
  migrateAppState,
  RandomSource,
  SessionMode,
  settleActiveSession,
  takeReviewBatch,
} from "./learning";
import { loadLearningState, saveLearningState } from "./supabase";
import { getDisplayWord, Word, WORDS } from "./words";

const STORAGE_KEY = "gotheword-state-v2";
const LEGACY_STORAGE_KEY = "gotheword-state-v1";

type SessionReport = {
  mode: SessionMode;
  total: number;
  completed: number;
  answers: number;
  correct: number;
  seconds: number;
  weakIds: string[];
  remainingReviewCount: number;
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

type GotheWordAppProps = {
  userId: string;
  username: string;
  onSignOut: () => void;
  reviewBatchSize?: number;
  rng?: RandomSource;
};

export default function GotheWordApp({
  userId,
  username,
  onSignOut,
  reviewBatchSize = DEFAULT_REVIEW_BATCH_SIZE,
  rng = Math.random,
}: GotheWordAppProps) {
  const [state, setState] = useState<AppState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [goalChoice, setGoalChoice] = useState<5 | 10 | 20>(10);
  const [activeTab, setActiveTab] = useState("today");
  const [sessionResumed, setSessionResumed] = useState(false);
  const [sessionInactive, setSessionInactive] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [report, setReport] = useState<SessionReport | null>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const [syncError, setSyncError] = useState("");
  const lastActivityRef = useRef(0);
  const session = sessionResumed ? state.activeSession : null;
  const sessionActive = session !== null;
  const sessionPaused = Boolean(session?.pausedAt);

  useEffect(() => {
    let active = true;
    const hydrate = async () => {
      const userStorageKey = `${STORAGE_KEY}:${userId}`;
      const legacyUserStorageKey = `${LEGACY_STORAGE_KEY}:${userId}`;
      let localState: AppState | null = null;
      try {
        const raw =
          window.localStorage.getItem(userStorageKey) ??
          window.localStorage.getItem(legacyUserStorageKey) ??
          window.localStorage.getItem(LEGACY_STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw) as unknown;
          localState = migrateAppState(saved);
        }
      } catch {
        window.localStorage.removeItem(userStorageKey);
      }

      try {
        const remoteState = await loadLearningState(userId);
        const migratedRemoteState = migrateAppState(remoteState);
        const nextState = migratedRemoteState ?? localState ?? EMPTY_STATE;
        if (!migratedRemoteState && localState) {
          await saveLearningState(userId, localState);
        }
        if (active) {
          setState(nextState);
          setSessionResumed(false);
          setResumeOpen(Boolean(nextState.activeSession));
          if (nextState.dailyGoal) setGoalChoice(nextState.dailyGoal);
        }
      } catch {
        if (active) {
          const nextState = localState ?? EMPTY_STATE;
          setState(nextState);
          setSessionResumed(false);
          setResumeOpen(Boolean(nextState.activeSession));
          if (nextState.dailyGoal) setGoalChoice(nextState.dailyGoal);
          setSyncError("云端同步暂时不可用，学习记录仍保存在本设备");
        }
      } finally {
        if (active) setHydrated(true);
      }
    };

    void hydrate();
    return () => {
      active = false;
    };
  }, [userId]);

  useEffect(() => {
    if (!hydrated) return;

    const userStorageKey = `${STORAGE_KEY}:${userId}`;
    window.localStorage.setItem(userStorageKey, JSON.stringify(state));
    const syncTimer = window.setTimeout(() => {
      void saveLearningState(userId, state)
        .then(() => setSyncError(""))
        .catch(() => {
          setSyncError("云端同步暂时不可用，学习记录仍保存在本设备");
        });
    }, 500);

    return () => window.clearTimeout(syncTimer);
  }, [hydrated, state, userId]);

  useEffect(() => {
    if (!sessionActive) return;

    const markActive = () => {
      lastActivityRef.current = Date.now();
      setSessionInactive(false);
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") markActive();
      else setSessionInactive(true);
    };
    const inactivityTimer = window.setInterval(() => {
      if (Date.now() - lastActivityRef.current >= 30_000) {
        setSessionInactive(true);
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
      setState((current) =>
        current.activeSession
          ? {
              ...current,
              activeSession: {
                ...current.activeSession,
                elapsedSeconds: current.activeSession.elapsedSeconds + 1,
                updatedAt: new Date().toISOString(),
              },
            }
          : current,
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
  const reviewBatch = takeReviewBatch(dueWords, reviewBatchSize);
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

  const beginSession = (mode: SessionMode) => {
    const reviewSelection = takeReviewBatch(dueWords, reviewBatchSize);
    const selected = mode === "review"
      ? reviewSelection.batch
      : availableNewWords.slice(0, mode === "new" ? remainingGoal : 5);
    if (selected.length === 0) return;
    const wordIds = selected.map((word) => word.id);
    const now = new Date();
    const nextSession = createActiveSession({
      id: window.crypto.randomUUID(),
      mode,
      wordIds,
      remainingReviewCount: reviewSelection.remainingCount,
      now,
    });

    setState((current) => ({
      ...current,
      progress:
        mode === "review"
          ? current.progress
          : {
              ...current.progress,
              ...Object.fromEntries(
                wordIds.map((wordId) => [
                  wordId,
                  { ...(current.progress[wordId] ?? EMPTY_PROGRESS), state: "learning" },
                ]),
              ),
            },
      activeSession: nextSession,
    }));
    lastActivityRef.current = Date.now();
    setSessionInactive(false);
    setSessionResumed(true);
    setResumeOpen(false);
    setReport(null);
  };

  const updateSession = (
    update: (current: ActiveSession) => ActiveSession,
  ) => {
    setState((current) =>
      current.activeSession
        ? {
            ...current,
            activeSession: update(current.activeSession),
          }
        : current,
    );
  };

  const finishSession = (current: ActiveSession) => {
    setReport({
      mode: current.mode,
      total: current.wordIds.length,
      completed: current.completed.length,
      answers: current.answers,
      correct: current.correct,
      seconds: current.elapsedSeconds,
      weakIds: current.weakIds,
      remainingReviewCount: current.remainingReviewCount,
    });
    setState((latest) =>
      latest.activeSession?.id === current.id
        ? settleActiveSession(latest)
        : latest,
    );
    setSessionResumed(false);
    setSessionInactive(true);
  };

  const leaveSession = () => {
    if (!session) return;
    setState((current) =>
      current.activeSession?.id === session.id
        ? settleActiveSession(current)
        : current,
    );
    setSessionResumed(false);
    setSessionInactive(true);
    setActiveTab("today");
  };

  const answerWord = (selected: string | null) => {
    if (!session || !currentWord || session.feedback) return;
    const correct = selected === currentWord.translation;
    setState((current) =>
      answerActiveSession({
        state: current,
        wordId: currentWord.id,
        correct,
        selected: selected ?? "忘记了",
        rng,
      }),
    );
  };

  const continueAfterFeedback = () => {
    if (!session) return;
    if (session.queue.length === 0) {
      finishSession(session);
    } else {
      updateSession((current) => ({
        ...current,
        feedback: undefined,
        updatedAt: new Date().toISOString(),
      }));
    }
  };

  if (!state.dailyGoal) {
    return (
      <Cursor>
        <main className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1120px] min-w-0 items-center gap-10 px-4 py-9 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[clamp(2.5rem,8vw,6.25rem)]">
          <section className="min-w-0" aria-labelledby="onboarding-title">
            <Tag color="app-teal" variant="outlined">德语 · A1 起步</Tag>
            <h1
              id="onboarding-title"
              className="my-[1.375rem] max-w-[620px] text-[clamp(2.5rem,11vw,4.875rem)] leading-[1.06] font-black tracking-normal [overflow-wrap:anywhere]"
            >
              把德语，慢慢种进记忆里。
            </h1>
            <p className="max-w-[600px] text-base leading-7 text-[#8f7b63] sm:text-lg">
              每天几分钟，通过短测试和恰到好处的复习，稳稳记住每一个单词。
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 font-extrabold text-[#8f7b63]" aria-label="学习流程">
              <span className="rounded-full border border-dashed border-[#5e4b354d] bg-white/50 px-3 py-1.5">学习新词</span>
              <span aria-hidden="true">→</span>
              <span className="rounded-full border border-dashed border-[#5e4b354d] bg-white/50 px-3 py-1.5">连续答对</span>
              <span aria-hidden="true">→</span>
              <span className="rounded-full border border-dashed border-[#5e4b354d] bg-white/50 px-3 py-1.5">间隔复习</span>
            </div>
          </section>
          <Card color="default" className="grid min-w-0 gap-6">
            <Title size="middle" color="app-yellow">设置每日目标</Title>
            <p className="m-0 leading-7 text-[#8f7b63]">之后可以随时修改，不会影响已经在复习中的单词。</p>
            <Radio
              className="my-1.5 min-w-0"
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
            {!hydrated && <p className="m-0 text-center text-[13px]" role="status">正在读取你的学习记录…</p>}
            {syncError && <p className="m-0 text-center text-[13px]" role="status">{syncError}</p>}
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
        <main className="mx-auto min-h-svh w-full max-w-[960px] min-w-0 px-3 py-4 pb-[max(4.5rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-[1.375rem]">
          <header className="mb-7 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:mb-11 lg:grid-cols-[1fr_minmax(220px,360px)_1fr] lg:gap-6">
            <Button className="min-w-0 justify-self-start" type="text" onClick={leaveSession}>← 返回首页</Button>
            <div className="col-span-2 row-start-2 grid min-w-0 gap-1.5 text-center font-extrabold lg:col-span-1 lg:col-start-2 lg:row-start-1">
              <span>
                {session.phase === "memory"
                  ? `${session.memoryIndex + 1} / ${session.wordIds.length}`
                  : `${session.completed.length} / ${session.wordIds.length}`}
                {session.mode === "review" && session.remainingReviewCount > 0
                  ? ` · 后续还有 ${session.remainingReviewCount} 个`
                  : ""}
              </span>
              <Progress percent={progressValue} showInfo={false} size="small" />
            </div>
            <div className="col-start-2 row-start-1 flex min-w-0 flex-wrap items-center justify-end gap-2 lg:col-start-3">
              <span className="hidden text-xs text-[#8f7b63] sm:inline" aria-live="polite">
                {sessionInactive ? "已因无操作暂停" : sessionPaused ? "已暂停" : "本次学习"}
              </span>
              <strong className="font-[Nunito] text-[17px] leading-none font-extrabold" aria-label={`本次学习 ${formatDuration(session.elapsedSeconds)}`}>
                {formatDuration(session.elapsedSeconds)}
              </strong>
              <Button
                size="small"
                type="default"
                onClick={() => {
                  const now = new Date().toISOString();
                  updateSession((current) => ({
                    ...current,
                    pausedAt: current.pausedAt ? undefined : now,
                    updatedAt: now,
                  }));
                }}
              >
                {sessionPaused ? "继续" : "暂停"}
              </Button>
            </div>
          </header>

          {feedback ? (
            <Card
              color={feedback.correct ? "app-green" : "app-red"}
              className="mx-auto flex min-h-0 w-full max-w-[680px] min-w-0 flex-col justify-center gap-5 text-center sm:min-h-[570px] sm:gap-[1.375rem] [&>*]:mx-auto"
            >
              <Tag color={feedback.correct ? "app-green" : "app-red"} variant="outlined">
                {feedback.correct ? "回答正确" : "需要再巩固"}
              </Tag>
              <h1 className="m-0 max-w-full text-[clamp(2.375rem,13vw,4.5rem)] leading-none font-black tracking-normal [overflow-wrap:anywhere]">{displayWord}</h1>
              <p className="m-0 text-[clamp(1.25rem,7vw,1.625rem)] leading-tight font-extrabold">{currentWord.translation}</p>
              {feedback.correct ? (
                <>
                  <p className="m-0 text-lg leading-7 font-extrabold">
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
                <div className="w-full max-w-[520px] min-w-0">
                  <p className="mb-1.5 leading-7">你选择了：<strong>{feedback.selected}</strong></p>
                  <p className="mb-1.5 leading-7">当前连续正确次数已清零，历史答题记录仍然保留。</p>
                  <div className="mt-[1.125rem] grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center rounded-[18px] border border-dashed border-white/55 px-4 py-3.5 text-left">
                    <span className="min-w-0 font-extrabold [overflow-wrap:anywhere]">{currentWord.examples[0].de}</span>
                    <Button
                      type="text"
                      size="small"
                      aria-label={`朗读例句 ${currentWord.examples[0].de}`}
                      onClick={() => speakGerman(currentWord.examples[0].de)}
                    >
                      🔊
                    </Button>
                    <small className="col-span-2 mt-1">{currentWord.examples[0].zh}</small>
                  </div>
                </div>
              )}
              <div className="flex w-full flex-wrap justify-center gap-3 [&>*]:max-sm:w-full">
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
            <article className="grid min-w-0 items-start gap-[1.375rem] lg:grid-cols-[0.86fr_1.14fr]">
              <Card color="app-teal" pattern="app-yellow" className="flex min-h-[320px] min-w-0 flex-col justify-center gap-[1.125rem] lg:sticky lg:top-5 lg:min-h-[410px]">
                <Tag color="app-yellow" variant="solid">
                  {currentWord.kind === "noun" ? "名词 · 连同冠词记忆" : "动词 · 不定式"}
                </Tag>
                <div className="flex min-w-0 flex-col items-start gap-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <h1 className="m-0 min-w-0 text-[clamp(2.375rem,13vw,4.5rem)] leading-none font-black tracking-normal [overflow-wrap:anywhere]">{displayWord}</h1>
                  <Button
                    type="default"
                    aria-label={`朗读 ${displayWord}`}
                    onClick={() => speakGerman(displayWord)}
                  >
                    🔊 发音
                  </Button>
                </div>
                <p className="m-0 text-[clamp(1.25rem,7vw,1.625rem)] leading-tight font-extrabold">{currentWord.translation}</p>
                {currentWord.plural && (
                  <p className="m-0 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 opacity-85">
                    <span>单数：{displayWord}</span>
                    <span aria-hidden="true">·</span>
                    <span>复数：{currentWord.plural}</span>
                  </p>
                )}
              </Card>
              <Card className="grid min-w-0 gap-6">
                <Title size="middle" color="app-yellow">在句子里认识它</Title>
                <div className="grid min-w-0 gap-1">
                  {currentWord.examples.map((example, index) => (
                    <div className="grid min-w-0 grid-cols-[1.75rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-dashed border-[#5e4b3533] py-[0.9375rem] last:border-b-0 sm:grid-cols-[2.125rem_minmax(0,1fr)_auto] sm:gap-3" key={example.de}>
                      <span className="font-[Nunito] text-[13px] leading-none font-black text-[#0ca89c]">0{index + 1}</span>
                      <div className="min-w-0">
                        <p className="mb-1 min-w-0 text-base leading-6 font-extrabold [overflow-wrap:anywhere] sm:text-[17px]">{example.de}</p>
                        <small className="text-[#8f7b63]">{example.zh}</small>
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
                    updateSession((current) => ({
                      ...current,
                      memoryIndex: nextIndex,
                      phase: nextIndex >= current.wordIds.length ? "quiz" : "memory",
                      updatedAt: new Date().toISOString(),
                    }));
                  }}
                >
                  {session.memoryIndex + 1 >= session.wordIds.length
                    ? "我记住了，开始测试"
                    : "我记住了，下一个"}
                </Button>
              </Card>
            </article>
          ) : (
            <Card className="mx-auto flex min-h-0 w-full max-w-[680px] min-w-0 flex-col justify-center gap-5 sm:min-h-[570px] sm:gap-[1.375rem]">
              <Tag color="app-blue" variant="outlined">
                {session.mode === "review" ? "复习测试 · 连续答对 2 次" : "新词测试 · 连续答对 3 次"}
              </Tag>
              <p className="m-0 font-bold text-[#8f7b63]">请选择正确的中文释义</p>
              <div className="flex min-w-0 items-center justify-between gap-3.5">
                <h1 className="m-0 min-w-0 text-[clamp(2.375rem,13vw,4.5rem)] leading-none font-black tracking-normal [overflow-wrap:anywhere]">{displayWord}</h1>
                <Button
                  type="text"
                  aria-label={`朗读 ${displayWord}`}
                  onClick={() => speakGerman(displayWord)}
                >
                  🔊
                </Button>
              </div>
              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                {quizOptions.map((option, index) => (
                  <Button
                    key={option}
                    type="default"
                    size="large"
                    block
                    onClick={() => answerWord(option)}
                  >
                    <span className="mr-2.5 inline-grid size-7 shrink-0 place-items-center rounded-full bg-[#5e4b3517] font-black">
                      {String.fromCharCode(65 + index)}
                    </span>
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
        <main className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[920px] min-w-0 flex-col items-center gap-6 px-4 py-12 pb-[max(4rem,env(safe-area-inset-bottom))] text-center sm:px-5 sm:py-[4.5rem]">
          <Tag color="app-green" variant="outlined">本轮完成</Tag>
          <h1 className="m-0 text-[clamp(2.375rem,10vw,3.875rem)] leading-[1.08] font-black tracking-normal [overflow-wrap:anywhere]">
            {report.mode === "review"
              ? report.remainingReviewCount > 0
                ? "本批复习完成"
                : "今日复习完成"
              : "今天的单词种下啦"}
          </h1>
          <p className="m-0 max-w-[650px] leading-7 text-[#8f7b63]">
            {report.mode === "review"
              ? report.remainingReviewCount > 0
                ? `已完成本批，仍有 ${report.remainingReviewCount} 个到期词等待下一批。`
                : "每一次重新想起，都在让记忆变得更牢。"
              : "这些单词已经进入你的复习计划，明天会在合适的时候再见。"}
          </p>
          <div className="grid w-full min-w-0 grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-4">
            <Card pattern="app-teal" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[clamp(2.25rem,10vw,3.5rem)] leading-none font-black">{report.completed}</strong><span className="text-sm font-bold">{report.mode === "review" ? "完成复习" : "新学单词"}</span></Card>
            <Card pattern="app-yellow" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[clamp(2.25rem,10vw,3.5rem)] leading-none font-black">{report.answers}</strong><span className="text-sm font-bold">答题次数</span></Card>
            <Card pattern="app-blue" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[clamp(2.25rem,10vw,3.5rem)] leading-none font-black">{accuracy}%</strong><span className="text-sm font-bold">正确率</span></Card>
            <Card pattern="purple" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[clamp(2.25rem,10vw,3.5rem)] leading-none font-black">{formatDuration(report.seconds)}</strong><span className="text-sm font-bold">学习时长</span></Card>
          </div>
          {weakWords.length > 0 && (
            <Card className="grid w-full min-w-0 gap-[1.125rem]">
              <Title size="middle" color="app-orange">需要多见几面的词</Title>
              <div className="flex flex-wrap justify-center gap-2">
                {weakWords.map((word) => <Tag key={word.id}>{getDisplayWord(word)}</Tag>)}
              </div>
              <p className="m-0 leading-7 text-[#8f7b63]">这些词已安排在明天优先出现。</p>
            </Card>
          )}
          <div className="flex w-full flex-wrap justify-center gap-3 [&>*]:max-sm:w-full">
            {report.mode === "review" && report.remainingReviewCount > 0 && (
              <Button
                type="primary"
                size="large"
                onClick={() => beginSession("review")}
              >
                继续下一批复习
              </Button>
            )}
            <Button
              type={
                report.mode === "review" && report.remainingReviewCount > 0
                  ? "default"
                  : "primary"
              }
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
    <div className="grid min-w-0 gap-6 pt-4 sm:gap-8 sm:pt-6">
      <section className="flex min-w-0 items-end justify-between gap-7">
        <div className="min-w-0">
          <Tag color="app-teal" variant="outlined">Heute · 今天</Tag>
          <h1 className="my-4 max-w-[780px] text-[clamp(1.875rem,8vw,3rem)] leading-[1.12] font-black tracking-normal [overflow-wrap:anywhere]">Guten Tag！准备好今天的小进步了吗？</h1>
          <p className="m-0 leading-7 text-[#8f7b63]">先完成到期复习，再认识新的单词，记忆会更轻松。</p>
        </div>
        <div className="hidden sm:block"><Time /></div>
      </section>

      <section className="grid min-w-0 gap-[1.375rem] lg:grid-cols-[1.08fr_0.92fr]">
        <Card color={dueWords.length > 0 ? "app-orange" : "app-green"} pattern="app-yellow" className="flex min-h-[260px] min-w-0 flex-col justify-between gap-6 sm:min-h-[300px]">
          <div className="grid min-w-0 justify-items-start">
            <Tag color={dueWords.length > 0 ? "app-orange" : "app-green"} variant="outlined">优先任务</Tag>
            <span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">今日待复习</span>
            <strong className="mt-2.5 font-[Nunito] text-[clamp(4.625rem,18vw,7.25rem)] leading-[0.9] font-black">{dueWords.length}</strong>
            <p className="mt-3 mb-0 leading-7 font-bold">
              {dueWords.length === 0
                ? "今天的记忆花园已经打理好"
                : reviewBatch.remainingCount > 0
                  ? `本批处理 ${reviewBatch.batch.length} 个，后续还有 ${reviewBatch.remainingCount} 个`
                  : "个单词在等你重新想起"}
            </p>
          </div>
          <Button
            type="primary"
            size="large"
            disabled={dueWords.length === 0}
            onClick={() => beginSession("review")}
          >
            {dueWords.length > 0
              ? reviewBatch.remainingCount > 0
                ? `开始本批复习（${reviewBatch.batch.length} 个）`
                : "开始今日复习"
              : "暂无到期复习"}
          </Button>
        </Card>

        <Card className="flex min-h-[260px] min-w-0 flex-col justify-between gap-6 sm:min-h-[300px]">
          <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">今日新词目标</span>
              <h2 className="m-0 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">{todayStats.goalNewLearned} / {dailyGoal} 个</h2>
            </div>
            <Tag color="app-yellow">每日计划</Tag>
          </div>
          <Progress
            percent={(todayStats.goalNewLearned / dailyGoal) * 100}
            infoFormat={() => `${todayStats.goalNewLearned} / ${dailyGoal}`}
          />
          <p className="m-0 leading-7 text-[#8f7b63]">还差 {remainingGoal} 个新词完成今天的计划。</p>
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
        <div className="mb-4 flex min-w-0 flex-wrap items-start justify-between gap-3 sm:gap-[1.125rem]">
          <div className="min-w-0">
            <span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">DAILY MOMENTUM</span>
            <h2 id="today-data-title" className="m-0 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">今天的学习足迹</h2>
          </div>
          <Button type="link" onClick={() => setActiveTab("stats")}>查看完整统计 →</Button>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-4">
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">新学单词</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{todayStats.newLearned}</strong><small className="pb-1 font-bold">个</small></Card>
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">完成复习</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{todayStats.reviewed}</strong><small className="pb-1 font-bold">个</small></Card>
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">学习时长</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{Math.floor(todayStats.seconds / 60)}</strong><small className="pb-1 font-bold">分钟</small></Card>
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">连续学习</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{calculateStreak(state.stats)}</strong><small className="pb-1 font-bold">天</small></Card>
        </div>
      </section>

      <Card type="dashed" className="flex min-w-0 flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center sm:gap-7">
        <div className="min-w-0">
          <Tag color="app-blue" variant="outlined">自由学习</Tag>
          <h2 className="my-3 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">还有一点时间？再认识 5 个词</h2>
          <p className="m-0 leading-7 text-[#8f7b63]">自由学习计入总学习数量，但不会改变今天的计划完成进度。</p>
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
    <div className="grid min-w-0 gap-6 pt-4 sm:gap-8 sm:pt-6">
      <section className="min-w-0">
        <div className="min-w-0">
          <Tag color="app-blue" variant="outlined">Lernstatistik · 学习统计</Tag>
          <h1 className="my-4 max-w-[780px] text-[clamp(1.875rem,8vw,3rem)] leading-[1.12] font-black tracking-normal [overflow-wrap:anywhere]">看见每一天积累起来的力量。</h1>
          <p className="m-0 leading-7 text-[#8f7b63]">统计以实际完成和有效互动时间为准。</p>
        </div>
      </section>
      <div className="grid min-w-0 grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-4">
        <Card pattern="app-teal" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">今日新词</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{todayStats.newLearned}</strong><small className="pb-1 font-bold">个</small></Card>
        <Card pattern="app-blue" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">今日复习</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{todayStats.reviewed}</strong><small className="pb-1 font-bold">个</small></Card>
        <Card pattern="app-yellow" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">已掌握</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{masteredCount}</strong><small className="pb-1 font-bold">个</small></Card>
        <Card pattern="app-orange" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">薄弱单词</span><strong className="font-[Nunito] text-[clamp(2.375rem,11vw,3.5rem)] leading-none font-black">{weakCount}</strong><small className="pb-1 font-bold">个</small></Card>
      </div>
      <div className="grid min-w-0 gap-[1.375rem] lg:grid-cols-[1.08fr_0.92fr]">
        <Card className="grid min-w-0 gap-[1.375rem]">
          <div className="flex min-w-0 flex-wrap items-start justify-between gap-3 sm:gap-[1.125rem]">
            <div className="min-w-0"><span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">最近 7 天</span><h2 className="m-0 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">每日学习数量</h2></div>
            <div className="flex flex-wrap gap-3 text-xs font-extrabold text-[#8f7b63]">
              <span className="before:mr-1.5 before:inline-block before:size-[9px] before:rounded-full before:bg-[#19c8b9]">新学</span>
              <span className="before:mr-1.5 before:inline-block before:size-[9px] before:rounded-full before:bg-[#889df0]">复习</span>
            </div>
          </div>
          <div className="grid h-[250px] min-w-0 grid-cols-7 items-end gap-1 sm:gap-2.5" aria-label="最近七天新学和复习单词数量柱状图">
            {chartDays.map(({ key, label }) => {
              const stats = state.stats[key] ?? EMPTY_DAILY_STATS;
              return (
                <div className="grid h-full min-w-0 grid-rows-[22px_1fr_24px] items-end gap-1 text-center" key={key}>
                  <div className="text-[11px] font-extrabold text-[#8f7b63]">{stats.newLearned + stats.reviewed || ""}</div>
                  <div className="mx-auto flex h-full w-[min(34px,75%)] flex-col-reverse justify-start overflow-hidden rounded-t-full rounded-b-lg bg-[#5e4b350f]">
                    <div className="min-h-0 bg-[#889df0] motion-safe:transition-[height] motion-safe:duration-500" style={{ height: `${(stats.reviewed / maxWords) * 100}%` }} />
                    <div className="min-h-0 bg-[#19c8b9] motion-safe:transition-[height] motion-safe:duration-500" style={{ height: `${(stats.newLearned / maxWords) * 100}%` }} />
                  </div>
                  <span className="truncate text-[11px] font-extrabold text-[#8f7b63]">{label}</span>
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="grid min-w-0 gap-[1.375rem]">
          <div className="flex min-w-0 flex-wrap items-start justify-between gap-3 sm:gap-[1.125rem]">
            <div className="min-w-0"><span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">最近 7 天</span><h2 className="m-0 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">每日学习时长</h2></div>
            <Tag color="app-pink" variant="outlined">分钟</Tag>
          </div>
          <div className="grid h-[250px] min-w-0 grid-cols-7 items-end gap-1 sm:gap-2.5" aria-label="最近七天学习时长柱状图">
            {chartDays.map(({ key, label }) => {
              const minutes = Math.ceil((state.stats[key]?.seconds ?? 0) / 60);
              return (
                <div className="grid h-full min-w-0 grid-rows-[22px_1fr_24px] items-end gap-1 text-center" key={key}>
                  <div className="text-[11px] font-extrabold text-[#8f7b63]">{minutes || ""}</div>
                  <div className="mx-auto flex h-full w-[min(34px,75%)] flex-col-reverse justify-start overflow-hidden rounded-t-full rounded-b-lg bg-[#5e4b350f]">
                    <div className="min-h-0 bg-linear-to-b from-[#f8a6b2] to-[#e59266] motion-safe:transition-[height] motion-safe:duration-500" style={{ height: `${(minutes / maxMinutes) * 100}%` }} />
                  </div>
                  <span className="truncate text-[11px] font-extrabold text-[#8f7b63]">{label}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <Card className="flex min-w-0 flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center sm:gap-7">
        <div className="min-w-0 sm:basis-[54%]">
          <span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">累计答题表现</span>
          <h2 className="my-3 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">{totalAnswers ? Math.round((totalCorrect / totalAnswers) * 100) : 0}% 正确率</h2>
          <p className="m-0 leading-7 text-[#8f7b63]">共完成 {totalAnswers} 次作答，历史记录不会因为答错而清除。</p>
        </div>
        <div className="min-w-0 flex-1"><Progress percent={totalAnswers ? (totalCorrect / totalAnswers) * 100 : 0} size="large" /></div>
      </Card>
    </div>
  );

  const settingsContent = (
    <div className="mx-auto grid w-full max-w-[820px] min-w-0 gap-6 pt-5 sm:pt-[1.875rem]">
      <section className="min-w-0">
        <Tag color="app-yellow" variant="outlined">Einstellungen · 设置</Tag>
        <h1 className="my-4 max-w-[780px] text-[clamp(1.875rem,8vw,3rem)] leading-[1.12] font-black tracking-normal [overflow-wrap:anywhere]">让计划适合你，而不是反过来。</h1>
        <p className="m-0 leading-7 text-[#8f7b63]">目标修改只影响之后的新词计划，已经进入复习流程的单词不会变化。</p>
      </section>
      <Card className="grid min-w-0 gap-[1.375rem]">
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
      <Card type="dashed" className="flex min-w-0 flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center sm:gap-7">
        <div className="min-w-0">
          <h2 className="my-3 text-[clamp(1.375rem,7vw,1.875rem)] leading-tight font-black tracking-normal">重新开始</h2>
          <p className="m-0 leading-7 text-[#8f7b63]">清除当前账号的学习进度、复习计划和统计数据。</p>
        </div>
        <Button danger onClick={() => setResetOpen(true)}>清除学习记录</Button>
      </Card>
    </div>
  );

  return (
    <Cursor>
      <div className="min-h-svh">
        <header className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-wrap items-center justify-between gap-3 px-3 py-4 sm:px-5 sm:pt-[1.375rem] sm:pb-3.5">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="GotheWord 德语记忆花园">
            <span className="grid size-11 shrink-0 -rotate-3 place-items-center rounded-[50%_43%_48%_45%] bg-[#19c8b9] font-[Nunito] text-2xl leading-none font-black text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.08)] sm:size-[46px] sm:text-[26px]">G</span>
            <div className="grid min-w-0 gap-px">
              <strong className="truncate font-[Nunito] text-xl leading-none font-black sm:text-[22px]">GotheWord</strong>
              <small className="text-xs text-[#8f7b63]">德语记忆花园</small>
            </div>
          </div>
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-1 sm:gap-2">
            <Tag color="app-teal">{username}</Tag>
            <Button type="text" size="small" onClick={onSignOut}>退出</Button>
          </div>
        </header>
        <Divider type="wave-yellow" />
        <main className="mx-auto mt-4 mb-20 w-full max-w-[1180px] min-w-0 px-3 pb-[env(safe-area-inset-bottom)] sm:mt-[1.625rem] sm:px-5">
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
        open={resumeOpen}
        title="继续上次的学习吗？"
        typewriter={false}
        maskClosable={false}
        onClose={() => undefined}
        footer={
          <>
            <Button
              danger
              onClick={() => {
                setState((current) => settleActiveSession(current));
                setResumeOpen(false);
                setSessionResumed(false);
                setSessionInactive(true);
                setActiveTab("today");
              }}
            >
              结束本次学习
            </Button>
            <Button
              type="primary"
              onClick={() => {
                const now = new Date().toISOString();
                setState((current) =>
                  current.activeSession
                    ? {
                        ...current,
                        activeSession: {
                          ...current.activeSession,
                          pausedAt: undefined,
                          updatedAt: now,
                        },
                      }
                    : current,
                );
                lastActivityRef.current = Date.now();
                setSessionInactive(false);
                setSessionResumed(true);
                setResumeOpen(false);
              }}
            >
              继续本次学习
            </Button>
          </>
        }
      >
        当前单词、队列、完成数和有效学习时长都已保存。你可以从中断处继续，也可以结算并结束本次学习。
      </Modal>
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
                window.localStorage.removeItem(`${STORAGE_KEY}:${userId}`);
                window.localStorage.removeItem(`${LEGACY_STORAGE_KEY}:${userId}`);
                setState({ ...EMPTY_STATE });
                setSessionResumed(false);
                setSessionInactive(true);
                setResumeOpen(false);
                setGoalChoice(10);
                setResetOpen(false);
              }}
            >
              确认清除
            </Button>
          </>
        }
      >
        此操作会删除当前账号在云端和本设备上的单词进度、复习安排与学习统计，且无法恢复。
      </Modal>
    </Cursor>
  );
}
