import assert from "node:assert/strict";
import test from "node:test";
import {
  answerActiveSession,
  createActiveSession,
  DEFAULT_REVIEW_BATCH_SIZE,
  EMPTY_PROGRESS,
  migrateAppState,
  settleActiveSession,
  takeReviewBatch,
  insertThreeToFiveLater,
} from "../../app/learning.ts";

const NOW = new Date("2026-07-26T08:00:00.000Z");

function stateWithSession(session) {
  return {
    version: 2,
    dailyGoal: 10,
    progress: {
      haus: {
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

test("migrates v1 state to v2 and drops cross-session mistake counters", () => {
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

  assert.equal(migrated?.version, 2);
  assert.equal(migrated?.activeSession, null);
  assert.equal(migrated?.progress.haus.streak, 0);
  assert.equal("reviewMistakes" in migrated.progress.haus, false);
});

test("restores the active word, queue, completion count, and elapsed time", () => {
  const session = {
    ...createActiveSession({
      id: "session-1",
      mode: "review",
      wordIds: ["haus", "brot"],
      remainingReviewCount: 3,
      now: NOW,
    }),
    queue: ["brot", "haus"],
    completed: ["haus"],
    elapsedSeconds: 17,
  };

  const migrated = migrateAppState(stateWithSession(session));

  assert.deepEqual(migrated?.activeSession?.queue, ["brot", "haus"]);
  assert.deepEqual(migrated?.activeSession?.completed, ["haus"]);
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
      wordIds: ["haus"],
      now: NOW,
    }),
    elapsedSeconds: 42,
  };
  const first = settleActiveSession(stateWithSession(session), NOW);
  const second = settleActiveSession(first, NOW);
  const dayKey = Object.keys(first.stats)[0];

  assert.equal(first.stats[dayKey].seconds, 42);
  assert.equal(second.stats[dayKey].seconds, 42);
  assert.equal(second.activeSession, null);
});

test("does not carry the two-mistake weak-word rule into a new session", () => {
  const firstSession = createActiveSession({
    id: "session-1",
    mode: "review",
    wordIds: ["haus"],
    now: NOW,
  });
  const afterFirstMistake = answerActiveSession({
    state: stateWithSession(firstSession),
    wordId: "haus",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });
  const ended = settleActiveSession(afterFirstMistake, NOW);
  const secondSession = createActiveSession({
    id: "session-2",
    mode: "review",
    wordIds: ["haus"],
    now: NOW,
  });
  const afterNewSessionMistake = answerActiveSession({
    state: { ...ended, activeSession: secondSession },
    wordId: "haus",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });

  assert.equal(afterFirstMistake.activeSession.reviewMistakes.haus, 1);
  assert.equal(afterNewSessionMistake.activeSession.reviewMistakes.haus, 1);
  assert.equal(afterNewSessionMistake.progress.haus.weak, false);
});

test("marks a word weak after two mistakes inside the same review session", () => {
  const session = createActiveSession({
    id: "session-1",
    mode: "review",
    wordIds: ["haus"],
    now: NOW,
  });
  const afterFirstMistake = answerActiveSession({
    state: stateWithSession(session),
    wordId: "haus",
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
    wordId: "haus",
    correct: false,
    selected: "忘记了",
    now: NOW,
    rng: () => 0,
  });

  assert.equal(afterSecondMistake.activeSession.reviewMistakes.haus, 2);
  assert.equal(afterSecondMistake.progress.haus.weak, true);
  assert.deepEqual(afterSecondMistake.activeSession.weakIds, ["haus"]);
});
