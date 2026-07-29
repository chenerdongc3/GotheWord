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
} from "@gotheword/pencil-pup-ui";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  captureAnalyticsEvent,
  captureAnalyticsEventOnce,
} from "./analytics";
import {
  ActiveSession,
  answerActiveSession,
  createActiveSession,
  DailyStats,
  DEFAULT_FREE_STUDY_BATCH_SIZE,
  DEFAULT_REVIEW_BATCH_SIZE,
  EMPTY_DAILY_STATS,
  EMPTY_PROGRESS,
  EMPTY_STATE,
  formatDuration,
  getLastDays,
  isDue,
  localDayKey,
  RandomSource,
  SessionMode,
  StudyWordCount,
  settleActiveSession,
  takeReviewBatch,
} from "./learning";
import {
  useLearningStateSync,
  type SyncStatus,
} from "./useLearningStateSync";
import {
  ALL_WORDS_BY_ID,
  countLearnedWords,
  getDisplayWord,
  PART_OF_SPEECH_LABELS,
  WORD_BOOKS,
  wordBookIdForLevel,
  type WordBookId,
  type Word,
} from "./content/word-books.ts";
import { getLevelCatalogEntry } from "./content/levels.ts";

const CORRECT_FEEDBACK_DELAY_MS = 1_500;

const SYNC_STATUS_META = {
  loading: { label: "读取中", color: "default" },
  synced: { label: "已同步", color: "app-green" },
  pending: { label: "待同步", color: "app-yellow" },
  syncing: { label: "同步中", color: "app-blue" },
  offline: { label: "仅本设备", color: "app-orange" },
  error: { label: "同步失败", color: "app-red" },
  conflict: { label: "同步冲突", color: "app-red" },
} as const satisfies Record<
  SyncStatus,
  {
    label: string;
    color:
      | "default"
      | "app-green"
      | "app-yellow"
      | "app-blue"
      | "app-orange"
      | "app-red";
  }
>;

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

function ModalInitialFocus({ label }: { label: string }) {
  return (
    <span className="sr-only" tabIndex={0}>
      {label}
    </span>
  );
}

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
  return wordId ? ALL_WORDS_BY_ID.get(wordId) : undefined;
}

function formatPlural(plural: string) {
  const normalized = plural.replace("-¨", "¨-");
  if (normalized === "-") return "词形不变（-）";
  if (normalized === "¨-") return "词干元音变音，词尾不变（¨-）";
  if (normalized.startsWith("¨-")) {
    return `词干元音变音，词尾 +${normalized.slice(2)}（${plural}）`;
  }
  if (normalized.startsWith("-")) {
    return `词尾 +${normalized.slice(1)}（${plural}）`;
  }
  return plural;
}

function getLearningWordSizeClass(displayWord: string) {
  const length = Array.from(displayWord).length;
  if (length >= 40) return "text-[11px] sm:text-base";
  if (length >= 32) return "text-[13px] sm:text-lg";
  if (length >= 24) return "text-base sm:text-2xl";
  if (length >= 18) return "text-xl sm:text-3xl";
  if (length >= 14) return "text-2xl sm:text-4xl";
  if (length >= 10) return "text-[2.125rem] sm:text-5xl lg:text-[2.5rem]";
  return "text-[2.125rem] sm:text-[clamp(2.375rem,13vw,4.5rem)] lg:text-6xl";
}

function formatSyncTime(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "时间未知"
    : date.toLocaleString("zh-CN", {
        dateStyle: "medium",
        timeStyle: "short",
      });
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

function sessionAnalyticsProperties(
  session: ActiveSession,
  dailyGoal: 5 | 10 | 20,
) {
  const level = getLevelCatalogEntry(session.levelId);
  return {
    learning_session_id: session.id,
    session_mode: session.mode,
    daily_goal: dailyGoal,
    level_id: session.levelId,
    content_version: level.contentVersion ?? "unavailable",
    source_kind: level.sourceKind,
  } as const;
}

function sessionResumeProperties(
  session: ActiveSession,
  dailyGoal: 5 | 10 | 20,
) {
  const updatedAt = new Date(session.updatedAt).getTime();
  return {
    ...sessionAnalyticsProperties(session, dailyGoal),
    phase: session.phase,
    completed_word_count: session.completed.length,
    queue_word_count: session.queue.length,
    elapsed_seconds: session.elapsedSeconds,
    resume_age_seconds: Number.isFinite(updatedAt)
      ? Math.max(0, Math.round((Date.now() - updatedAt) / 1_000))
      : 0,
  } as const;
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
  const {
    state,
    setState,
    hydrated,
    syncStatus,
    syncError,
    conflict,
    resolvingConflict,
    legacyImportState,
    useRemoteState,
    keepLocalState,
    importLegacyState,
    dismissLegacyImport,
  } = useLearningStateSync(userId);
  const [goalChoice, setGoalChoice] = useState<5 | 10 | 20>(10);
  const [activeTab, setActiveTab] = useState("today");
  const [sessionResumed, setSessionResumed] = useState(false);
  const [sessionInactive, setSessionInactive] = useState(true);
  const [resumeHandled, setResumeHandled] = useState(false);
  const [report, setReport] = useState<SessionReport | null>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const lastActivityRef = useRef(0);
  const autoPronouncedAppearanceRef = useRef<string | null>(null);
  const feedbackAdvanceKeyRef = useRef<string | null>(null);
  const continueAfterFeedbackRef = useRef<() => void>(() => undefined);
  const resumePromptTrackedRef = useRef(new Set<string>());
  const session = sessionResumed ? state.activeSession : null;
  const sessionActive = session !== null;
  const sessionPaused = Boolean(session?.pausedAt);
  const resumeOpen =
    hydrated &&
    !sessionResumed &&
    !resumeHandled &&
    Boolean(state.activeSession);

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
  }, [sessionActive, sessionPaused, sessionInactive, setState]);

  const todayKey = localDayKey();
  const todayStats = state.stats[todayKey] ?? EMPTY_DAILY_STATS;
  const dailyGoal = state.dailyGoal ?? goalChoice;
  const freeStudyBatchSize =
    state.freeStudyBatchSize ?? DEFAULT_FREE_STUDY_BATCH_SIZE;
  const wordBookId = wordBookIdForLevel(state.activeLevel);
  const wordBook = WORD_BOOKS[wordBookId];
  const WORDS = wordBook.words;
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
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const overdueWordCount = dueWords.filter(
    (word) =>
      new Date(state.progress[word.id]?.nextReviewAt ?? 0).getTime() <
      startOfToday.getTime(),
  ).length;
  const weakDueCount = dueWords.filter(
    (word) => state.progress[word.id]?.weak,
  ).length;
  const currentBookProgress = WORDS
    .map((word) => state.progress[word.id])
    .filter(
      (
        progress,
      ): progress is NonNullable<(typeof state.progress)[string]> =>
        Boolean(progress),
    );
  const masteredCount = currentBookProgress.filter(
    (progress) => progress.state === "mastered",
  ).length;
  const weakCount = currentBookProgress.filter((progress) => progress.weak).length;
  const totalAnswers = currentBookProgress.reduce(
    (sum, progress) => sum + progress.totalAnswers,
    0,
  );
  const totalCorrect = currentBookProgress.reduce(
    (sum, progress) => sum + progress.correctAnswers,
    0,
  );
  const learnedCounts = Object.fromEntries(
    (Object.keys(WORD_BOOKS) as WordBookId[]).map((bookId) => [
      bookId,
      countLearnedWords(WORD_BOOKS[bookId].words, state.progress),
    ]),
  ) as Record<WordBookId, number>;
  const currentWord = session
    ? getWord(
        session.feedback?.wordId ??
          (session.phase === "memory"
            ? session.wordIds[session.memoryIndex]
            : session.queue[0]),
      )
    : undefined;
  const correctFeedbackKey =
    session?.feedback?.correct
      ? `${session.id}:${session.answers}:${session.feedback.wordId}`
      : null;
  const pronunciationAppearanceKey =
    session && currentWord && !session.feedback
      ? session.phase === "memory"
        ? `${session.id}:memory:${session.memoryIndex}:${currentWord.id}`
        : `${session.id}:quiz:${session.answers}:${currentWord.id}`
      : null;
  const quizOptions = useMemo(() => {
    if (!currentWord) return [];
    return stableShuffle(
      [currentWord.translation, ...currentWord.distractors],
      `${currentWord.id}-${session?.answers ?? 0}`,
    );
  }, [currentWord, session?.answers]);

  useEffect(() => {
    if (
      !pronunciationAppearanceKey ||
      !currentWord ||
      autoPronouncedAppearanceRef.current === pronunciationAppearanceKey
    ) {
      return;
    }

    autoPronouncedAppearanceRef.current = pronunciationAppearanceKey;
    speakGerman(getDisplayWord(currentWord));
  }, [currentWord, pronunciationAppearanceKey]);

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

  useEffect(() => {
    const persistedSession = state.activeSession;
    if (
      !resumeOpen ||
      !persistedSession ||
      resumePromptTrackedRef.current.has(persistedSession.id)
    ) {
      return;
    }
    resumePromptTrackedRef.current.add(persistedSession.id);
    captureAnalyticsEvent(
      "learning_session_resume_prompt_viewed",
      sessionResumeProperties(persistedSession, dailyGoal),
    );
  }, [dailyGoal, resumeOpen, state.activeSession]);

  useEffect(() => {
    if (
      !hydrated ||
      activeTab !== "today" ||
      sessionActive ||
      report ||
      resumeOpen ||
      dueWords.length === 0
    ) {
      return;
    }
    captureAnalyticsEventOnce(
      "due_review_prompt_viewed",
      {
        due_word_count: dueWords.length,
        review_batch_size: reviewBatch.batch.length,
        remaining_review_count: reviewBatch.remainingCount,
        overdue_word_count: overdueWordCount,
        weak_due_count: weakDueCount,
      },
      {
        dedupeKey: `${userId}:due_review_prompt:${todayKey}`,
        storage: "session",
      },
    );
  }, [
    activeTab,
    dueWords.length,
    hydrated,
    overdueWordCount,
    report,
    resumeOpen,
    reviewBatch.batch.length,
    reviewBatch.remainingCount,
    sessionActive,
    todayKey,
    userId,
    weakDueCount,
  ]);

  const beginSession = (mode: SessionMode) => {
    const reviewSelection = takeReviewBatch(dueWords, reviewBatchSize);
    const selected = mode === "review"
      ? reviewSelection.batch
      : availableNewWords.slice(
          0,
          mode === "new" ? remainingGoal : freeStudyBatchSize,
        );
    if (selected.length === 0) return;
    const wordIds = selected.map((word) => word.id);
    const now = new Date();
    const nextSession = createActiveSession({
      levelId: state.activeLevel,
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
    captureAnalyticsEvent("learning_session_started", {
      ...sessionAnalyticsProperties(nextSession, dailyGoal),
      planned_word_count: wordIds.length,
      due_word_count_before: dueWords.length,
      remaining_goal_before: remainingGoal,
      remaining_review_count: nextSession.remainingReviewCount,
    });
    lastActivityRef.current = Date.now();
    setSessionInactive(false);
    setSessionResumed(true);
    setResumeHandled(true);
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
    const accuracy = current.answers
      ? Number((current.correct / current.answers).toFixed(4))
      : 0;
    captureAnalyticsEvent(
      "learning_session_completed",
      {
        ...sessionAnalyticsProperties(current, dailyGoal),
        planned_word_count: current.wordIds.length,
        completed_word_count: current.completed.length,
        answer_count: current.answers,
        correct_count: current.correct,
        accuracy,
        elapsed_seconds: current.elapsedSeconds,
        weak_word_count: current.weakIds.length,
        remaining_review_count: current.remainingReviewCount,
      },
      { insertId: `${current.id}:completed` },
    );
    if (current.mode === "review" && current.remainingReviewCount === 0) {
      captureAnalyticsEventOnce(
        "due_review_completed",
        {
          ...sessionAnalyticsProperties(current, dailyGoal),
          reviewed_word_count_in_session: current.completed.length,
          answer_count: current.answers,
          accuracy,
          elapsed_seconds: current.elapsedSeconds,
          weak_word_count: current.weakIds.length,
        },
        {
          dedupeKey: `${userId}:due_review_completed:${todayKey}`,
          storage: "local",
          insertId: `${userId}:${todayKey}:due_review_completed`,
        },
      );
    }
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
    captureAnalyticsEvent(
      "learning_session_abandoned",
      {
        ...sessionAnalyticsProperties(session, dailyGoal),
        abandon_reason: "return_home",
        phase: session.phase,
        completed_word_count: session.completed.length,
        queue_word_count: session.queue.length,
        answer_count: session.answers,
        elapsed_seconds: session.elapsedSeconds,
      },
      { insertId: `${session.id}:abandoned:return_home` },
    );
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
    setState((current) => {
      const previousProgress = current.progress[currentWord.id] ?? EMPTY_PROGRESS;
      const previousGoalCount =
        current.stats[todayKey]?.goalNewLearned ?? 0;
      const next = answerActiveSession({
        state: current,
        wordId: currentWord.id,
        correct,
        selected: selected ?? "忘记了",
        rng,
      });
      const feedback = next.activeSession?.feedback;
      if (next === current || !next.activeSession || !feedback) return current;

      const nextSession = next.activeSession;
      captureAnalyticsEvent("learning_answer_submitted", {
        ...sessionAnalyticsProperties(nextSession, dailyGoal),
        word_id: currentWord.id,
        word_kind: currentWord.kind,
        phase: "quiz",
        correct,
        answer_method: selected === null ? "forgot" : "option",
        review_stage_before: previousProgress.stage,
        streak_after: feedback.streak,
        target_streak: feedback.target,
        word_completed: feedback.completed,
        weak_marked:
          nextSession.weakIds.includes(currentWord.id) &&
          !current.activeSession?.weakIds.includes(currentWord.id),
        answer_index_in_session: nextSession.answers,
      });

      const nextGoalCount =
        next.stats[todayKey]?.goalNewLearned ?? previousGoalCount;
      if (previousGoalCount < dailyGoal && nextGoalCount >= dailyGoal) {
        captureAnalyticsEventOnce(
          "daily_goal_completed",
          {
            ...sessionAnalyticsProperties(nextSession, dailyGoal),
            new_words_completed_today: nextGoalCount,
          },
          {
            dedupeKey: `${userId}:daily_goal_completed:${todayKey}`,
            storage: "local",
            insertId: `${userId}:${todayKey}:daily_goal_completed`,
          },
        );
      }
      return next;
    });
  };

  const continueAfterFeedback = () => {
    if (!session?.feedback) return;
    const feedbackKey =
      `${session.id}:${session.answers}:${session.feedback.wordId}`;
    if (feedbackAdvanceKeyRef.current === feedbackKey) return;
    feedbackAdvanceKeyRef.current = feedbackKey;
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

  useEffect(() => {
    continueAfterFeedbackRef.current = continueAfterFeedback;
  });

  useEffect(() => {
    if (!correctFeedbackKey) return;
    const timer = window.setTimeout(
      () => continueAfterFeedbackRef.current(),
      CORRECT_FEEDBACK_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [correctFeedbackKey]);

  const syncMeta = SYNC_STATUS_META[syncStatus];
  const syncTag = (
    <span aria-live="polite">
      <Tag size="small" color={syncMeta.color} variant="outlined">
        {syncMeta.label}
      </Tag>
    </span>
  );
  const syncModals = (
    <>
      <Modal
        open={Boolean(conflict)}
        title="本设备与云端进度冲突"
        typewriter={false}
        maskClosable={false}
        onClose={() => undefined}
        footer={
          <>
            <Button
              disabled={resolvingConflict}
              onClick={useRemoteState}
            >
              使用云端进度
            </Button>
            <Button
              type="primary"
              loading={resolvingConflict}
              onClick={keepLocalState}
            >
              保留本设备进度
            </Button>
          </>
        }
      >
        <div className="grid gap-3 leading-7">
          <ModalInitialFocus label="请选择要保留的学习进度版本。" />
          <p className="m-0">
            两处进度都发生过变化，系统已停止自动覆盖。请选择要继续使用的版本。
          </p>
          <p className="m-0 text-sm text-[#8f7b63]">
            本设备保存：{conflict ? formatSyncTime(conflict.local.savedAt) : "—"}
            <br />
            云端更新：{conflict ? formatSyncTime(conflict.remote.updatedAt) : "—"}
          </p>
          <p className="m-0 text-sm font-bold">
            保留本设备会基于最新云端 revision 再次安全保存；若期间又有设备更新，会继续提示冲突。
          </p>
        </div>
      </Modal>
      <Modal
        open={Boolean(legacyImportState)}
        title="发现未归属账号的旧学习记录"
        typewriter={false}
        maskClosable={false}
        onClose={dismissLegacyImport}
        footer={
          <>
            <Button onClick={dismissLegacyImport}>暂不导入</Button>
            <Button type="primary" onClick={importLegacyState}>
              导入当前账号
            </Button>
          </>
        }
      >
        <div className="grid gap-3 leading-7">
          <ModalInitialFocus label="请选择是否导入旧学习记录。" />
          <p className="m-0">
            这份旧记录没有账号标识，因此不会被自动上传。只有确认后，它才会替换当前设备上的进度并尝试同步。
          </p>
          <p className="m-0 text-sm font-bold">
            旧记录会在云端保存成功后删除；同步失败时仍会保留。
          </p>
        </div>
      </Modal>
    </>
  );

  if (!state.dailyGoal) {
    return (
      <Cursor>
        <main className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1120px] min-w-0 items-center gap-10 px-4 py-9 pb-[max(3rem,env(safe-area-inset-bottom))] text-sm sm:px-5 sm:py-14 sm:text-base lg:grid-cols-[1.1fr_0.9fr] lg:gap-[clamp(2.5rem,8vw,6.25rem)]">
          <section className="min-w-0" aria-labelledby="onboarding-title">
            <Tag color="app-teal" variant="outlined">德语 · A1 起步</Tag>
            <h1
              id="onboarding-title"
              className="my-[1.375rem] max-w-[620px] text-[1.875rem] leading-[1.06] font-black tracking-normal [overflow-wrap:anywhere] sm:text-[clamp(2.5rem,11vw,4.875rem)]"
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
              onClick={() => {
                captureAnalyticsEventOnce(
                  "onboarding_completed",
                  { selected_daily_goal: goalChoice },
                  {
                    dedupeKey: `${userId}:onboarding_completed`,
                    storage: "local",
                    insertId: `${userId}:onboarding_completed`,
                  },
                );
                setState({ ...EMPTY_STATE, dailyGoal: goalChoice });
              }}
            >
              开始我的德语旅程
            </Button>
            {!hydrated && <p className="m-0 text-center text-[13px]" role="status">正在读取你的学习记录…</p>}
            {syncError && <p className="m-0 text-center text-[13px]" role="status">{syncError}</p>}
            {syncTag}
          </Card>
        </main>
        <Footer type="sea" />
        {syncModals}
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
    const learningWordSizeClass = getLearningWordSizeClass(displayWord);
    return (
      <Cursor>
        <div
          className={feedback?.correct ? "min-h-svh cursor-pointer" : "min-h-svh"}
          onClickCapture={
            feedback?.correct
              ? (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  continueAfterFeedback();
                }
              : undefined
          }
        >
        <main className="mx-auto min-h-svh w-full max-w-[960px] min-w-0 px-3 py-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-sm sm:px-5 sm:py-[1.375rem] sm:pb-[max(4.5rem,env(safe-area-inset-bottom))] sm:text-base">
          <header className="mb-3 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 gap-y-1.5 sm:mb-11 sm:gap-3 lg:grid-cols-[1fr_minmax(220px,360px)_1fr] lg:gap-6">
            <Button
              className="min-w-0 justify-self-start"
              type="text"
              onClick={leaveSession}
              aria-label="返回首页"
            >
              <span className="sm:hidden" aria-hidden="true">← 首页</span>
              <span className="hidden sm:inline" aria-hidden="true">← 返回首页</span>
            </Button>
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
              {syncTag}
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
              <h1 className={`m-0 w-full max-w-full overflow-x-auto whitespace-nowrap leading-none font-black tracking-normal ${learningWordSizeClass}`}>{displayWord}</h1>
              <p className="m-0 text-lg leading-tight font-extrabold sm:text-[clamp(1.25rem,7vw,1.625rem)]">{currentWord.translation}</p>
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
                  <p className="m-0 text-sm leading-6 font-bold" role="status">
                    1.5 秒后自动继续 · 点击页面任意处可立即继续
                  </p>
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
                {!feedback.correct && (
                  <Button
                    type="text"
                    onClick={() => speakGerman(displayWord)}
                    aria-label={`朗读 ${displayWord}`}
                  >
                    🔊 听发音
                  </Button>
                )}
                <Button type="primary" size="large" onClick={continueAfterFeedback}>
                  {feedback.correct
                    ? session.queue.length === 0
                      ? "立即查看学习报告"
                      : "立即继续"
                    : session.queue.length === 0
                      ? "查看学习报告"
                      : "继续"}
                </Button>
              </div>
            </Card>
          ) : session.phase === "memory" ? (
            <article className="grid min-w-0 items-start gap-3 sm:gap-[1.375rem] lg:grid-cols-[0.86fr_1.14fr]">
              <Card color="app-teal" pattern="app-yellow" className="flex min-h-0 min-w-0 flex-col justify-center gap-3 sm:min-h-[320px] sm:gap-[1.125rem] lg:sticky lg:top-5 lg:min-h-[410px]">
                <div className="flex min-w-0 items-center justify-between gap-2.5 sm:gap-3.5">
                  <Tag color="app-yellow" variant="solid">
                    {PART_OF_SPEECH_LABELS[currentWord.kind]}
                  </Tag>
                  <Button
                    className="shrink-0"
                    type="default"
                    aria-label={`朗读 ${displayWord}`}
                    onClick={() => speakGerman(displayWord)}
                  >
                    <span className="sm:hidden" aria-hidden="true">🔊</span>
                    <span className="hidden sm:inline" aria-hidden="true">🔊 发音</span>
                  </Button>
                </div>
                <h1 className={`m-0 w-full max-w-full overflow-x-auto whitespace-nowrap leading-none font-black tracking-normal ${learningWordSizeClass}`}>{displayWord}</h1>
                <p className="m-0 text-lg leading-tight font-extrabold sm:text-[clamp(1.25rem,7vw,1.625rem)]">{currentWord.translation}</p>
                {currentWord.plural && (
                  <p className="m-0 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 opacity-85">
                    <span>单数：{displayWord}</span>
                    <span aria-hidden="true">·</span>
                    <span>复数：{formatPlural(currentWord.plural)}</span>
                  </p>
                )}
              </Card>
              <Card className="grid min-w-0 gap-4 sm:gap-6">
                <Title size="middle" color="app-yellow">在句子里认识它</Title>
                <div className="grid min-w-0 gap-1">
                  {currentWord.examples.map((example, index) => (
                    <div className="grid min-w-0 grid-cols-[1.75rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-dashed border-[#5e4b3533] py-2.5 last:border-b-0 sm:grid-cols-[2.125rem_minmax(0,1fr)_auto] sm:gap-3 sm:py-[0.9375rem]" key={example.de}>
                      <span className="font-[Nunito] text-[13px] leading-none font-black text-[#0ca89c]">0{index + 1}</span>
                      <div className="min-w-0">
                        <p className="mb-1 min-w-0 text-sm leading-5 font-extrabold [overflow-wrap:anywhere] sm:text-[17px] sm:leading-6">{example.de}</p>
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
              <div className="flex min-w-0 items-center justify-between gap-3.5">
                <Tag color="app-blue" variant="outlined">
                  {session.mode === "review" ? "复习测试 · 连续答对 2 次" : "新词测试 · 连续答对 3 次"}
                </Tag>
                <Button
                  type="text"
                  aria-label={`朗读 ${displayWord}`}
                  onClick={() => speakGerman(displayWord)}
                >
                  🔊
                </Button>
              </div>
              <p className="m-0 font-bold text-[#8f7b63]">请选择正确的中文释义</p>
              <h1 className={`m-0 w-full max-w-full overflow-x-auto whitespace-nowrap leading-none font-black tracking-normal ${learningWordSizeClass}`}>{displayWord}</h1>
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
        </div>
        {syncModals}
      </Cursor>
    );
  }

  if (report) {
    const accuracy = report.answers ? Math.round((report.correct / report.answers) * 100) : 0;
    const weakWords = report.weakIds.map((wordId) => getWord(wordId)).filter(Boolean) as Word[];
    return (
      <Cursor>
        <main className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[920px] min-w-0 flex-col items-center gap-6 px-4 py-12 pb-[max(4rem,env(safe-area-inset-bottom))] text-center sm:px-5 sm:py-[4.5rem]">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Tag color="app-green" variant="outlined">本轮完成</Tag>
            {syncTag}
          </div>
          <h1 className="m-0 text-[1.875rem] leading-[1.08] font-black tracking-normal [overflow-wrap:anywhere] sm:text-[clamp(2.375rem,10vw,3.875rem)]">
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
            <Card pattern="app-teal" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.25rem,10vw,3.5rem)]">{report.completed}</strong><span className="text-sm font-bold">{report.mode === "review" ? "完成复习" : "新学单词"}</span></Card>
            <Card pattern="app-yellow" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.25rem,10vw,3.5rem)]">{report.answers}</strong><span className="text-sm font-bold">答题次数</span></Card>
            <Card pattern="app-blue" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.25rem,10vw,3.5rem)]">{accuracy}%</strong><span className="text-sm font-bold">正确率</span></Card>
            <Card pattern="purple" className="grid min-w-0 justify-items-center gap-2"><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.25rem,10vw,3.5rem)]">{formatDuration(report.seconds)}</strong><span className="text-sm font-bold">学习时长</span></Card>
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
        {syncModals}
      </Cursor>
    );
  }

  const homeContent = (
    <div className="grid min-w-0 gap-6 pt-4 sm:gap-8 sm:pt-6">
      <section className="flex min-w-0 items-end justify-between gap-7">
        <div className="min-w-0">
          <Tag color="app-teal" variant="outlined">Heute · 今天</Tag>
          <h1 className="my-4 max-w-[780px] text-[1.625rem] leading-[1.12] font-black tracking-normal [overflow-wrap:anywhere] sm:text-[clamp(1.875rem,8vw,3rem)]">Guten Tag！准备好今天的小进步了吗？</h1>
          <p className="m-0 leading-7 text-[#8f7b63]">先完成到期复习，再认识新的单词，记忆会更轻松。</p>
        </div>
        <div className="hidden sm:block"><Time /></div>
      </section>

      <section className="grid min-w-0 gap-[1.375rem] lg:grid-cols-[1.08fr_0.92fr]">
        <Card color={dueWords.length > 0 ? "app-orange" : "app-green"} pattern="app-yellow" className="flex min-h-[220px] min-w-0 flex-col justify-between gap-5 sm:min-h-[300px] sm:gap-6">
          <div className="grid min-w-0 justify-items-start">
            <Tag color={dueWords.length > 0 ? "app-orange" : "app-green"} variant="outlined">优先任务</Tag>
            <span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">今日待复习</span>
            <strong className="mt-2.5 font-[Nunito] text-[3.75rem] leading-[0.9] font-black sm:text-[clamp(4.625rem,18vw,7.25rem)]">{dueWords.length}</strong>
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

        <Card className="flex min-h-[220px] min-w-0 flex-col justify-between gap-5 sm:min-h-[300px] sm:gap-6">
          <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">今日新词目标</span>
              <h2 className="m-0 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">{todayStats.goalNewLearned} / {dailyGoal} 个</h2>
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
            <h2 id="today-data-title" className="m-0 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">今天的学习足迹</h2>
          </div>
          <Button type="link" onClick={() => setActiveTab("stats")}>查看完整统计 →</Button>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-4">
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">新学单词</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{todayStats.newLearned}</strong><small className="pb-1 font-bold">个</small></Card>
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">完成复习</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{todayStats.reviewed}</strong><small className="pb-1 font-bold">个</small></Card>
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">学习时长</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{Math.floor(todayStats.seconds / 60)}</strong><small className="pb-1 font-bold">分钟</small></Card>
          <Card className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold opacity-75">连续学习</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{calculateStreak(state.stats)}</strong><small className="pb-1 font-bold">天</small></Card>
        </div>
      </section>

      <Card type="dashed" className="flex min-w-0 flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center sm:gap-7">
        <div className="min-w-0">
          <Tag color="app-blue" variant="outlined">自由学习</Tag>
          <h2 className="my-3 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">还有一点时间？再认识 {freeStudyBatchSize} 个词</h2>
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
          <h1 className="my-4 max-w-[780px] text-[1.625rem] leading-[1.12] font-black tracking-normal [overflow-wrap:anywhere] sm:text-[clamp(1.875rem,8vw,3rem)]">看见每一天积累起来的力量。</h1>
          <p className="m-0 leading-7 text-[#8f7b63]">统计以实际完成和有效互动时间为准。</p>
        </div>
      </section>
      <div className="grid min-w-0 grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-4">
        <Card pattern="app-teal" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">今日新词</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{todayStats.newLearned}</strong><small className="pb-1 font-bold">个</small></Card>
        <Card pattern="app-blue" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">今日复习</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{todayStats.reviewed}</strong><small className="pb-1 font-bold">个</small></Card>
        <Card pattern="app-yellow" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">已掌握</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{masteredCount}</strong><small className="pb-1 font-bold">个</small></Card>
        <Card pattern="app-orange" className="grid min-w-0 grid-cols-[auto_1fr] items-end gap-x-1.5 gap-y-2"><span className="col-span-2 text-sm font-bold">薄弱单词</span><strong className="font-[Nunito] text-[2rem] leading-none font-black sm:text-[clamp(2.375rem,11vw,3.5rem)]">{weakCount}</strong><small className="pb-1 font-bold">个</small></Card>
      </div>
      <div className="grid min-w-0 gap-[1.375rem] lg:grid-cols-[1.08fr_0.92fr]">
        <Card className="grid min-w-0 gap-[1.375rem]">
          <div className="flex min-w-0 flex-wrap items-start justify-between gap-3 sm:gap-[1.125rem]">
            <div className="min-w-0"><span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">最近 7 天</span><h2 className="m-0 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">每日学习数量</h2></div>
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
            <div className="min-w-0"><span className="mb-1.5 block text-xs font-extrabold tracking-[0.16em] uppercase opacity-70">最近 7 天</span><h2 className="m-0 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">每日学习时长</h2></div>
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
          <h2 className="my-3 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">{totalAnswers ? Math.round((totalCorrect / totalAnswers) * 100) : 0}% 正确率</h2>
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
        <h1 className="my-4 max-w-[780px] text-[1.625rem] leading-[1.12] font-black tracking-normal [overflow-wrap:anywhere] sm:text-[clamp(1.875rem,8vw,3rem)]">让计划适合你，而不是反过来。</h1>
        <p className="m-0 leading-7 text-[#8f7b63]">目标修改只影响之后的新词计划，已经进入复习流程的单词不会变化。</p>
      </section>
      <Card className="grid min-w-0 gap-[1.375rem]">
        <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <Title size="middle" color="app-teal">当前词书</Title>
            <p className="mt-2 mb-0 leading-7 text-[#8f7b63]">
              切换后只学习和复习该词书，另一册的学习记录会保留。
            </p>
          </div>
          <Tag color="app-teal" variant="outlined">
            共 {wordBook.words.length} 词 · 已学 {learnedCounts[wordBookId]} 词
          </Tag>
        </div>
        <Radio
          direction="vertical"
          size="large"
          value={wordBookId}
          onChange={(value) =>
            setState((current) => ({
              ...current,
              activeLevel: WORD_BOOKS[value as WordBookId].level,
            }))
          }
          options={(Object.keys(WORD_BOOKS) as WordBookId[]).map((bookId) => {
            const book = WORD_BOOKS[bookId];
            return {
              value: bookId,
              label: (
                <span className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <strong>{book.name}</strong>
                  <small className="font-bold text-[#8f7b63]">
                    共 {book.words.length} 词 · 已学 {learnedCounts[bookId]} 词
                  </small>
                </span>
              ),
            };
          })}
        />
        <Progress
          percent={
            wordBook.words.length
              ? (learnedCounts[wordBookId] / wordBook.words.length) * 100
              : 0
          }
          infoPosition="top"
          infoFormat={() =>
            `已学 ${learnedCounts[wordBookId]} / ${wordBook.words.length}`
          }
        />
      </Card>
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
      <Card className="grid min-w-0 gap-[1.375rem]">
        <div className="min-w-0">
          <Title size="middle" color="app-blue">每次自由学习词数</Title>
          <p className="mt-2 mb-0 leading-7 text-[#8f7b63]">
            只影响之后开启的自由学习，不会改变每日计划或当前学习。
          </p>
        </div>
        <Radio
          direction="vertical"
          size="large"
          value={freeStudyBatchSize}
          onChange={(value) =>
            setState((current) => ({
              ...current,
              freeStudyBatchSize: value as StudyWordCount,
            }))
          }
          options={[
            { label: "每次 5 个 · 短时练习", value: 5 },
            { label: "每次 10 个 · 稳定加量", value: 10 },
            { label: "每次 20 个 · 集中学习", value: 20 },
          ]}
        />
      </Card>
      <Card type="dashed" className="flex min-w-0 flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center sm:gap-7">
        <div className="min-w-0">
          <h2 className="my-3 text-xl leading-tight font-black tracking-normal sm:text-[clamp(1.375rem,7vw,1.875rem)]">重新开始</h2>
          <p className="m-0 leading-7 text-[#8f7b63]">清除当前账号的学习进度、复习计划和统计数据。</p>
        </div>
        <Button danger onClick={() => setResetOpen(true)}>清除学习记录</Button>
      </Card>
    </div>
  );

  return (
    <Cursor>
      <div className="min-h-svh text-sm sm:text-base">
        <header className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-wrap items-center justify-between gap-2.5 px-3 py-3 sm:gap-3 sm:px-5 sm:pt-[1.375rem] sm:pb-3.5">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="GotheWord 德语记忆花园">
            <span className="grid size-10 shrink-0 -rotate-3 place-items-center rounded-[50%_43%_48%_45%] bg-[#19c8b9] font-[Nunito] text-xl leading-none font-black text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.08)] sm:size-[46px] sm:text-[26px]">G</span>
            <div className="grid min-w-0 gap-px">
              <strong className="truncate font-[Nunito] text-lg leading-none font-black sm:text-[22px]">GotheWord</strong>
              <small className="text-[11px] text-[#8f7b63] sm:text-xs">德语记忆花园</small>
            </div>
          </div>
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-1 sm:gap-2">
            {syncTag}
            <Tag color="app-teal">{username}</Tag>
            <Button type="text" size="small" onClick={onSignOut}>退出</Button>
          </div>
        </header>
        <Divider type="wave-yellow" />
        <main className="mx-auto mt-2 mb-16 w-full max-w-[1180px] min-w-0 px-3 pb-[env(safe-area-inset-bottom)] sm:mt-[1.625rem] sm:mb-20 sm:px-5">
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
                const persistedSession = state.activeSession;
                if (persistedSession) {
                  captureAnalyticsEvent(
                    "learning_session_abandoned",
                    {
                      ...sessionAnalyticsProperties(
                        persistedSession,
                        dailyGoal,
                      ),
                      abandon_reason: "discard_from_resume",
                      phase: persistedSession.phase,
                      completed_word_count: persistedSession.completed.length,
                      queue_word_count: persistedSession.queue.length,
                      answer_count: persistedSession.answers,
                      elapsed_seconds: persistedSession.elapsedSeconds,
                    },
                    {
                      insertId:
                        `${persistedSession.id}:abandoned:discard_from_resume`,
                    },
                  );
                }
                setState((current) => settleActiveSession(current));
                setResumeHandled(true);
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
                const persistedSession = state.activeSession;
                if (persistedSession) {
                  captureAnalyticsEvent("learning_session_resumed", {
                    ...sessionResumeProperties(
                      persistedSession,
                      dailyGoal,
                    ),
                    resume_source: "persisted_session_modal",
                  });
                }
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
                setResumeHandled(true);
              }}
            >
              继续本次学习
            </Button>
          </>
        }
      >
        <div>
          <ModalInitialFocus label="请选择继续或结束本次学习。" />
          当前单词、队列、完成数和有效学习时长都已保存。你可以从中断处继续，也可以结算并结束本次学习。
        </div>
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
                setState({ ...EMPTY_STATE });
                setSessionResumed(false);
                setSessionInactive(true);
                setResumeHandled(true);
                setGoalChoice(10);
                setResetOpen(false);
              }}
            >
              确认清除
            </Button>
          </>
        }
      >
        <div>
          <ModalInitialFocus label="请确认是否清除学习记录。" />
          此操作会删除当前账号在云端和本设备上的单词进度、复习安排与学习统计，且无法恢复。
        </div>
      </Modal>
      {syncModals}
    </Cursor>
  );
}
