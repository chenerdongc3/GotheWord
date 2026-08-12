import {
  EMPTY_STATE,
  migrateAppState,
  type AppState,
} from "./learning.ts";
import { APP_STATE_SCHEMA_VERSION } from "./learning-state-schema.ts";

export { APP_STATE_SCHEMA_VERSION } from "./learning-state-schema.ts";
export const USER_STORAGE_KEY = "gotheword-state-v2";
export const LEGACY_STORAGE_KEY = "gotheword-state-v1";
export const LEGACY_DISMISSED_KEY = "gotheword-legacy-dismissed";

export const NORMAL_SYNC_DEBOUNCE_MS = 2_000;
export const NORMAL_SYNC_MAX_WAIT_MS = 10_000;
export const TIMER_CHECKPOINT_INTERVAL_MS = 30_000;
export const WRITER_LEASE_DURATION_MS = 15_000;
export const WRITER_LEASE_RENEW_MS = 5_000;

export type SyncUrgency = "flush" | "normal" | "checkpoint";
export type SyncReason =
  | "session_start"
  | "answer"
  | "phase_transition"
  | "session_pause"
  | "session_resume"
  | "session_finish"
  | "timer_checkpoint"
  | "settings"
  | "reset"
  | "legacy_import"
  | "conflict_resolution"
  | "recovery";

export type SyncMutation = {
  reason: SyncReason;
  urgency: SyncUrgency;
  coalescedMutationCount: number;
  dirtySinceMs: number;
  firstNormalMutationAtMs: number | null;
};

export type WriterLease = {
  tabId: string;
  generation: string;
  expiresAt: number;
};

export type SyncErrorDisposition =
  | "conflict"
  | "offline"
  | "retry"
  | "auth"
  | "invalid";

export type CachedState = {
  userId: string;
  revision: number;
  state: AppState;
  dirty: boolean;
  savedAt: string;
};

export type ParsedCachedState = {
  cache: CachedState;
  format: "envelope" | "legacy-state";
};

export type RemoteLearningState = {
  state: AppState;
  schemaVersion: number;
  revision: number;
  updatedAt: string;
};

export type HydrationDecision =
  | {
      kind: "ready";
      cache: CachedState;
    }
  | {
      kind: "conflict";
      local: CachedState;
      remote: RemoteLearningState;
    };

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isRevision(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isSafeInteger(value) &&
    value >= 0
  );
}

const urgencyRank: Record<SyncUrgency, number> = {
  checkpoint: 0,
  normal: 1,
  flush: 2,
};

export function mergeSyncMutation(
  current: SyncMutation | null,
  next: Pick<SyncMutation, "reason" | "urgency">,
  now = Date.now(),
): SyncMutation {
  const promoted =
    !current || urgencyRank[next.urgency] >= urgencyRank[current.urgency];
  return {
    reason: promoted ? next.reason : current.reason,
    urgency: promoted ? next.urgency : current.urgency,
    coalescedMutationCount: (current?.coalescedMutationCount ?? 0) + 1,
    dirtySinceMs: current?.dirtySinceMs ?? now,
    firstNormalMutationAtMs:
      current?.firstNormalMutationAtMs ??
      (next.urgency === "normal" ? now : null),
  };
}

export function syncDueAt(
  mutation: SyncMutation,
  {
    now = Date.now(),
    lastSuccessfulSaveAtMs = 0,
  }: { now?: number; lastSuccessfulSaveAtMs?: number } = {},
) {
  if (mutation.urgency === "flush") return now;
  if (mutation.urgency === "checkpoint") {
    return Math.max(now, lastSuccessfulSaveAtMs + TIMER_CHECKPOINT_INTERVAL_MS);
  }
  return Math.min(
    now + NORMAL_SYNC_DEBOUNCE_MS,
    (mutation.firstNormalMutationAtMs ?? now) + NORMAL_SYNC_MAX_WAIT_MS,
  );
}

export function projectSessionElapsedSeconds({
  baseElapsedSeconds,
  runningSinceMs,
  now = Date.now(),
}: {
  baseElapsedSeconds: number;
  runningSinceMs: number | null;
  now?: number;
}) {
  return (
    baseElapsedSeconds +
    (runningSinceMs === null
      ? 0
      : Math.max(0, Math.floor((now - runningSinceMs) / 1_000)))
  );
}

export function shouldMaterializeTimerCheckpoint(
  displayedElapsedSeconds: number,
  persistedElapsedSeconds: number,
) {
  return (
    displayedElapsedSeconds - persistedElapsedSeconds >=
    TIMER_CHECKPOINT_INTERVAL_MS / 1_000
  );
}

export function writerLeaseKey(userId: string) {
  return `${USER_STORAGE_KEY}:writer:${userId}`;
}

export function parseWriterLease(raw: string | null): WriterLease | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as unknown;
    if (
      isRecord(value) &&
      typeof value.tabId === "string" &&
      typeof value.generation === "string" &&
      typeof value.expiresAt === "number" &&
      Number.isFinite(value.expiresAt)
    ) {
      return {
        tabId: value.tabId,
        generation: value.generation,
        expiresAt: value.expiresAt,
      };
    }
  } catch {
    // An invalid lease is treated as expired and can be replaced.
  }
  return null;
}

export function isWriterLeaseActive(lease: WriterLease | null, now = Date.now()) {
  return Boolean(lease && lease.expiresAt > now);
}

export function canAcquireWriterLease({
  lease,
  tabId,
  now = Date.now(),
  force = false,
}: {
  lease: WriterLease | null;
  tabId: string;
  now?: number;
  force?: boolean;
}) {
  return (
    force ||
    !isWriterLeaseActive(lease, now) ||
    lease?.tabId === tabId
  );
}

export function renewWriterLease({
  lease,
  tabId,
  generation,
  now = Date.now(),
}: {
  lease: WriterLease | null;
  tabId: string;
  generation: string;
  now?: number;
}): WriterLease | null {
  if (
    !lease ||
    lease.tabId !== tabId ||
    lease.generation !== generation ||
    !isWriterLeaseActive(lease, now)
  ) {
    return null;
  }
  return {
    ...lease,
    expiresAt: now + WRITER_LEASE_DURATION_MS,
  };
}

export function syncErrorDisposition(
  errorCode: string,
  offline = false,
): SyncErrorDisposition {
  if (errorCode === "revision_conflict") return "conflict";
  if (offline) return "offline";
  if (errorCode === "unauthorized" || errorCode === "forbidden") {
    return "auth";
  }
  if (
    errorCode === "invalid_input" ||
    errorCode === "invalid_state" ||
    errorCode === "not_found"
  ) {
    return "invalid";
  }
  return "retry";
}

export function userStorageKey(userId: string) {
  return `${USER_STORAGE_KEY}:${userId}`;
}

export function legacyUserStorageKey(userId: string) {
  return `${LEGACY_STORAGE_KEY}:${userId}`;
}

export function legacyDismissedKey(userId: string) {
  return `${LEGACY_DISMISSED_KEY}:${userId}`;
}

export function createCachedState({
  userId,
  revision,
  state,
  dirty,
  savedAt = new Date().toISOString(),
}: Omit<CachedState, "savedAt"> & { savedAt?: string }): CachedState {
  return {
    userId,
    revision,
    state,
    dirty,
    savedAt,
  };
}

export function parseCachedState(
  raw: string | null,
  userId: string,
  now = new Date().toISOString(),
): ParsedCachedState | null {
  if (!raw) return null;

  let value: unknown;
  try {
    value = JSON.parse(raw) as unknown;
  } catch {
    return null;
  }

  if (
    isRecord(value) &&
    value.userId === userId &&
    isRevision(value.revision) &&
    typeof value.dirty === "boolean" &&
    typeof value.savedAt === "string"
  ) {
    const state = migrateAppState(value.state);
    if (!state) return null;
    return {
      format: "envelope",
      cache: {
        userId,
        revision: value.revision,
        state,
        dirty: value.dirty,
        savedAt: value.savedAt,
      },
    };
  }

  const state = migrateAppState(value);
  if (!state) return null;
  return {
    format: "legacy-state",
    cache: createCachedState({
      userId,
      revision: 0,
      state,
      dirty: true,
      savedAt: now,
    }),
  };
}

export function serializeCachedState(cache: CachedState) {
  return JSON.stringify(cache);
}

function canonicalize(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (!isRecord(value)) return value;

  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, canonicalize(value[key])]),
  );
}

export function statesEqual(left: AppState, right: AppState) {
  const normalizedLeft = migrateAppState(left) ?? left;
  const normalizedRight = migrateAppState(right) ?? right;
  return (
    JSON.stringify(canonicalize(normalizedLeft)) ===
    JSON.stringify(canonicalize(normalizedRight))
  );
}

export function resolveSuccessfulSave({
  userId,
  savedState,
  currentState,
  remote,
}: {
  userId: string;
  savedState: AppState;
  currentState: AppState;
  remote: RemoteLearningState;
}) {
  return createCachedState({
    userId,
    revision: remote.revision,
    state: currentState,
    dirty: !statesEqual(savedState, currentState),
    savedAt: remote.updatedAt,
  });
}

export function acceptRemoteState(
  userId: string,
  remote: RemoteLearningState,
) {
  return createCachedState({
    userId,
    revision: remote.revision,
    state: remote.state,
    dirty: remote.schemaVersion !== APP_STATE_SCHEMA_VERSION,
    savedAt: remote.updatedAt,
  });
}

export function rebaseLocalState(
  local: CachedState,
  remote: RemoteLearningState,
) {
  return {
    ...local,
    revision: remote.revision,
    dirty: true,
  };
}

export function resolveHydration({
  userId,
  local,
  remote,
  now = new Date().toISOString(),
}: {
  userId: string;
  local: ParsedCachedState | null;
  remote: RemoteLearningState | null;
  now?: string;
}): HydrationDecision {
  if (!local && !remote) {
    return {
      kind: "ready",
      cache: createCachedState({
        userId,
        revision: 0,
        state: { ...EMPTY_STATE },
        dirty: false,
        savedAt: now,
      }),
    };
  }

  if (local && !remote) {
    return {
      kind: "ready",
      cache: {
        ...local.cache,
        dirty: true,
      },
    };
  }

  if (!local && remote) {
    return {
      kind: "ready",
      cache: createCachedState({
        userId,
        revision: remote.revision,
        state: remote.state,
        dirty: remote.schemaVersion !== APP_STATE_SCHEMA_VERSION,
        savedAt: remote.updatedAt,
      }),
    };
  }

  const localCache = local!.cache;
  const remoteState = remote!;

  if (local!.format === "legacy-state") {
    if (statesEqual(localCache.state, remoteState.state)) {
      return {
        kind: "ready",
        cache: createCachedState({
          userId,
          revision: remoteState.revision,
          state: remoteState.state,
          dirty: remoteState.schemaVersion !== APP_STATE_SCHEMA_VERSION,
          savedAt: remoteState.updatedAt,
        }),
      };
    }
    return { kind: "conflict", local: localCache, remote: remoteState };
  }

  if (localCache.dirty) {
    return localCache.revision === remoteState.revision
      ? {
          kind: "ready",
          cache: localCache,
        }
      : { kind: "conflict", local: localCache, remote: remoteState };
  }

  if (
    localCache.revision === remoteState.revision &&
    !statesEqual(localCache.state, remoteState.state)
  ) {
    return { kind: "conflict", local: localCache, remote: remoteState };
  }

  if (remoteState.revision < localCache.revision) {
    return { kind: "conflict", local: localCache, remote: remoteState };
  }

  return {
    kind: "ready",
    cache: createCachedState({
      userId,
      revision: remoteState.revision,
      state: remoteState.state,
      dirty: remoteState.schemaVersion !== APP_STATE_SCHEMA_VERSION,
      savedAt: remoteState.updatedAt,
    }),
  };
}

export function retryDelay(attempt: number) {
  const safeAttempt = Math.max(0, Math.floor(attempt));
  return Math.min(30_000, 1_000 * 2 ** safeAttempt);
}
