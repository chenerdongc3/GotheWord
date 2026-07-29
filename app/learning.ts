import { resolveRuntimeWordId } from "./content/word-books.ts";
import { localDayKey } from "./date.ts";
import { isLevelId, type LevelId } from "./content/levels.ts";

export { localDayKey } from "./date.ts";

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
  /** Absent on historical days because v2 did not record level attribution. */
  levelBreakdown?: Partial<Record<LevelId, Omit<DailyStats, "levelBreakdown">>>;
};

export type SessionMode = "new" | "review" | "free";
export type StudyWordCount = 5 | 10 | 20;

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
  levelId: LevelId;
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
  version: 3;
  activeLevel: LevelId;
  dailyGoal?: StudyWordCount;
  freeStudyBatchSize: StudyWordCount;
  progress: Record<string, WordProgress>;
  stats: Record<string, DailyStats>;
  activeSession: ActiveSession | null;
};

type AppStateV1 = {
  version: 1;
  dailyGoal?: StudyWordCount;
  progress: Record<string, WordProgress & { reviewMistakes?: number }>;
  stats: Record<string, DailyStats>;
};

export type RandomSource = () => number;

export const DEFAULT_REVIEW_BATCH_SIZE = 20;
export const DEFAULT_FREE_STUDY_BATCH_SIZE: StudyWordCount = 5;

export const EMPTY_STATE: AppState = {
  version: 3,
  activeLevel: "A1",
  freeStudyBatchSize: DEFAULT_FREE_STUDY_BATCH_SIZE,
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

const WORD_STATE_RANK: Record<WordState, number> = {
  unlearned: 0,
  learning: 1,
  scheduled: 2,
  weak: 3,
  mastered: 4,
};

function earliestIso(left?: string, right?: string) {
  if (!left) return right;
  if (!right) return left;
  return left <= right ? left : right;
}

export function mergeWordProgress(
  left: WordProgress,
  right: WordProgress,
): WordProgress {
  const preferred =
    right.stage > left.stage ||
    (right.stage === left.stage &&
      WORD_STATE_RANK[right.state] > WORD_STATE_RANK[left.state])
      ? right
      : left;
  const totalAnswers = Math.max(left.totalAnswers, right.totalAnswers);
  return {
    ...preferred,
    stage: Math.max(left.stage, right.stage),
    streak: Math.max(left.streak, right.streak),
    totalAnswers,
    correctAnswers: Math.min(
      totalAnswers,
      Math.max(left.correctAnswers, right.correctAnswers),
    ),
    weak: left.weak || right.weak,
    firstLearnedAt: earliestIso(left.firstLearnedAt, right.firstLearnedAt),
    nextReviewAt:
      preferred.state === "mastered"
        ? undefined
        : earliestIso(left.nextReviewAt, right.nextReviewAt),
  };
}

function migrateProgress(
  progress: AppStateV1["progress"] | AppState["progress"],
  resetStreaks: boolean,
) {
  const migrated: Record<string, WordProgress> = {};
  for (const [wordId, value] of Object.entries(progress)) {
    const current = {
      ...(value as WordProgress & { reviewMistakes?: number }),
    };
    delete current.reviewMistakes;
    const nextProgress = {
      ...current,
      streak: resetStreaks ? 0 : current.streak,
    };
    // Unknown progress is retained for diagnostics and possible future recovery.
    // Unknown active-session references are handled more strictly below.
    const resolvedId = resolveRuntimeWordId(wordId) ?? wordId;
    migrated[resolvedId] = migrated[resolvedId]
      ? mergeWordProgress(migrated[resolvedId], nextProgress)
      : nextProgress;
  }
  return migrated;
}

function migrateSessionIds(values: string[]) {
  const migrated: string[] = [];
  for (const value of values) {
    const resolved = resolveRuntimeWordId(value);
    if (!resolved) return null;
    migrated.push(resolved);
  }
  return migrated;
}

function migrateSessionRecord(value: unknown) {
  const record = normalizeStringNumberRecord(value);
  const migrated: Record<string, number> = {};
  for (const [wordId, count] of Object.entries(record)) {
    const resolved = resolveRuntimeWordId(wordId);
    if (!resolved) return null;
    migrated[resolved] = Math.max(migrated[resolved] ?? 0, count);
  }
  return migrated;
}

function migrateActiveSession(
  value: unknown,
  fallbackLevel: LevelId,
): ActiveSession | null {
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

  const wordIds = migrateSessionIds(value.wordIds);
  const queue = migrateSessionIds(value.queue);
  const completed = migrateSessionIds(value.completed);
  const weakIds = migrateSessionIds(value.weakIds);
  const reviewMistakes = migrateSessionRecord(value.reviewMistakes);
  const reviewStreaks = migrateSessionRecord(value.reviewStreaks);
  if (
    !wordIds ||
    !queue ||
    !completed ||
    !weakIds ||
    !reviewMistakes ||
    !reviewStreaks
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
    ? {
        ...(value.feedback as SessionFeedback),
        wordId: resolveRuntimeWordId(value.feedback.wordId),
      }
    : undefined;
  if (feedback && !feedback.wordId) return null;

  return {
    id: value.id,
    levelId: isLevelId(value.levelId) ? value.levelId : fallbackLevel,
    mode,
    phase,
    memoryIndex: Math.max(0, Math.floor(value.memoryIndex)),
    wordIds: [...new Set(wordIds)],
    queue,
    completed: [...new Set(completed)],
    weakIds: [...new Set(weakIds)],
    reviewMistakes,
    reviewStreaks,
    answers: Math.max(0, Math.floor(value.answers)),
    correct: Math.max(0, Math.floor(value.correct)),
    elapsedSeconds: Math.max(0, Math.floor(value.elapsedSeconds)),
    remainingReviewCount:
      typeof value.remainingReviewCount === "number"
        ? Math.max(0, Math.floor(value.remainingReviewCount))
        : 0,
    pausedAt: typeof value.pausedAt === "string" ? value.pausedAt : undefined,
    updatedAt: value.updatedAt,
    feedback: feedback as SessionFeedback | undefined,
  };
}

export function migrateAppState(value: unknown): AppState | null {
  if (!isRecord(value) || !isRecord(value.progress) || !isRecord(value.stats)) {
    return null;
  }

  if (value.version === 1) {
    const legacy = value as AppStateV1;
    return {
      version: 3,
      activeLevel: "A1",
      dailyGoal: legacy.dailyGoal,
      freeStudyBatchSize: DEFAULT_FREE_STUDY_BATCH_SIZE,
      progress: migrateProgress(legacy.progress, true),
      stats: legacy.stats,
      activeSession: null,
    };
  }

  if (value.version !== 2 && value.version !== 3) return null;
  const current = value as unknown as AppState;
  const activeLevel = isLevelId(current.activeLevel)
    ? current.activeLevel
    : value.wordBookId === "a2"
      ? "A2"
      : "A1";
  return {
    version: 3,
    activeLevel,
    dailyGoal: current.dailyGoal,
    freeStudyBatchSize:
      current.freeStudyBatchSize === 10 || current.freeStudyBatchSize === 20
        ? current.freeStudyBatchSize
        : DEFAULT_FREE_STUDY_BATCH_SIZE,
    progress: migrateProgress(current.progress, false),
    stats: current.stats,
    activeSession: migrateActiveSession(
      current.activeSession,
      activeLevel,
    ),
  };
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
  levelId = "A1",
  mode,
  wordIds,
  remainingReviewCount = 0,
  now = new Date(),
}: {
  id: string;
  levelId?: LevelId;
  mode: SessionMode;
  wordIds: string[];
  remainingReviewCount?: number;
  now?: Date;
}): ActiveSession {
  return {
    id,
    levelId,
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
  levelId: LevelId,
) {
  const existing = stats[dayKey] ?? EMPTY_DAILY_STATS;
  const next = Object.fromEntries(
    Object.entries(update)
      .filter(([, value]) => typeof value === "number")
      .map(([key, value]) => [
        key,
        (existing[key as keyof DailyStats] as number) + Number(value),
      ]),
  ) as Partial<DailyStats>;
  const existingLevel = existing.levelBreakdown?.[levelId] ?? EMPTY_DAILY_STATS;
  const nextLevel = Object.fromEntries(
    Object.entries(update)
      .filter(([, value]) => typeof value === "number")
      .map(([key, value]) => [
        key,
        (existingLevel[key as keyof typeof existingLevel] as number) +
          Number(value),
      ]),
  );
  return {
    ...stats,
    [dayKey]: {
      ...existing,
      ...next,
      levelBreakdown: {
        ...existing.levelBreakdown,
        [levelId]: { ...existingLevel, ...nextLevel, levelBreakdown: undefined },
      },
    },
  };
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
    stats: addDailyStats(
      state.stats,
      localDayKey(now),
      {
        answers: 1,
        correct: correct ? 1 : 0,
        newLearned: completed && session.mode !== "review" ? 1 : 0,
        goalNewLearned: completed && session.mode === "new" ? 1 : 0,
        reviewed: completed && session.mode === "review" ? 1 : 0,
      },
      session.levelId,
    ),
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
    stats: addDailyStats(
      state.stats,
      localDayKey(now),
      { seconds: state.activeSession.elapsedSeconds },
      state.activeSession.levelId,
    ),
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
