import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { EMPTY_STATE } from "../app/learning.ts";
import {
  APP_STATE_SCHEMA_VERSION,
  acceptRemoteState,
  createCachedState,
  parseCachedState,
  rebaseLocalState,
  resolveHydration,
  resolveSuccessfulSave,
  retryDelay,
  statesEqual,
} from "../app/learning-sync.ts";

const USER_ID = "11111111-1111-1111-1111-111111111111";
const NOW = "2026-07-26T10:00:00.000Z";

function state(dailyGoal = 10) {
  return {
    ...EMPTY_STATE,
    dailyGoal,
  };
}

function remote({
  value = state(),
  revision = 3,
  schemaVersion = APP_STATE_SCHEMA_VERSION,
} = {}) {
  return {
    state: value,
    revision,
    schemaVersion,
    updatedAt: NOW,
  };
}

test("upgrades a user-scoped bare v1 cache without assigning a global owner", () => {
  const parsed = parseCachedState(
    JSON.stringify({
      version: 1,
      dailyGoal: 5,
      progress: {},
      stats: {},
    }),
    USER_ID,
    NOW,
  );

  assert.equal(parsed?.format, "legacy-state");
  assert.equal(parsed?.cache.userId, USER_ID);
  assert.equal(parsed?.cache.state.version, APP_STATE_SCHEMA_VERSION);
  assert.equal(parsed?.cache.state.activeLevel, "A1");
  assert.equal(parsed?.cache.state.activeSession, null);
  assert.equal(parsed?.cache.dirty, true);
  assert.equal(parsed?.cache.revision, 0);
});

test("rejects an envelope owned by another user", () => {
  const parsed = parseCachedState(
    JSON.stringify({
      userId: "22222222-2222-2222-2222-222222222222",
      revision: 2,
      state: state(),
      dirty: true,
      savedAt: NOW,
    }),
    USER_ID,
    NOW,
  );

  assert.equal(parsed, null);
});

test("compares JSONB state semantically instead of relying on key order", () => {
  const left = state(10);
  const right = {
    activeSession: null,
    stats: {},
    progress: {},
    dailyGoal: 10,
    activeLevel: "A1",
    version: APP_STATE_SCHEMA_VERSION,
  };

  assert.equal(statesEqual(left, right), true);
});

test("hydrates cleanly from the cloud when no local cache exists", () => {
  const cloud = remote({ revision: 4 });
  const decision = resolveHydration({
    userId: USER_ID,
    local: null,
    remote: cloud,
    now: NOW,
  });

  assert.equal(decision.kind, "ready");
  assert.equal(decision.cache.revision, 4);
  assert.equal(decision.cache.dirty, false);
  assert.deepEqual(decision.cache.state, cloud.state);
});

test("keeps dirty local progress when its base revision still matches", () => {
  const local = {
    format: "envelope",
    cache: createCachedState({
      userId: USER_ID,
      revision: 3,
      state: state(20),
      dirty: true,
      savedAt: NOW,
    }),
  };
  const decision = resolveHydration({
    userId: USER_ID,
    local,
    remote: remote({ revision: 3 }),
    now: NOW,
  });

  assert.equal(decision.kind, "ready");
  assert.equal(decision.cache.dirty, true);
  assert.equal(decision.cache.state.dailyGoal, 20);
});

test("surfaces a conflict instead of overwriting a dirty stale cache", () => {
  const local = {
    format: "envelope",
    cache: createCachedState({
      userId: USER_ID,
      revision: 2,
      state: state(20),
      dirty: true,
      savedAt: NOW,
    }),
  };
  const decision = resolveHydration({
    userId: USER_ID,
    local,
    remote: remote({ revision: 3 }),
    now: NOW,
  });

  assert.equal(decision.kind, "conflict");
  assert.equal(decision.local.state.dailyGoal, 20);
  assert.equal(decision.remote.revision, 3);
});

test("surfaces a conflict for a different pre-envelope cache", () => {
  const local = parseCachedState(JSON.stringify(state(5)), USER_ID, NOW);
  const decision = resolveHydration({
    userId: USER_ID,
    local,
    remote: remote({ value: state(10), revision: 0 }),
    now: NOW,
  });

  assert.equal(decision.kind, "conflict");
});

test("keeps a second local change dirty when the first request succeeds", () => {
  const savedState = state(5);
  const latestState = state(20);
  const result = resolveSuccessfulSave({
    userId: USER_ID,
    savedState,
    currentState: latestState,
    remote: remote({ value: savedState, revision: 4 }),
  });

  assert.equal(result.revision, 4);
  assert.equal(result.dirty, true);
  assert.equal(result.state.dailyGoal, 20);
});

test("marks an unchanged snapshot clean after a successful save", () => {
  const savedState = state(5);
  const result = resolveSuccessfulSave({
    userId: USER_ID,
    savedState,
    currentState: savedState,
    remote: remote({ value: savedState, revision: 4 }),
  });

  assert.equal(result.revision, 4);
  assert.equal(result.dirty, false);
});

test("resolves conflict choices without losing the selected version", () => {
  const local = createCachedState({
    userId: USER_ID,
    revision: 2,
    state: state(20),
    dirty: true,
    savedAt: NOW,
  });
  const cloud = remote({ value: state(5), revision: 7 });

  const accepted = acceptRemoteState(USER_ID, cloud);
  const rebased = rebaseLocalState(local, cloud);

  assert.equal(accepted.state.dailyGoal, 5);
  assert.equal(accepted.revision, 7);
  assert.equal(accepted.dirty, false);
  assert.equal(rebased.state.dailyGoal, 20);
  assert.equal(rebased.revision, 7);
  assert.equal(rebased.dirty, true);
});

test("uses bounded exponential retry delays", () => {
  assert.deepEqual(
    [0, 1, 2, 3, 4, 5, 6, 20].map(retryDelay),
    [1_000, 2_000, 4_000, 8_000, 16_000, 30_000, 30_000, 30_000],
  );
});

test("migration enforces CAS-only writes and database-owned timestamps", async () => {
  const sql = await readFile(
    new URL(
      "../supabase/migrations/20260726100000_add_learning_state_revision.sql",
      import.meta.url,
    ),
    "utf8",
  );

  assert.match(sql, /save_learning_state\(\s*expected_revision bigint,\s*next_state jsonb/s);
  assert.match(sql, /security definer/);
  assert.match(sql, /auth\.uid\(\)/);
  assert.match(sql, /errcode = '40001'/);
  assert.match(sql, /learning_state_revision_conflict/);
  assert.match(sql, /revision = learning_state\.revision \+ 1/);
  assert.match(sql, /before insert or update on public\.learning_states/);
  assert.match(sql, /revoke insert, update, delete on public\.learning_states/);
});
