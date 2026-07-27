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
  return JSON.stringify(canonicalize(left)) === JSON.stringify(canonicalize(right));
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
