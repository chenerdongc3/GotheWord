export type WordState = "unlearned" | "learning" | "scheduled" | "weak" | "mastered";

export type WordProgress = {
  state: WordState;
  stage: number;
  nextReviewAt?: string;
  streak: number;
  totalAnswers: number;
  correctAnswers: number;
  reviewMistakes: number;
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

export type AppState = {
  version: 1;
  dailyGoal?: 5 | 10 | 20;
  progress: Record<string, WordProgress>;
  stats: Record<string, DailyStats>;
};

export const EMPTY_STATE: AppState = {
  version: 1,
  progress: {},
  stats: {},
};

export const EMPTY_PROGRESS: WordProgress = {
  state: "unlearned",
  stage: 0,
  streak: 0,
  totalAnswers: 0,
  correctAnswers: 0,
  reviewMistakes: 0,
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

export function insertThreeToFiveLater(queue: string[], wordId: string) {
  const offset = 3 + Math.floor(Math.random() * 3);
  const index = Math.min(queue.length, offset);
  const next = [...queue];
  next.splice(index, 0, wordId);
  return next;
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
