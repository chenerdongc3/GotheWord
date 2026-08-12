"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react";
import {
  analyticsStateSize,
  captureAnalyticsEvent,
  captureSanitizedException,
  normalizeAnalyticsError,
} from "./analytics";
import { EMPTY_STATE, type AppState } from "./learning";
import {
  APP_STATE_SCHEMA_VERSION,
  acceptRemoteState,
  canAcquireWriterLease,
  createCachedState,
  isWriterLeaseActive,
  LEGACY_STORAGE_KEY,
  legacyDismissedKey,
  legacyUserStorageKey,
  mergeSyncMutation,
  parseCachedState,
  parseWriterLease,
  rebaseLocalState,
  renewWriterLease,
  resolveHydration,
  resolveSuccessfulSave,
  retryDelay,
  serializeCachedState,
  statesEqual,
  syncDueAt,
  syncErrorDisposition,
  userStorageKey,
  writerLeaseKey,
  WRITER_LEASE_DURATION_MS,
  WRITER_LEASE_RENEW_MS,
  type CachedState,
  type HydrationDecision,
  type RemoteLearningState,
  type SyncMutation,
  type SyncReason,
  type SyncUrgency,
  type WriterLease,
} from "./learning-sync";
import {
  LearningStateConflictError,
  loadLearningState,
  saveLearningState,
} from "./learning-state-api";

export type SyncStatus =
  | "loading"
  | "synced"
  | "pending"
  | "syncing"
  | "offline"
  | "error"
  | "conflict";

export type WriterRole = "loading" | "writer" | "follower";

export type LearningStateConflict = {
  id: string;
  detectionStage: "hydrate" | "save";
  detectedAt: number;
  local: CachedState;
  remote: RemoteLearningState;
};

export type CommitStateOptions = {
  reason: SyncReason;
  urgency: SyncUrgency;
};

type LegacyDecision = "confirmed" | "dismissed" | "imported";
type PendingConflictResolution = {
  conflictId: string;
  resolution: "keep_local";
  localRevisionBefore: number;
  remoteRevisionBefore: number;
  startedAt: number;
};

type WriterMessage =
  | {
      type: "writer-acquired";
      tabId: string;
      generation: string;
    }
  | {
      type: "takeover-request";
      requestId: string;
      tabId: string;
    }
  | {
      type: "takeover-yielded";
      requestId: string;
      tabId: string;
    };

function isOffline() {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

function mergeQueuedMutation(
  current: SyncMutation | null,
  incoming: SyncMutation,
) {
  const merged = mergeSyncMutation(current, incoming, Date.now());
  return {
    ...merged,
    coalescedMutationCount:
      (current?.coalescedMutationCount ?? 0) +
      incoming.coalescedMutationCount,
    dirtySinceMs: Math.min(
      current?.dirtySinceMs ?? incoming.dirtySinceMs,
      incoming.dirtySinceMs,
    ),
    firstNormalMutationAtMs:
      current?.firstNormalMutationAtMs === null ||
      current?.firstNormalMutationAtMs === undefined
        ? incoming.firstNormalMutationAtMs
        : incoming.firstNormalMutationAtMs === null
          ? current.firstNormalMutationAtMs
          : Math.min(
              current.firstNormalMutationAtMs,
              incoming.firstNormalMutationAtMs,
            ),
  };
}

export function useLearningStateSync(userId: string) {
  const [state, setStateInternal] = useState<AppState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("loading");
  const [syncError, setSyncError] = useState("");
  const [conflict, setConflict] = useState<LearningStateConflict | null>(null);
  const [legacyImportState, setLegacyImportState] = useState<AppState | null>(null);
  const [resolvingConflict, setResolvingConflict] = useState(false);
  const [writerRole, setWriterRole] = useState<WriterRole>("loading");
  const [writerPromptOpen, setWriterPromptOpen] = useState(false);
  const [takingOverWriter, setTakingOverWriter] = useState(false);

  const stateRef = useRef<AppState>(EMPTY_STATE);
  const revisionRef = useRef(0);
  const dirtyRef = useRef(false);
  const hydratedRef = useRef(false);
  const mountedRef = useRef(false);
  const saveInFlightRef = useRef(false);
  const saveTimerRef = useRef<number | null>(null);
  const conflictLoadTimerRef = useRef<number | null>(null);
  const retryAttemptRef = useRef(0);
  const conflictRef = useRef<LearningStateConflict | null>(null);
  const pendingMutationRef = useRef<SyncMutation | null>(null);
  const lastSuccessfulSaveAtRef = useRef(0);
  const autoSaveBlockedRef = useRef(false);
  const performSyncRef = useRef<() => Promise<void>>(async () => undefined);
  const schedulePendingRef = useRef<() => void>(() => undefined);
  const refreshConflictRef = useRef<() => Promise<void>>(async () => undefined);
  const conflictLocalRef = useRef<CachedState | null>(null);
  const legacyImportPendingRef = useRef(false);
  const legacyImportStartedAtRef = useRef(0);
  const pendingResolutionRef = useRef<PendingConflictResolution | null>(null);

  const [tabId] = useState(() =>
      typeof window === "undefined"
        ? "server"
        : window.crypto.randomUUID(),
  );
  const writerRoleRef = useRef<WriterRole>("loading");
  const leaseGenerationRef = useRef("");
  const writerChannelRef = useRef<BroadcastChannel | null>(null);
  const yieldingWriterRef = useRef(false);
  const beforeWriterYieldRef = useRef<(() => void | Promise<void>) | null>(null);
  const takeoverWaitersRef = useRef(
    new Map<string, () => void>(),
  );

  const setCurrentWriterRole = useCallback((role: WriterRole) => {
    writerRoleRef.current = role;
    if (mountedRef.current) {
      setWriterRole(role);
      if (role === "follower" && saveInFlightRef.current) {
        setSyncStatus("pending");
      }
    }
  }, []);

  const clearSaveTimer = useCallback(() => {
    if (saveTimerRef.current !== null) {
      window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
  }, []);

  const clearConflictLoadTimer = useCallback(() => {
    if (conflictLoadTimerRef.current !== null) {
      window.clearTimeout(conflictLoadTimerRef.current);
      conflictLoadTimerRef.current = null;
    }
  }, []);

  const writeCache = useCallback(
    (cache: CachedState) => {
      window.localStorage.setItem(
        userStorageKey(userId),
        serializeCachedState(cache),
      );
    },
    [userId],
  );

  const currentCache = useCallback(
    (dirty = dirtyRef.current) =>
      createCachedState({
        userId,
        revision: revisionRef.current,
        state: stateRef.current,
        dirty,
      }),
    [userId],
  );

  const queueMutation = useCallback(
    (options: CommitStateOptions) => {
      pendingMutationRef.current = mergeSyncMutation(
        pendingMutationRef.current,
        options,
      );
      autoSaveBlockedRef.current = false;
      schedulePendingRef.current();
    },
    [],
  );

  const markConflict = useCallback(
    (
      nextConflict: Pick<LearningStateConflict, "local" | "remote">,
      detectionStage: LearningStateConflict["detectionStage"],
    ) => {
      clearSaveTimer();
      clearConflictLoadTimer();
      pendingMutationRef.current = null;
      autoSaveBlockedRef.current = true;
      const markedConflict: LearningStateConflict = {
        ...nextConflict,
        id: window.crypto.randomUUID(),
        detectionStage,
        detectedAt: Date.now(),
      };
      conflictRef.current = markedConflict;
      captureAnalyticsEvent("learning_state_conflict_detected", {
        conflict_id: markedConflict.id,
        detection_stage: detectionStage,
        local_revision: markedConflict.local.revision,
        remote_revision: markedConflict.remote.revision,
        local_dirty: markedConflict.local.dirty,
        has_active_session: Boolean(markedConflict.local.state.activeSession),
        retry_attempt: retryAttemptRef.current,
      });
      dirtyRef.current = true;
      writeCache(markedConflict.local);
      setConflict(markedConflict);
      setSyncStatus("conflict");
      setSyncError("本设备与云端进度发生冲突，请选择要保留的版本");
    },
    [clearConflictLoadTimer, clearSaveTimer, writeCache],
  );

  const schedulePending = useCallback(() => {
    clearSaveTimer();
    if (
      !mountedRef.current ||
      !hydratedRef.current ||
      writerRoleRef.current !== "writer" ||
      !dirtyRef.current ||
      !pendingMutationRef.current ||
      conflictRef.current ||
      autoSaveBlockedRef.current ||
      isOffline()
    ) {
      return;
    }
    const dueAt = syncDueAt(pendingMutationRef.current, {
      lastSuccessfulSaveAtMs: lastSuccessfulSaveAtRef.current,
    });
    saveTimerRef.current = window.setTimeout(() => {
      saveTimerRef.current = null;
      void performSyncRef.current();
    }, Math.max(0, dueAt - Date.now()));
  }, [clearSaveTimer]);

  useEffect(() => {
    schedulePendingRef.current = schedulePending;
  }, [schedulePending]);

  const refreshConflictRemote = useCallback(async () => {
    const local = conflictLocalRef.current;
    if (!local || conflictRef.current || !mountedRef.current) return;
    clearConflictLoadTimer();
    const retryAttempt = retryAttemptRef.current;
    const loadStartedAt = performance.now();
    try {
      const remote = await loadLearningState(userId);
      captureAnalyticsEvent("learning_state_sync_result", {
        operation: "load",
        outcome: "succeeded",
        duration_ms: Math.round(performance.now() - loadStartedAt),
        fallback_to_local: false,
        retry_attempt: retryAttempt,
        state_size_bytes: analyticsStateSize(remote?.state),
      });
      if (!mountedRef.current) return;
      retryAttemptRef.current = 0;
      conflictLocalRef.current = null;
      markConflict(
        {
          local,
          remote:
            remote ??
            {
              state: { ...EMPTY_STATE },
              schemaVersion: APP_STATE_SCHEMA_VERSION,
              revision: 0,
              updatedAt: new Date().toISOString(),
            },
        },
        "save",
      );
    } catch (loadError) {
      if (!mountedRef.current) return;
      const loadErrorCode = normalizeAnalyticsError(loadError);
      captureAnalyticsEvent("learning_state_sync_result", {
        operation: "load",
        outcome: "failed",
        duration_ms: Math.round(performance.now() - loadStartedAt),
        error_code: loadErrorCode,
        fallback_to_local: true,
        retry_attempt: retryAttempt,
        state_size_bytes: analyticsStateSize(local.state),
      });
      captureSanitizedException("learning_state_sync", loadErrorCode, {
        operation: "load",
        retry_attempt: retryAttempt,
      });
      setSyncStatus(isOffline() ? "offline" : "error");
      setSyncError(
        isOffline()
          ? "当前离线，等待联网后读取最新云端进度"
          : "正在重新读取最新云端进度，读取成功前不会继续保存",
      );
      const delay = retryDelay(retryAttemptRef.current);
      retryAttemptRef.current += 1;
      conflictLoadTimerRef.current = window.setTimeout(() => {
        conflictLoadTimerRef.current = null;
        void refreshConflictRef.current();
      }, delay);
    }
  }, [clearConflictLoadTimer, markConflict, userId]);

  useEffect(() => {
    refreshConflictRef.current = refreshConflictRemote;
  }, [refreshConflictRemote]);

  const performSync = useCallback(async () => {
    if (
      !mountedRef.current ||
      !hydratedRef.current ||
      writerRoleRef.current !== "writer" ||
      !dirtyRef.current ||
      !pendingMutationRef.current ||
      conflictRef.current ||
      saveInFlightRef.current ||
      autoSaveBlockedRef.current
    ) {
      return;
    }

    if (isOffline()) {
      clearSaveTimer();
      setSyncStatus("offline");
      setSyncError("当前离线，最新学习记录已保存在本设备");
      return;
    }

    clearSaveTimer();
    saveInFlightRef.current = true;
    const mutation = pendingMutationRef.current;
    pendingMutationRef.current = null;
    const snapshotState = stateRef.current;
    const expectedRevision = revisionRef.current;
    const retryAttempt = retryAttemptRef.current;
    const saveStartedAt = performance.now();
    const writerGeneration = leaseGenerationRef.current;
    setSyncStatus("syncing");
    setSyncError("");

    try {
      const remote = await saveLearningState(expectedRevision, snapshotState);
      captureAnalyticsEvent("learning_state_sync_result", {
        operation: "save",
        outcome: "succeeded",
        duration_ms: Math.round(performance.now() - saveStartedAt),
        fallback_to_local: false,
        retry_attempt: retryAttempt,
        state_size_bytes: analyticsStateSize(snapshotState),
        sync_reason: mutation.reason,
        sync_urgency: mutation.urgency,
        coalesced_mutation_count: mutation.coalescedMutationCount,
        dirty_age_ms: Math.max(0, Date.now() - mutation.dirtySinceMs),
        writer_role: "writer",
        revision_before: expectedRevision,
        revision_after: remote.revision,
      });
      if (
        !mountedRef.current ||
        writerRoleRef.current !== "writer" ||
        leaseGenerationRef.current !== writerGeneration
      ) {
        return;
      }

      const resolved = resolveSuccessfulSave({
        userId,
        savedState: snapshotState,
        currentState: stateRef.current,
        remote,
      });
      revisionRef.current = resolved.revision;
      dirtyRef.current = resolved.dirty;
      retryAttemptRef.current = 0;
      lastSuccessfulSaveAtRef.current = Date.now();
      writeCache(resolved);

      const pendingResolution = pendingResolutionRef.current;
      if (pendingResolution) {
        captureAnalyticsEvent(
          "learning_state_conflict_resolution_result",
          {
            conflict_id: pendingResolution.conflictId,
            resolution: pendingResolution.resolution,
            outcome: "succeeded",
            local_revision_before: pendingResolution.localRevisionBefore,
            remote_revision_before: pendingResolution.remoteRevisionBefore,
            resolved_revision: remote.revision,
            duration_ms: Date.now() - pendingResolution.startedAt,
          },
          {
            insertId:
              pendingResolution.conflictId +
              ":" +
              pendingResolution.resolution +
              ":succeeded",
          },
        );
        pendingResolutionRef.current = null;
      }

      if (!resolved.dirty) {
        setSyncStatus("synced");
        setSyncError("");
        if (legacyImportPendingRef.current) {
          captureAnalyticsEvent("learning_state_sync_result", {
            operation: "legacy_import",
            outcome: "succeeded",
            duration_ms: Math.max(
              0,
              Date.now() - legacyImportStartedAtRef.current,
            ),
            fallback_to_local: false,
            retry_attempt: retryAttempt,
            state_size_bytes: analyticsStateSize(snapshotState),
          });
          window.localStorage.removeItem(LEGACY_STORAGE_KEY);
          window.localStorage.setItem(
            legacyDismissedKey(userId),
            "imported" satisfies LegacyDecision,
          );
          legacyImportPendingRef.current = false;
        }
      } else {
        setSyncStatus("pending");
      }
    } catch (error) {
      if (!mountedRef.current) return;
      const errorCode = normalizeAnalyticsError(error);
      captureAnalyticsEvent("learning_state_sync_result", {
        operation: "save",
        outcome: "failed",
        duration_ms: Math.round(performance.now() - saveStartedAt),
        error_code: errorCode,
        fallback_to_local: true,
        retry_attempt: retryAttempt,
        state_size_bytes: analyticsStateSize(snapshotState),
        sync_reason: mutation.reason,
        sync_urgency: mutation.urgency,
        coalesced_mutation_count: mutation.coalescedMutationCount,
        dirty_age_ms: Math.max(0, Date.now() - mutation.dirtySinceMs),
        writer_role: "writer",
        revision_before: expectedRevision,
      });
      captureSanitizedException("learning_state_sync", errorCode, {
        operation: "save",
        retry_attempt: retryAttempt,
      });

      const pendingResolution = pendingResolutionRef.current;
      if (pendingResolution) {
        captureAnalyticsEvent(
          "learning_state_conflict_resolution_result",
          {
            conflict_id: pendingResolution.conflictId,
            resolution: pendingResolution.resolution,
            outcome:
              error instanceof LearningStateConflictError
                ? "reconflicted"
                : "failed",
            local_revision_before: pendingResolution.localRevisionBefore,
            remote_revision_before: pendingResolution.remoteRevisionBefore,
            duration_ms: Date.now() - pendingResolution.startedAt,
            error_code: errorCode,
          },
          {
            insertId:
              pendingResolution.conflictId +
              ":" +
              pendingResolution.resolution +
              ":result",
          },
        );
        pendingResolutionRef.current = null;
      }

      const disposition = syncErrorDisposition(errorCode, isOffline());
      if (
        disposition === "conflict" ||
        error instanceof LearningStateConflictError
      ) {
        pendingMutationRef.current = null;
        autoSaveBlockedRef.current = true;
        conflictLocalRef.current = currentCache(true);
        setSyncStatus("error");
        setSyncError("正在读取最新云端进度，读取成功前不会继续保存");
        await refreshConflictRef.current();
      } else if (disposition === "offline") {
        pendingMutationRef.current = mergeQueuedMutation(
          pendingMutationRef.current,
          mutation,
        );
        setSyncStatus("offline");
        setSyncError("当前离线，最新学习记录已保存在本设备");
      } else if (disposition === "retry") {
        pendingMutationRef.current = mergeQueuedMutation(
          pendingMutationRef.current,
          mutation,
        );
        setSyncStatus("error");
        setSyncError("云端同步暂时不可用，学习记录仍保存在本设备");
        const delay = retryDelay(retryAttemptRef.current);
        retryAttemptRef.current += 1;
        saveTimerRef.current = window.setTimeout(() => {
          saveTimerRef.current = null;
          void performSyncRef.current();
        }, delay);
      } else {
        pendingMutationRef.current = null;
        autoSaveBlockedRef.current = true;
        setSyncStatus("error");
        setSyncError(
          disposition === "auth"
            ? "登录状态已失效，请重新登录后恢复同步"
            : "学习记录格式无法同步，请刷新后重试",
        );
      }
    } finally {
      saveInFlightRef.current = false;
      if (mountedRef.current) setResolvingConflict(false);
      if (
        mountedRef.current &&
        dirtyRef.current &&
        pendingMutationRef.current &&
        saveTimerRef.current === null &&
        !conflictRef.current &&
        !autoSaveBlockedRef.current
      ) {
        schedulePendingRef.current();
      }
    }
  }, [clearSaveTimer, currentCache, userId, writeCache]);

  useEffect(() => {
    performSyncRef.current = performSync;
  }, [performSync]);

  const commitState = useCallback(
    (
      action: SetStateAction<AppState>,
      options: CommitStateOptions,
    ) => {
      if (writerRoleRef.current !== "writer") {
        setWriterPromptOpen(true);
        return false;
      }
      const current = stateRef.current;
      const next =
        typeof action === "function"
          ? (action as (value: AppState) => AppState)(current)
          : action;
      if (Object.is(current, next)) return true;

      stateRef.current = next;
      if (hydratedRef.current) {
        dirtyRef.current = true;
        writeCache(
          createCachedState({
            userId,
            revision: revisionRef.current,
            state: next,
            dirty: true,
          }),
        );
        if (!conflictRef.current) {
          setSyncStatus(isOffline() ? "offline" : "pending");
          setSyncError(
            isOffline() ? "当前离线，最新学习记录已保存在本设备" : "",
          );
          queueMutation(options);
        }
      }
      setStateInternal(next);
      return true;
    },
    [queueMutation, userId, writeCache],
  );

  const withLeaseLock = useCallback(
    async <T,>(callback: () => T | Promise<T>) => {
      if (typeof navigator !== "undefined" && navigator.locks) {
        return navigator.locks.request(
          "gotheword-writer-lease:" + userId,
          { mode: "exclusive" },
          callback,
        );
      }
      return callback();
    },
    [userId],
  );

  const attemptAcquireWriter = useCallback(
    async (force = false) =>
      withLeaseLock(async () => {
        const key = writerLeaseKey(userId);
        const now = Date.now();
        const current = parseWriterLease(window.localStorage.getItem(key));
        if (
          !canAcquireWriterLease({
            lease: current,
            tabId,
            now,
            force,
          })
        ) {
          setCurrentWriterRole("follower");
          return false;
        }
        const generation =
          current?.tabId === tabId && !force
            ? current.generation
            : window.crypto.randomUUID();
        const candidate: WriterLease = {
          tabId,
          generation,
          expiresAt: now + WRITER_LEASE_DURATION_MS,
        };
        window.localStorage.setItem(key, JSON.stringify(candidate));
        const verified = parseWriterLease(window.localStorage.getItem(key));
        if (
          verified?.tabId === candidate.tabId &&
          verified.generation === candidate.generation
        ) {
          leaseGenerationRef.current = generation;
          yieldingWriterRef.current = false;
          setCurrentWriterRole("writer");
          writerChannelRef.current?.postMessage({
            type: "writer-acquired",
            tabId,
            generation,
          } satisfies WriterMessage);
          return true;
        }
        setCurrentWriterRole("follower");
        return false;
      }),
    [setCurrentWriterRole, tabId, userId, withLeaseLock],
  );

  const releaseWriterLease = useCallback(() => {
    const key = writerLeaseKey(userId);
    const current = parseWriterLease(window.localStorage.getItem(key));
    if (
      current?.tabId === tabId &&
      current.generation === leaseGenerationRef.current
    ) {
      window.localStorage.removeItem(key);
    }
    leaseGenerationRef.current = "";
    setCurrentWriterRole("follower");
    clearSaveTimer();
  }, [clearSaveTimer, setCurrentWriterRole, tabId, userId]);

  useEffect(() => {
    mountedRef.current = true;
    conflictRef.current = null;
    retryAttemptRef.current = 0;
    legacyImportPendingRef.current = false;
    legacyImportStartedAtRef.current = 0;
    pendingResolutionRef.current = null;
    pendingMutationRef.current = null;
    autoSaveBlockedRef.current = false;
    lastSuccessfulSaveAtRef.current = 0;

    let active = true;
    const hydrate = async () => {
      const primaryKey = userStorageKey(userId);
      const previousUserKey = legacyUserStorageKey(userId);
      const primaryRaw = window.localStorage.getItem(primaryKey);
      const previousUserRaw = window.localStorage.getItem(previousUserKey);
      const local = parseCachedState(primaryRaw ?? previousUserRaw, userId);

      if ((primaryRaw ?? previousUserRaw) && !local) {
        window.localStorage.removeItem(primaryRaw ? primaryKey : previousUserKey);
      }

      let decision: HydrationDecision;
      let loadFailed = false;
      const loadStartedAt = performance.now();
      try {
        const remote = await loadLearningState(userId);
        captureAnalyticsEvent("learning_state_sync_result", {
          operation: "load",
          outcome: "succeeded",
          duration_ms: Math.round(performance.now() - loadStartedAt),
          fallback_to_local: false,
          retry_attempt: 0,
          state_size_bytes: analyticsStateSize(remote?.state),
        });
        decision = resolveHydration({ userId, local, remote });
      } catch (loadError) {
        loadFailed = true;
        const errorCode = normalizeAnalyticsError(loadError);
        captureAnalyticsEvent("learning_state_sync_result", {
          operation: "load",
          outcome: "failed",
          duration_ms: Math.round(performance.now() - loadStartedAt),
          error_code: errorCode,
          fallback_to_local: Boolean(local),
          retry_attempt: 0,
          state_size_bytes: analyticsStateSize(local?.cache.state),
        });
        captureSanitizedException("learning_state_sync", errorCode, {
          operation: "load",
          retry_attempt: 0,
        });
        const fallback =
          local?.cache ??
          createCachedState({
            userId,
            revision: 0,
            state: { ...EMPTY_STATE },
            dirty: false,
          });
        decision = {
          kind: "ready",
          cache: local ? { ...fallback, dirty: true } : fallback,
        };
        if (active) {
          setSyncStatus(isOffline() ? "offline" : "error");
          setSyncError(
            isOffline()
              ? "当前离线，最新学习记录已保存在本设备"
              : "云端同步暂时不可用，学习记录仍保存在本设备",
          );
        }
      }

      if (!active) return;
      const selected =
        decision.kind === "conflict" ? decision.local : decision.cache;
      stateRef.current = selected.state;
      revisionRef.current = selected.revision;
      dirtyRef.current = selected.dirty;
      setStateInternal(selected.state);
      writeCache(selected);
      if (previousUserRaw) window.localStorage.removeItem(previousUserKey);

      if (decision.kind === "conflict") {
        markConflict(
          { local: decision.local, remote: decision.remote },
          "hydrate",
        );
      } else if (loadFailed) {
        // Keep the offline/error status from the failed cloud read.
      } else if (selected.dirty) {
        setSyncStatus(isOffline() ? "offline" : "pending");
      } else {
        setSyncStatus("synced");
        lastSuccessfulSaveAtRef.current = Date.now();
      }

      const legacyRaw = window.localStorage.getItem(LEGACY_STORAGE_KEY);
      const legacyDecision = window.localStorage.getItem(
        legacyDismissedKey(userId),
      ) as LegacyDecision | null;
      const legacy = parseCachedState(legacyRaw, userId);
      if (legacyRaw && legacy) {
        if (legacyDecision === "confirmed") {
          if (selected.dirty) {
            legacyImportPendingRef.current = true;
            legacyImportStartedAtRef.current = Date.now();
          } else {
            window.localStorage.removeItem(LEGACY_STORAGE_KEY);
            window.localStorage.setItem(
              legacyDismissedKey(userId),
              "imported" satisfies LegacyDecision,
            );
          }
        } else if (!legacyDecision && decision.kind !== "conflict") {
          setLegacyImportState(legacy.cache.state);
        }
      }

      hydratedRef.current = true;
      setHydrated(true);
      if (selected.dirty && decision.kind !== "conflict") {
        pendingMutationRef.current = mergeSyncMutation(null, {
          reason: legacyImportPendingRef.current ? "legacy_import" : "recovery",
          urgency: "normal",
        });
        schedulePendingRef.current();
      }
    };

    void hydrate();
    return () => {
      active = false;
      mountedRef.current = false;
      hydratedRef.current = false;
      clearSaveTimer();
      clearConflictLoadTimer();
    };
  }, [
    clearConflictLoadTimer,
    clearSaveTimer,
    markConflict,
    userId,
    writeCache,
  ]);

  useEffect(() => {
    const channel =
      typeof BroadcastChannel === "undefined"
        ? null
        : new BroadcastChannel("gotheword-writer:" + userId);
    writerChannelRef.current = channel;
    void attemptAcquireWriter(false);

    const waitForSaveIdle = async () => {
      const startedAt = Date.now();
      while (saveInFlightRef.current && Date.now() - startedAt < 2_000) {
        await new Promise((resolve) => window.setTimeout(resolve, 25));
      }
    };

    const handleWriterMessage = (event: MessageEvent<WriterMessage>) => {
      const message = event.data;
      if (!message || message.tabId === tabId) return;
      if (message.type === "writer-acquired") {
        const currentLease = parseWriterLease(
          window.localStorage.getItem(writerLeaseKey(userId)),
        );
        if (
          writerRoleRef.current === "writer" &&
          (currentLease?.tabId !== tabId ||
            currentLease.generation !== leaseGenerationRef.current)
        ) {
          leaseGenerationRef.current = "";
          setCurrentWriterRole("follower");
          clearSaveTimer();
        }
        return;
      }
      if (message.type === "takeover-yielded") {
        takeoverWaitersRef.current.get(message.requestId)?.();
        return;
      }
      if (
        message.type === "takeover-request" &&
        writerRoleRef.current === "writer" &&
        !yieldingWriterRef.current
      ) {
        yieldingWriterRef.current = true;
        void (async () => {
          await beforeWriterYieldRef.current?.();
          clearSaveTimer();
          await performSyncRef.current();
          await waitForSaveIdle();
          releaseWriterLease();
          channel?.postMessage({
            type: "takeover-yielded",
            requestId: message.requestId,
            tabId,
          } satisfies WriterMessage);
        })();
      }
    };

    const handleLeaseStorage = (event: StorageEvent) => {
      if (event.key !== writerLeaseKey(userId)) return;
      const lease = parseWriterLease(
        window.localStorage.getItem(writerLeaseKey(userId)),
      );
      if (
        writerRoleRef.current === "writer" &&
        isWriterLeaseActive(lease) &&
        (lease?.tabId !== tabId ||
          lease.generation !== leaseGenerationRef.current)
      ) {
        leaseGenerationRef.current = "";
        setCurrentWriterRole("follower");
        clearSaveTimer();
      } else if (
        writerRoleRef.current !== "writer" &&
        !isWriterLeaseActive(lease)
      ) {
        void attemptAcquireWriter(false);
      }
    };

    channel?.addEventListener("message", handleWriterMessage);
    window.addEventListener("storage", handleLeaseStorage);
    const heartbeat = window.setInterval(() => {
      if (writerRoleRef.current === "writer" && !yieldingWriterRef.current) {
        const key = writerLeaseKey(userId);
        const current = parseWriterLease(window.localStorage.getItem(key));
        const renewed = renewWriterLease({
          lease: current,
          tabId,
          generation: leaseGenerationRef.current,
        });
        if (renewed) {
          window.localStorage.setItem(key, JSON.stringify(renewed));
        } else {
          leaseGenerationRef.current = "";
          setCurrentWriterRole("follower");
          clearSaveTimer();
        }
      } else {
        const lease = parseWriterLease(
          window.localStorage.getItem(writerLeaseKey(userId)),
        );
        if (!isWriterLeaseActive(lease)) void attemptAcquireWriter(false);
      }
    }, WRITER_LEASE_RENEW_MS);

    return () => {
      window.clearInterval(heartbeat);
      channel?.removeEventListener("message", handleWriterMessage);
      channel?.close();
      writerChannelRef.current = null;
      window.removeEventListener("storage", handleLeaseStorage);
      if (writerRoleRef.current === "writer") releaseWriterLease();
    };
  }, [
    attemptAcquireWriter,
    clearSaveTimer,
    releaseWriterLease,
    setCurrentWriterRole,
    tabId,
    userId,
  ]);

  useEffect(() => {
    if (!hydrated) return;
    if (
      writerRole === "writer" &&
      dirtyRef.current &&
      !conflictRef.current
    ) {
      if (!pendingMutationRef.current) {
        pendingMutationRef.current = mergeSyncMutation(null, {
          reason: "recovery",
          urgency: "normal",
        });
      }
      autoSaveBlockedRef.current = false;
      schedulePendingRef.current();
    } else if (writerRole === "follower") {
      clearSaveTimer();
    }
  }, [clearSaveTimer, hydrated, writerRole]);

  useEffect(() => {
    if (!hydrated) return;

    const handleOnline = () => {
      if (conflictLocalRef.current && !conflictRef.current) {
        retryAttemptRef.current = 0;
        clearConflictLoadTimer();
        void refreshConflictRef.current();
        return;
      }
      if (
        dirtyRef.current &&
        !conflictRef.current &&
        writerRoleRef.current === "writer" &&
        !autoSaveBlockedRef.current
      ) {
        retryAttemptRef.current = 0;
        setSyncStatus("pending");
        setSyncError("");
        pendingMutationRef.current = mergeSyncMutation(
          pendingMutationRef.current,
          {
            reason: "recovery",
            urgency: "flush",
          },
        );
        schedulePendingRef.current();
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== userStorageKey(userId) || !event.newValue) return;
      const incoming = parseCachedState(event.newValue, userId);
      if (!incoming) return;

      if (statesEqual(incoming.cache.state, stateRef.current)) {
        if (
          !incoming.cache.dirty &&
          incoming.cache.revision >= revisionRef.current
        ) {
          revisionRef.current = incoming.cache.revision;
          dirtyRef.current = false;
          lastSuccessfulSaveAtRef.current = Date.now();
          setSyncStatus("synced");
          setSyncError("");
        }
        return;
      }

      if (
        writerRoleRef.current !== "writer" &&
        !incoming.cache.dirty &&
        incoming.cache.revision >= revisionRef.current
      ) {
        stateRef.current = incoming.cache.state;
        revisionRef.current = incoming.cache.revision;
        dirtyRef.current = false;
        setStateInternal(incoming.cache.state);
        setSyncStatus("synced");
        setSyncError("");
        return;
      }

      if (
        writerRoleRef.current === "writer" &&
        !dirtyRef.current &&
        !incoming.cache.dirty &&
        incoming.cache.revision >= revisionRef.current
      ) {
        stateRef.current = incoming.cache.state;
        revisionRef.current = incoming.cache.revision;
        setStateInternal(incoming.cache.state);
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("storage", handleStorage);
    };
  }, [
    clearConflictLoadTimer,
    hydrated,
    userId,
  ]);

  const useRemoteState = useCallback(() => {
    const currentConflict = conflictRef.current;
    if (!currentConflict) return;
    if (writerRoleRef.current !== "writer") {
      setWriterPromptOpen(true);
      return;
    }
    captureAnalyticsEvent(
      "learning_state_conflict_resolution_result",
      {
        conflict_id: currentConflict.id,
        resolution: "use_remote",
        outcome: "succeeded",
        local_revision_before: currentConflict.local.revision,
        remote_revision_before: currentConflict.remote.revision,
        resolved_revision: currentConflict.remote.revision,
        duration_ms: Date.now() - currentConflict.detectedAt,
      },
      { insertId: currentConflict.id + ":use_remote:succeeded" },
    );
    const accepted = acceptRemoteState(userId, currentConflict.remote);
    stateRef.current = accepted.state;
    revisionRef.current = accepted.revision;
    dirtyRef.current = accepted.dirty;
    setStateInternal(accepted.state);
    writeCache(accepted);
    conflictRef.current = null;
    conflictLocalRef.current = null;
    pendingResolutionRef.current = null;
    autoSaveBlockedRef.current = false;
    setConflict(null);
    setResolvingConflict(false);
    legacyImportPendingRef.current = false;
    setSyncStatus(accepted.dirty ? "pending" : "synced");
    setSyncError("");
    if (accepted.dirty) {
      queueMutation({
        reason: "conflict_resolution",
        urgency: "flush",
      });
    }
  }, [queueMutation, userId, writeCache]);

  const keepLocalState = useCallback(() => {
    const currentConflict = conflictRef.current;
    if (!currentConflict || writerRoleRef.current !== "writer") {
      if (writerRoleRef.current !== "writer") setWriterPromptOpen(true);
      return;
    }
    setResolvingConflict(true);
    pendingResolutionRef.current = {
      conflictId: currentConflict.id,
      resolution: "keep_local",
      localRevisionBefore: currentConflict.local.revision,
      remoteRevisionBefore: currentConflict.remote.revision,
      startedAt: Date.now(),
    };
    const rebased = rebaseLocalState(
      currentCache(true),
      currentConflict.remote,
    );
    revisionRef.current = rebased.revision;
    dirtyRef.current = rebased.dirty;
    writeCache(rebased);
    conflictRef.current = null;
    conflictLocalRef.current = null;
    autoSaveBlockedRef.current = false;
    setConflict(null);
    setSyncStatus("pending");
    setSyncError("");
    queueMutation({
      reason: "conflict_resolution",
      urgency: "flush",
    });
  }, [currentCache, queueMutation, writeCache]);

  const importLegacyState = useCallback(() => {
    if (!legacyImportState) return;
    window.localStorage.setItem(
      legacyDismissedKey(userId),
      "confirmed" satisfies LegacyDecision,
    );
    legacyImportPendingRef.current = true;
    legacyImportStartedAtRef.current = Date.now();
    setLegacyImportState(null);
    commitState(legacyImportState, {
      reason: "legacy_import",
      urgency: "flush",
    });
  }, [commitState, legacyImportState, userId]);

  const dismissLegacyImport = useCallback(() => {
    window.localStorage.setItem(
      legacyDismissedKey(userId),
      "dismissed" satisfies LegacyDecision,
    );
    setLegacyImportState(null);
  }, [userId]);

  const takeOverWriter = useCallback(async () => {
    if (writerRoleRef.current === "writer") {
      setWriterPromptOpen(false);
      return true;
    }
    setTakingOverWriter(true);
    const requestId = window.crypto.randomUUID();
    const yielded = new Promise<void>((resolve) => {
      takeoverWaitersRef.current.set(requestId, resolve);
      window.setTimeout(resolve, 2_000);
    });
    writerChannelRef.current?.postMessage({
      type: "takeover-request",
      requestId,
      tabId,
    } satisfies WriterMessage);
    await yielded;
    takeoverWaitersRef.current.delete(requestId);
    const acquired = await attemptAcquireWriter(true);
    if (mountedRef.current) {
      setTakingOverWriter(false);
      setWriterPromptOpen(!acquired);
    }
    return acquired;
  }, [attemptAcquireWriter, tabId]);

  const registerBeforeWriterYield = useCallback(
    (callback: () => void | Promise<void>) => {
      beforeWriterYieldRef.current = callback;
      return () => {
        if (beforeWriterYieldRef.current === callback) {
          beforeWriterYieldRef.current = null;
        }
      };
    },
    [],
  );

  return {
    state,
    commitState,
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
    writerRole,
    writerPromptOpen,
    takingOverWriter,
    requestWriterAccess: () => setWriterPromptOpen(true),
    dismissWriterPrompt: () => setWriterPromptOpen(false),
    takeOverWriter,
    registerBeforeWriterYield,
  };
}
