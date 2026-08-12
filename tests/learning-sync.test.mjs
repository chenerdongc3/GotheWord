import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { EMPTY_STATE } from "../app/learning.ts";
import {
  APP_STATE_SCHEMA_VERSION,
  acceptRemoteState,
  canAcquireWriterLease,
  createCachedState,
  isWriterLeaseActive,
  mergeSyncMutation,
  parseCachedState,
  parseWriterLease,
  projectSessionElapsedSeconds,
  rebaseLocalState,
  renewWriterLease,
  resolveHydration,
  resolveSuccessfulSave,
  retryDelay,
  shouldMaterializeTimerCheckpoint,
  statesEqual,
  syncDueAt,
  syncErrorDisposition,
  WRITER_LEASE_DURATION_MS,
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

test("projects one-second UI ticks without mutating AppState", () => {
  const original = state(10);
  const before = structuredClone(original);

  assert.equal(
    projectSessionElapsedSeconds({
      baseElapsedSeconds: 12,
      runningSinceMs: 1_000,
      now: 4_999,
    }),
    15,
  );
  assert.deepEqual(original, before);
});

test("materializes a timer checkpoint once per 30 accumulated seconds", () => {
  assert.equal(shouldMaterializeTimerCheckpoint(29, 0), false);
  assert.equal(shouldMaterializeTimerCheckpoint(30, 0), true);
  assert.equal(shouldMaterializeTimerCheckpoint(30, 30), false);
  assert.equal(shouldMaterializeTimerCheckpoint(60, 30), true);
});

test("normal mutations use trailing debounce with a ten-second max wait", () => {
  let queued = mergeSyncMutation(
    null,
    { reason: "answer", urgency: "normal" },
    0,
  );
  assert.equal(syncDueAt(queued, { now: 0 }), 2_000);

  queued = mergeSyncMutation(
    queued,
    { reason: "answer", urgency: "normal" },
    9_000,
  );
  assert.equal(queued.coalescedMutationCount, 2);
  assert.equal(syncDueAt(queued, { now: 9_000 }), 10_000);
});

test("flush promotes the queue while retaining only latest snapshot metadata", () => {
  const normal = mergeSyncMutation(
    null,
    { reason: "answer", urgency: "normal" },
    1_000,
  );
  const flush = mergeSyncMutation(
    normal,
    { reason: "session_pause", urgency: "flush" },
    1_500,
  );

  assert.equal(flush.urgency, "flush");
  assert.equal(flush.reason, "session_pause");
  assert.equal(flush.coalescedMutationCount, 2);
  assert.equal(syncDueAt(flush, { now: 1_500 }), 1_500);
});

test("classifies offline, transient, auth, invalid and conflict failures", () => {
  assert.equal(syncErrorDisposition("network_error", true), "offline");
  assert.equal(syncErrorDisposition("rate_limited"), "retry");
  assert.equal(syncErrorDisposition("provider_error"), "retry");
  assert.equal(syncErrorDisposition("unauthorized"), "auth");
  assert.equal(syncErrorDisposition("forbidden"), "auth");
  assert.equal(syncErrorDisposition("invalid_state"), "invalid");
  assert.equal(syncErrorDisposition("revision_conflict"), "conflict");
});

test("writer lease supports acquire, expiry, renewal and generation fencing", () => {
  const now = 10_000;
  const lease = {
    tabId: "tab-a",
    generation: "generation-a",
    expiresAt: now + WRITER_LEASE_DURATION_MS,
  };

  assert.deepEqual(parseWriterLease(JSON.stringify(lease)), lease);
  assert.equal(isWriterLeaseActive(lease, now), true);
  assert.equal(
    canAcquireWriterLease({ lease, tabId: "tab-b", now }),
    false,
  );
  assert.equal(
    canAcquireWriterLease({
      lease,
      tabId: "tab-b",
      now: lease.expiresAt,
    }),
    true,
  );
  assert.equal(
    canAcquireWriterLease({ lease, tabId: "tab-b", now, force: true }),
    true,
  );

  const renewed = renewWriterLease({
    lease,
    tabId: "tab-a",
    generation: "generation-a",
    now,
  });
  assert.equal(renewed?.expiresAt, now + WRITER_LEASE_DURATION_MS);
  assert.equal(
    renewWriterLease({
      lease,
      tabId: "tab-a",
      generation: "stale-generation",
      now,
    }),
    null,
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
