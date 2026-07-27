import assert from "node:assert/strict";
import test from "node:test";
import {
  answerActiveSession,
  createActiveSession,
  DEFAULT_REVIEW_BATCH_SIZE,
  EMPTY_PROGRESS,
  mergeWordProgress,
  migrateAppState,
  settleActiveSession,
  takeReviewBatch,
  insertThreeToFiveLater,
} from "../../app/learning.ts";

const NOW = new Date("2026-07-26T08:00:00.000Z");

function stateWithSession(session) {
  return {
    version: 3,
    activeLevel: "A1",
    dailyGoal: 10,
    progress: {
      tisch: {
        ...EMPTY_PROGRESS,
        state: "scheduled",
        stage: 1,
        nextReviewAt: "2026-07-25T08:00:00.000Z",
      },
    },
    stats: {},
    activeSession: session,
  };
}

test("migrates v1 state to v3 and drops cross-session mistake counters", () => {
  const migrated = migrateAppState({
    version: 1,
    dailyGoal: 10,
    progress: {
      haus: {
        ...EMPTY_PROGRESS,
        state: "scheduled",
        streak: 1,
        reviewMistakes: 1,
      },
    },
    stats: {},
  });

  assert.equal(migrated?.version, 3);
  assert.equal(migrated?.activeLevel, "A1");
  assert.equal(migrated?.activeSession, null);
  assert.equal(migrated?.progress.haus.streak, 0);
  assert.equal("reviewMistakes" in migrated.progress.haus, false);
});

test("migrates AppState v2 to v3 idempotently", () => {
  const state = {
    version: 2,
    dailyGoal: 10,
    progress: {
      haus: {
        ...EMPTY_PROGRESS,
        state: "scheduled",
        stage: 1,
      },
    },
    stats: {},
    activeSession: null,
  };

  const once = migrateAppState(state);
  const twice = migrateAppState(once);

  assert.deepEqual(twice, once);
  assert.equal(once?.activeSession, null);
  assert.equal(once?.activeLevel, "A1");
});

test("preserves v3 level and attributes sessions and new statistics", () => {
  const session = createActiveSession({
    id: "b1-session",
    levelId: "B1",
    mode: "new",
    wordIds: ["tisch"],
    now: NOW,
  });
  const migrated = migrateAppState({
    version: 3,
    activeLevel: "B1",
    progress: {},
    stats: {},
    activeSession: session,
  });

  assert.equal(migrated?.activeLevel, "B1");
  assert.equal(migrated?.activeSession?.levelId, "B1");
});

test("restores the active word, queue, completion count, and elapsed time", () => {
  const session = {
    ...createActiveSession({
      id: "session-1",
      mode: "review",
      wordIds: ["tisch", "brot"],
      remainingReviewCount: 3,
      now: NOW,
    }),
    queue: ["brot", "tisch"],
    completed: ["tisch"],
    elapsedSeconds: 17,
  };

  const migrated = migrateAppState(stateWithSession(session));

  assert.deepEqual(migrated?.activeSession?.queue, ["brot", "tisch"]);
  assert.deepEqual(migrated?.activeSession?.completed, ["tisch"]);
  assert.equal(migrated?.activeSession?.elapsedSeconds, 17);
  assert.equal(migrated?.activeSession?.remainingReviewCount, 3);
});

test("uses an injectable RNG to delay mistakes by three to five questions", () => {
  const queue = ["a", "b", "c", "d", "e", "f"];

  assert.equal(insertThreeToFiveLater(queue, "x", () => 0).indexOf("x"), 3);
  assert.equal(insertThreeToFiveLater(queue, "x", () => 0.999).indexOf("x"), 5);
});

test("limits due reviews to the configured batch size", () => {
  const dueWords = Array.from({ length: 27 }, (_, index) => index);
  const selection = takeReviewBatch(dueWords);

  assert.equal(DEFAULT_REVIEW_BATCH_SIZE, 20);
  assert.equal(selection.batch.length, 20);
  assert.equal(selection.remainingCount, 7);
  assert.deepEqual(takeReviewBatch(dueWords, 5).batch, [0, 1, 2, 3, 4]);
});

test("settles elapsed time only once when a session is ended repeatedly", () => {
  const session = {
    ...createActiveSession({
      id: "session-1",
      mode: "review",
      wordIds: ["tisch"],
      now: NOW,
    }),
    elapsedSeconds: 42,
  };
  const first = settleActiveSession(stateWithSession(session), NOW);
  const second = settleActiveSession(first, NOW);
  const dayKey = Object.keys(first.stats)[0];

  assert.equal(first.stats[dayKey].seconds, 42);
  assert.equal(first.stats[dayKey].levelBreakdown.A1.seconds, 42);
  assert.equal(second.stats[dayKey].seconds, 42);
  assert.equal(second.activeSession, null);
});

test("does not carry the two-mistake weak-word rule into a new session", () => {
  const firstSession = createActiveSession({
    id: "session-1",
    mode: "review",
    wordIds: ["tisch"],
    now: NOW,
  });
  const afterFirstMistake = answerActiveSession({
    state: stateWithSession(firstSession),
    wordId: "tisch",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });
  const ended = settleActiveSession(afterFirstMistake, NOW);
  const secondSession = createActiveSession({
    id: "session-2",
    mode: "review",
    wordIds: ["tisch"],
    now: NOW,
  });
  const afterNewSessionMistake = answerActiveSession({
    state: { ...ended, activeSession: secondSession },
    wordId: "tisch",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });

  assert.equal(afterFirstMistake.activeSession.reviewMistakes.tisch, 1);
  assert.equal(afterNewSessionMistake.activeSession.reviewMistakes.tisch, 1);
  assert.equal(afterNewSessionMistake.progress.tisch.weak, false);
});

test("marks a word weak after two mistakes inside the same review session", () => {
  const session = createActiveSession({
    id: "session-1",
    mode: "review",
    wordIds: ["tisch"],
    now: NOW,
  });
  const afterFirstMistake = answerActiveSession({
    state: stateWithSession(session),
    wordId: "tisch",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });
  const readyForNextQuestion = {
    ...afterFirstMistake,
    activeSession: {
      ...afterFirstMistake.activeSession,
      feedback: undefined,
    },
  };
  const afterSecondMistake = answerActiveSession({
    state: readyForNextQuestion,
    wordId: "tisch",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });

  assert.equal(afterSecondMistake.activeSession.reviewMistakes.tisch, 2);
  assert.equal(afterSecondMistake.progress.tisch.weak, true);
  assert.deepEqual(afterSecondMistake.activeSession.weakIds, ["tisch"]);
});

test("migrates every persisted active-session word-id location", () => {
  const session = {
    ...createActiveSession({
      id: "session-migration",
      mode: "review",
      wordIds: ["tisch", "brot"],
      now: NOW,
    }),
    queue: ["brot", "tisch", "brot"],
    completed: ["tisch"],
    weakIds: ["brot"],
    reviewMistakes: { brot: 2 },
    reviewStreaks: { tisch: 1 },
    feedback: {
      wordId: "brot",
      correct: false,
      selected: "桌子",
      streak: 0,
      target: 2,
      completed: false,
    },
  };

  const migrated = migrateAppState(stateWithSession(session));

  assert.deepEqual(migrated?.activeSession?.wordIds, ["tisch", "brot"]);
  assert.deepEqual(migrated?.activeSession?.queue, ["brot", "tisch", "brot"]);
  assert.deepEqual(migrated?.activeSession?.completed, ["tisch"]);
  assert.deepEqual(migrated?.activeSession?.weakIds, ["brot"]);
  assert.deepEqual(migrated?.activeSession?.reviewMistakes, { brot: 2 });
  assert.deepEqual(migrated?.activeSession?.reviewStreaks, { tisch: 1 });
  assert.equal(migrated?.activeSession?.feedback?.wordId, "brot");
  assert.deepEqual(migrateAppState(migrated), migrated);
});

test("retains unknown progress but safely invalidates an unknown active session", () => {
  const session = createActiveSession({
    id: "unknown-session",
    mode: "new",
    wordIds: ["removed-word-id"],
    now: NOW,
  });
  const migrated = migrateAppState({
    ...stateWithSession(session),
    progress: {
      ...stateWithSession(session).progress,
      "removed-word-id": {
        ...EMPTY_PROGRESS,
        state: "scheduled",
        stage: 2,
      },
    },
  });

  assert.ok(migrated?.progress["removed-word-id"]);
  assert.equal(migrated?.activeSession, null);
});

test("merges colliding legacy progress deterministically without losing mastery", () => {
  const merged = mergeWordProgress(
    {
      ...EMPTY_PROGRESS,
      state: "weak",
      stage: 3,
      weak: true,
      totalAnswers: 8,
      correctAnswers: 4,
      firstLearnedAt: "2026-07-20T08:00:00.000Z",
      nextReviewAt: "2026-07-28T08:00:00.000Z",
    },
    {
      ...EMPTY_PROGRESS,
      state: "mastered",
      stage: 7,
      totalAnswers: 10,
      correctAnswers: 9,
      firstLearnedAt: "2026-07-22T08:00:00.000Z",
    },
  );

  assert.equal(merged.state, "mastered");
  assert.equal(merged.stage, 7);
  assert.equal(merged.weak, true);
  assert.equal(merged.totalAnswers, 10);
  assert.equal(merged.correctAnswers, 9);
  assert.equal(merged.firstLearnedAt, "2026-07-20T08:00:00.000Z");
  assert.equal(merged.nextReviewAt, undefined);
});
