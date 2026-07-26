export type WordState = "unlearned" | "learning" | "scheduled" | "weak" | "mastered";

export type WordProgress = {
  state: WordState;
  stage: number;
  nextReviewAt?: string;
  streak: number;
  totalAnswers: number;
  correctAnswers: number;
  weak: boolean;
  firstLearnedAt?: string;
};

export type DailyStats = {
  newLearned: number;
  goalNewLearned: number;
  reviewed: number;
  seconds: number;
  answers: number;
  correct: number;
};

export type SessionMode = "new" | "review" | "free";

export type SessionFeedback = {
  wordId: string;
  correct: boolean;
  selected: string;
  streak: number;
  target: number;
  completed: boolean;
};

export type ActiveSession = {
  id: string;
  mode: SessionMode;
  phase: "memory" | "quiz";
  memoryIndex: number;
  wordIds: string[];
  queue: string[];
  completed: string[];
  weakIds: string[];
  reviewMistakes: Record<string, number>;
  reviewStreaks: Record<string, number>;
  answers: number;
  correct: number;
  elapsedSeconds: number;
  remainingReviewCount: number;
  pausedAt?: string;
  updatedAt: string;
  feedback?: SessionFeedback;
};

export type AppState = {
  version: 2;
  dailyGoal?: 5 | 10 | 20;
  progress: Record<string, WordProgress>;
  stats: Record<string, DailyStats>;
  activeSession: ActiveSession | null;
};

type AppStateV1 = {
  version: 1;
  dailyGoal?: 5 | 10 | 20;
  progress: Record<string, WordProgress & { reviewMistakes?: number }>;
  stats: Record<string, DailyStats>;
};

export type RandomSource = () => number;

export const DEFAULT_REVIEW_BATCH_SIZE = 20;

export const EMPTY_STATE: AppState = {
  version: 2,
  progress: {},
  stats: {},
  activeSession: null,
};

export const EMPTY_PROGRESS: WordProgress = {
  state: "unlearned",
  stage: 0,
  streak: 0,
  totalAnswers: 0,
  correctAnswers: 0,
  weak: false,
};

export const EMPTY_DAILY_STATS: DailyStats = {
  newLearned: 0,
  goalNewLearned: 0,
  reviewed: 0,
  seconds: 0,
  answers: 0,
  correct: 0,
};

export const REVIEW_INTERVALS: Record<number, number> = {
  1: 3,
  2: 7,
  3: 14,
  4: 30,
  5: 60,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function normalizeStringNumberRecord(value: unknown) {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      ([, item]) => typeof item === "number" && Number.isFinite(item) && item >= 0,
    ),
  ) as Record<string, number>;
}

function migrateProgress(
  progress: AppStateV1["progress"] | AppState["progress"],
  resetStreaks: boolean,
) {
  return Object.fromEntries(
    Object.entries(progress).map(([wordId, value]) => {
      const current = {
        ...(value as WordProgress & { reviewMistakes?: number }),
      };
      delete current.reviewMistakes;
      return [
        wordId,
        {
          ...current,
          streak: resetStreaks ? 0 : current.streak,
        },
      ];
    }),
  );
}

function migrateActiveSession(value: unknown): ActiveSession | null {
  if (!isRecord(value)) return null;
  const mode = value.mode;
  const phase = value.phase;
  if (
    typeof value.id !== "string" ||
    (mode !== "new" && mode !== "review" && mode !== "free") ||
    (phase !== "memory" && phase !== "quiz") ||
    !isStringArray(value.wordIds) ||
    !isStringArray(value.queue) ||
    !isStringArray(value.completed) ||
    !isStringArray(value.weakIds) ||
    typeof value.memoryIndex !== "number" ||
    typeof value.answers !== "number" ||
    typeof value.correct !== "number" ||
    typeof value.elapsedSeconds !== "number" ||
    typeof value.updatedAt !== "string"
  ) {
    return null;
  }

  const feedback = isRecord(value.feedback) &&
    typeof value.feedback.wordId === "string" &&
    typeof value.feedback.correct === "boolean" &&
    typeof value.feedback.selected === "string" &&
    typeof value.feedback.streak === "number" &&
    typeof value.feedback.target === "number" &&
    typeof value.feedback.completed === "boolean"
    ? value.feedback as SessionFeedback
    : undefined;

  return {
    id: value.id,
    mode,
    phase,
    memoryIndex: Math.max(0, Math.floor(value.memoryIndex)),
    wordIds: value.wordIds,
    queue: value.queue,
    completed: value.completed,
    weakIds: value.weakIds,
    reviewMistakes: normalizeStringNumberRecord(value.reviewMistakes),
    reviewStreaks: normalizeStringNumberRecord(value.reviewStreaks),
    answers: Math.max(0, Math.floor(value.answers)),
    correct: Math.max(0, Math.floor(value.correct)),
    elapsedSeconds: Math.max(0, Math.floor(value.elapsedSeconds)),
    remainingReviewCount:
      typeof value.remainingReviewCount === "number"
        ? Math.max(0, Math.floor(value.remainingReviewCount))
        : 0,
    pausedAt: typeof value.pausedAt === "string" ? value.pausedAt : undefined,
    updatedAt: value.updatedAt,
    feedback,
  };
}

export function migrateAppState(value: unknown): AppState | null {
  if (!isRecord(value) || !isRecord(value.progress) || !isRecord(value.stats)) {
    return null;
  }

  if (value.version === 1) {
    const legacy = value as AppStateV1;
    return {
      version: 2,
      dailyGoal: legacy.dailyGoal,
      progress: migrateProgress(legacy.progress, true),
      stats: legacy.stats,
      activeSession: null,
    };
  }

  if (value.version !== 2) return null;
  const current = value as unknown as AppState;
  return {
    version: 2,
    dailyGoal: current.dailyGoal,
    progress: migrateProgress(current.progress, false),
    stats: current.stats,
    activeSession: migrateActiveSession(current.activeSession),
  };
}

export function localDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addLocalDays(date: Date, days: number) {
  const next = new Date(date);
  next.setHours(12, 0, 0, 0);
  next.setDate(next.getDate() + days);
  return next.toISOString();
}

export function isDue(progress: WordProgress | undefined, now = new Date()) {
  if (!progress?.nextReviewAt || progress.state === "mastered") return false;
  return new Date(progress.nextReviewAt).getTime() <= now.getTime();
}

export function insertThreeToFiveLater(
  queue: string[],
  wordId: string,
  rng: RandomSource = Math.random,
) {
  const randomValue = Math.min(0.999999, Math.max(0, rng()));
  const offset = 3 + Math.floor(randomValue * 3);
  const index = Math.min(queue.length, offset);
  const next = [...queue];
  next.splice(index, 0, wordId);
  return next;
}

export function takeReviewBatch<T>(
  items: T[],
  limit = DEFAULT_REVIEW_BATCH_SIZE,
) {
  const safeLimit = Number.isFinite(limit)
    ? Math.max(1, Math.floor(limit))
    : DEFAULT_REVIEW_BATCH_SIZE;
  return {
    batch: items.slice(0, safeLimit),
    remainingCount: Math.max(0, items.length - safeLimit),
  };
}

export function createActiveSession({
  id,
  mode,
  wordIds,
  remainingReviewCount = 0,
  now = new Date(),
}: {
  id: string;
  mode: SessionMode;
  wordIds: string[];
  remainingReviewCount?: number;
  now?: Date;
}): ActiveSession {
  return {
    id,
    mode,
    phase: mode === "review" ? "quiz" : "memory",
    memoryIndex: 0,
    wordIds: [...wordIds],
    queue: [...wordIds],
    completed: [],
    weakIds: [],
    reviewMistakes: {},
    reviewStreaks: {},
    answers: 0,
    correct: 0,
    elapsedSeconds: 0,
    remainingReviewCount: mode === "review" ? remainingReviewCount : 0,
    updatedAt: now.toISOString(),
  };
}

function addDailyStats(
  stats: Record<string, DailyStats>,
  dayKey: string,
  update: Partial<DailyStats>,
) {
  const existing = stats[dayKey] ?? EMPTY_DAILY_STATS;
  const next = Object.fromEntries(
    Object.entries(update).map(([key, value]) => [
      key,
      (existing[key as keyof DailyStats] as number) + (value ?? 0),
    ]),
  ) as Partial<DailyStats>;
  return { ...stats, [dayKey]: { ...existing, ...next } };
}

export function answerActiveSession({
  state,
  wordId,
  correct,
  selected,
  now = new Date(),
  rng = Math.random,
}: {
  state: AppState;
  wordId: string;
  correct: boolean;
  selected: string;
  now?: Date;
  rng?: RandomSource;
}): AppState {
  const session = state.activeSession;
  if (
    !session ||
    session.phase !== "quiz" ||
    session.feedback ||
    session.queue[0] !== wordId
  ) {
    return state;
  }

  const target = session.mode === "review" ? 2 : 3;
  const previous = state.progress[wordId] ?? EMPTY_PROGRESS;
  const previousStreak =
    session.mode === "review"
      ? session.reviewStreaks[wordId] ?? 0
      : previous.streak;
  const streak = correct ? previousStreak + 1 : 0;
  const mistakes =
    session.mode === "review" && !correct
      ? (session.reviewMistakes[wordId] ?? 0) + 1
      : session.reviewMistakes[wordId] ?? 0;
  const weakThisRound = session.mode === "review" && mistakes >= 2;
  const weak = previous.weak || weakThisRound;
  const completed = streak >= target;

  let nextProgress: WordProgress = {
    ...previous,
    state: session.mode === "review" ? (weak ? "weak" : "scheduled") : "learning",
    streak: session.mode === "review" ? 0 : streak,
    totalAnswers: previous.totalAnswers + 1,
    correctAnswers: previous.correctAnswers + (correct ? 1 : 0),
    weak,
  };

  if (completed && session.mode !== "review") {
    nextProgress = {
      ...nextProgress,
      state: "scheduled",
      stage: 1,
      streak: 0,
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
        weak: weakThisRound,
        nextReviewAt: addLocalDays(now, interval),
      };
    }
  }

  const remainingQueue = session.queue.slice(1);
  const nextQueue = completed
    ? remainingQueue
    : insertThreeToFiveLater(remainingQueue, wordId, rng);
  const nextSession: ActiveSession = {
    ...session,
    queue: nextQueue,
    completed: completed ? [...session.completed, wordId] : session.completed,
    weakIds:
      weakThisRound && !session.weakIds.includes(wordId)
        ? [...session.weakIds, wordId]
        : session.weakIds,
    reviewMistakes:
      session.mode === "review"
        ? { ...session.reviewMistakes, [wordId]: mistakes }
        : session.reviewMistakes,
    reviewStreaks:
      session.mode === "review"
        ? { ...session.reviewStreaks, [wordId]: streak }
        : session.reviewStreaks,
    answers: session.answers + 1,
    correct: session.correct + (correct ? 1 : 0),
    updatedAt: now.toISOString(),
    feedback: {
      wordId,
      correct,
      selected,
      streak,
      target,
      completed,
    },
  };

  return {
    ...state,
    progress: { ...state.progress, [wordId]: nextProgress },
    stats: addDailyStats(state.stats, localDayKey(now), {
      answers: 1,
      correct: correct ? 1 : 0,
      newLearned: completed && session.mode !== "review" ? 1 : 0,
      goalNewLearned: completed && session.mode === "new" ? 1 : 0,
      reviewed: completed && session.mode === "review" ? 1 : 0,
    }),
    activeSession: nextSession,
  };
}

export function settleActiveSession(
  state: AppState,
  now = new Date(),
): AppState {
  if (!state.activeSession) return state;
  return {
    ...state,
    stats: addDailyStats(state.stats, localDayKey(now), {
      seconds: state.activeSession.elapsedSeconds,
    }),
    activeSession: null,
  };
}

export function formatDuration(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const remaining = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

export function getLastDays(count: number, today = new Date()) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (count - 1 - index));
    return {
      key: localDayKey(date),
      label: `${date.getMonth() + 1}/${date.getDate()}`,
    };
  });
}
