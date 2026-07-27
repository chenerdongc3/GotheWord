"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
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
  createCachedState,
  LEGACY_STORAGE_KEY,
  legacyDismissedKey,
  legacyUserStorageKey,
  parseCachedState,
  rebaseLocalState,
  resolveHydration,
  resolveSuccessfulSave,
  retryDelay,
  serializeCachedState,
  statesEqual,
  userStorageKey,
  type CachedState,
  type HydrationDecision,
  type RemoteLearningState,
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

export type LearningStateConflict = {
  id: string;
  detectionStage: "hydrate" | "save";
  detectedAt: number;
  local: CachedState;
  remote: RemoteLearningState;
};

type LegacyDecision = "confirmed" | "dismissed" | "imported";
type PendingConflictResolution = {
  conflictId: string;
  resolution: "keep_local";
  localRevisionBefore: number;
  remoteRevisionBefore: number;
  startedAt: number;
};

function isOffline() {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

export function useLearningStateSync(userId: string) {
  const [state, setStateInternal] = useState<AppState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("loading");
  const [syncError, setSyncError] = useState("");
  const [conflict, setConflict] = useState<LearningStateConflict | null>(null);
  const [legacyImportState, setLegacyImportState] = useState<AppState | null>(null);
  const [resolvingConflict, setResolvingConflict] = useState(false);

  const stateRef = useRef<AppState>(EMPTY_STATE);
  const revisionRef = useRef(0);
  const dirtyRef = useRef(false);
  const hydratedRef = useRef(false);
  const mountedRef = useRef(false);
  const saveInFlightRef = useRef(false);
  const saveTimerRef = useRef<number | null>(null);
  const retryAttemptRef = useRef(0);
  const conflictRef = useRef<LearningStateConflict | null>(null);
  const performSyncRef = useRef<() => Promise<void>>(async () => undefined);
  const legacyImportPendingRef = useRef(false);
  const legacyImportStartedAtRef = useRef(0);
  const pendingResolutionRef = useRef<PendingConflictResolution | null>(null);

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

  const scheduleSync = useCallback((delay: number) => {
    if (saveTimerRef.current !== null) {
      window.clearTimeout(saveTimerRef.current);
    }
    saveTimerRef.current = window.setTimeout(() => {
      saveTimerRef.current = null;
      void performSyncRef.current();
    }, delay);
  }, []);

  const markConflict = useCallback(
    (
      nextConflict: Pick<LearningStateConflict, "local" | "remote">,
      detectionStage: LearningStateConflict["detectionStage"],
    ) => {
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
    [writeCache],
  );

  const performSync = useCallback(async () => {
    if (
      !mountedRef.current ||
      !hydratedRef.current ||
      !dirtyRef.current ||
      conflictRef.current ||
      saveInFlightRef.current
    ) {
      return;
    }

    if (isOffline()) {
      setSyncStatus("offline");
      setSyncError("当前离线，最新学习记录已保存在本设备");
      const delay = retryDelay(retryAttemptRef.current);
      retryAttemptRef.current += 1;
      scheduleSync(delay);
      return;
    }

    saveInFlightRef.current = true;
    const snapshotState = stateRef.current;
    const expectedRevision = revisionRef.current;
    const retryAttempt = retryAttemptRef.current;
    const saveStartedAt = performance.now();
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
      });
      if (!mountedRef.current) return;

      const resolved = resolveSuccessfulSave({
        userId,
        savedState: snapshotState,
        currentState: stateRef.current,
        remote,
      });
      revisionRef.current = resolved.revision;
      dirtyRef.current = resolved.dirty;
      retryAttemptRef.current = 0;
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
              `${pendingResolution.conflictId}:` +
              `${pendingResolution.resolution}:succeeded`,
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
        scheduleSync(500);
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
              `${pendingResolution.conflictId}:` +
              `${pendingResolution.resolution}:result`,
          },
        );
        pendingResolutionRef.current = null;
      }

      if (error instanceof LearningStateConflictError) {
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
          if (remote) {
            markConflict(
              {
                local: currentCache(true),
                remote,
              },
              "save",
            );
            return;
          }

          revisionRef.current = 0;
          dirtyRef.current = true;
          writeCache(currentCache(true));
        } catch (loadError) {
          const loadErrorCode = normalizeAnalyticsError(loadError);
          captureAnalyticsEvent("learning_state_sync_result", {
            operation: "load",
            outcome: "failed",
            duration_ms: Math.round(performance.now() - loadStartedAt),
            error_code: loadErrorCode,
            fallback_to_local: true,
            retry_attempt: retryAttempt,
            state_size_bytes: analyticsStateSize(stateRef.current),
          });
          captureSanitizedException("learning_state_sync", loadErrorCode, {
            operation: "load",
            retry_attempt: retryAttempt,
          });
          // The retry below will re-fetch the cloud state after connectivity returns.
        }
      }

      setSyncStatus(isOffline() ? "offline" : "error");
      setSyncError(
        isOffline()
          ? "当前离线，最新学习记录已保存在本设备"
          : "云端同步暂时不可用，学习记录仍保存在本设备",
      );
      const delay = retryDelay(retryAttemptRef.current);
      retryAttemptRef.current += 1;
      scheduleSync(delay);
    } finally {
      saveInFlightRef.current = false;
      if (mountedRef.current) setResolvingConflict(false);
    }
  }, [
    currentCache,
    markConflict,
    scheduleSync,
    userId,
    writeCache,
  ]);

  useEffect(() => {
    performSyncRef.current = performSync;
  }, [performSync]);

  const setState = useCallback<Dispatch<SetStateAction<AppState>>>(
    (action) => {
      const current = stateRef.current;
      const next =
        typeof action === "function"
          ? (action as (value: AppState) => AppState)(current)
          : action;
      if (Object.is(current, next)) return;

      stateRef.current = next;
      if (hydratedRef.current) {
        dirtyRef.current = true;
        writeCache(currentCache(true));
        if (!conflictRef.current) {
          setSyncStatus("pending");
          setSyncError("");
          scheduleSync(500);
        }
      }
      setStateInternal(next);
    },
    [currentCache, scheduleSync, writeCache],
  );

  useEffect(() => {
    mountedRef.current = true;
    conflictRef.current = null;
    retryAttemptRef.current = 0;
    legacyImportPendingRef.current = false;
    legacyImportStartedAtRef.current = 0;
    pendingResolutionRef.current = null;

    let active = true;
    const hydrate = async () => {
      const primaryKey = userStorageKey(userId);
      const previousUserKey = legacyUserStorageKey(userId);
      const primaryRaw = window.localStorage.getItem(primaryKey);
      const previousUserRaw = window.localStorage.getItem(previousUserKey);
      const local = parseCachedState(
        primaryRaw ?? previousUserRaw,
        userId,
      );

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
        const fallback = local?.cache ??
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
      if (previousUserRaw) {
        window.localStorage.removeItem(previousUserKey);
      }

      if (decision.kind === "conflict") {
        markConflict(
          { local: decision.local, remote: decision.remote },
          "hydrate",
        );
      } else if (loadFailed) {
        // Keep the error/offline status set by the failed cloud read.
      } else if (selected.dirty) {
        setSyncStatus(isOffline() ? "offline" : "pending");
      } else {
        setSyncStatus("synced");
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
      if (selected.dirty && decision.kind !== "conflict") scheduleSync(500);
    };

    void hydrate();
    return () => {
      active = false;
      mountedRef.current = false;
      hydratedRef.current = false;
      if (saveTimerRef.current !== null) {
        window.clearTimeout(saveTimerRef.current);
        saveTimerRef.current = null;
      }
    };
  }, [markConflict, scheduleSync, userId, writeCache]);

  useEffect(() => {
    if (!hydrated) return;

    const handleOnline = () => {
      if (dirtyRef.current && !conflictRef.current) {
        retryAttemptRef.current = 0;
        setSyncStatus("pending");
        setSyncError("");
        scheduleSync(0);
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
          setSyncStatus("synced");
          setSyncError("");
        }
        return;
      }

      if (
        !dirtyRef.current &&
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

      if (dirtyRef.current && !incoming.cache.dirty) {
        markConflict(
          {
            local: currentCache(true),
            remote: {
              state: incoming.cache.state,
              schemaVersion: APP_STATE_SCHEMA_VERSION,
              revision: incoming.cache.revision,
              updatedAt: incoming.cache.savedAt,
            },
          },
          "save",
        );
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("storage", handleStorage);
    };
  }, [currentCache, hydrated, markConflict, scheduleSync, userId]);

  const useRemoteState = useCallback(() => {
    const currentConflict = conflictRef.current;
    if (!currentConflict) return;

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
      { insertId: `${currentConflict.id}:use_remote:succeeded` },
    );
    const accepted = acceptRemoteState(userId, currentConflict.remote);
    stateRef.current = accepted.state;
    revisionRef.current = accepted.revision;
    dirtyRef.current = accepted.dirty;
    setStateInternal(accepted.state);
    writeCache(accepted);
    conflictRef.current = null;
    pendingResolutionRef.current = null;
    setConflict(null);
    setResolvingConflict(false);
    legacyImportPendingRef.current = false;
    setSyncStatus(dirtyRef.current ? "pending" : "synced");
    setSyncError("");
    if (dirtyRef.current) scheduleSync(0);
  }, [scheduleSync, userId, writeCache]);

  const keepLocalState = useCallback(() => {
    const currentConflict = conflictRef.current;
    if (!currentConflict) return;

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
    setConflict(null);
    setSyncStatus("pending");
    setSyncError("");
    scheduleSync(0);
  }, [currentCache, scheduleSync, writeCache]);

  const importLegacyState = useCallback(() => {
    if (!legacyImportState) return;

    window.localStorage.setItem(
      legacyDismissedKey(userId),
      "confirmed" satisfies LegacyDecision,
    );
    legacyImportPendingRef.current = true;
    legacyImportStartedAtRef.current = Date.now();
    setLegacyImportState(null);
    setState(legacyImportState);
  }, [legacyImportState, setState, userId]);

  const dismissLegacyImport = useCallback(() => {
    window.localStorage.setItem(
      legacyDismissedKey(userId),
      "dismissed" satisfies LegacyDecision,
    );
    setLegacyImportState(null);
  }, [userId]);

  return {
    state,
    setState,
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
  };
}
