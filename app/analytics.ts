"use client";

import posthog from "posthog-js";
import type { PartOfSpeech } from "./content/a1/types.ts";
import { localDayKey } from "./date.ts";
import { APP_STATE_SCHEMA_VERSION } from "./learning-state-schema.ts";

export const ANALYTICS_SCHEMA_VERSION = 1;

export type DeploymentEnvironment = "local" | "preview" | "production";
export type AnalyticsErrorCode =
  | "network_error"
  | "timeout"
  | "unauthorized"
  | "forbidden"
  | "not_found"
  | "rate_limited"
  | "provider_error"
  | "invalid_state"
  | "revision_conflict"
  | "invalid_credentials"
  | "username_exists"
  | "invalid_input"
  | "unknown";

type LearningEventProperties = {
  learning_session_id: string;
  session_mode: "new" | "review" | "free";
  daily_goal: 5 | 10 | 20;
};

export type AnalyticsEventPropertiesMap = {
  login_completed: {
    auth_method: "username_password";
  };
  authentication_failed: {
    auth_flow: "login" | "sign_up";
    failure_stage: "register" | "fallback_login" | "login";
    error_code: AnalyticsErrorCode;
  };
  onboarding_completed: {
    selected_daily_goal: 5 | 10 | 20;
  };
  due_review_prompt_viewed: {
    due_word_count: number;
    review_batch_size: number;
    remaining_review_count: number;
    overdue_word_count: number;
    weak_due_count: number;
  };
  learning_session_started: LearningEventProperties & {
    planned_word_count: number;
    due_word_count_before: number;
    remaining_goal_before: number;
    remaining_review_count: number;
  };
  learning_session_resume_prompt_viewed: LearningEventProperties & {
    phase: "memory" | "quiz";
    completed_word_count: number;
    queue_word_count: number;
    elapsed_seconds: number;
    resume_age_seconds: number;
  };
  learning_session_resumed: LearningEventProperties & {
    phase: "memory" | "quiz";
    completed_word_count: number;
    queue_word_count: number;
    elapsed_seconds: number;
    resume_age_seconds: number;
    resume_source: "persisted_session_modal";
  };
  learning_answer_submitted: LearningEventProperties & {
    word_id: string;
    word_kind: PartOfSpeech;
    phase: "quiz";
    correct: boolean;
    answer_method: "option" | "forgot";
    review_stage_before: number;
    streak_after: number;
    target_streak: number;
    word_completed: boolean;
    weak_marked: boolean;
    answer_index_in_session: number;
  };
  learning_session_completed: LearningEventProperties & {
    planned_word_count: number;
    completed_word_count: number;
    answer_count: number;
    correct_count: number;
    accuracy: number;
    elapsed_seconds: number;
    weak_word_count: number;
    remaining_review_count: number;
  };
  learning_session_abandoned: LearningEventProperties & {
    abandon_reason: "return_home" | "discard_from_resume";
    phase: "memory" | "quiz";
    completed_word_count: number;
    queue_word_count: number;
    answer_count: number;
    elapsed_seconds: number;
  };
  daily_goal_completed: LearningEventProperties & {
    new_words_completed_today: number;
  };
  due_review_completed: LearningEventProperties & {
    reviewed_word_count_in_session: number;
    answer_count: number;
    accuracy: number;
    elapsed_seconds: number;
    weak_word_count: number;
  };
  learning_state_sync_result: {
    operation: "load" | "save" | "legacy_import";
    outcome: "succeeded" | "failed";
    duration_ms: number;
    error_code?: AnalyticsErrorCode;
    fallback_to_local: boolean;
    retry_attempt: number;
    state_size_bytes: number;
  };
  learning_state_conflict_detected: {
    conflict_id: string;
    detection_stage: "hydrate" | "save";
    local_revision: number;
    remote_revision: number;
    local_dirty: boolean;
    has_active_session: boolean;
    retry_attempt: number;
  };
  learning_state_conflict_resolution_result: {
    conflict_id: string;
    resolution: "use_remote" | "keep_local";
    outcome: "succeeded" | "failed" | "reconflicted";
    local_revision_before: number;
    remote_revision_before: number;
    resolved_revision?: number;
    duration_ms: number;
    error_code?: AnalyticsErrorCode;
  };
};

export type AnalyticsEventName = keyof AnalyticsEventPropertiesMap;

type AnalyticsTestEvent = {
  event: AnalyticsEventName;
  properties: Record<string, unknown>;
};

declare global {
  interface Window {
    __GOTHEWORD_ANALYTICS_TEST_EVENTS__?: AnalyticsTestEvent[];
  }
}

export const ANALYTICS_EVENT_NAMES = [
  "login_completed",
  "authentication_failed",
  "onboarding_completed",
  "due_review_prompt_viewed",
  "learning_session_started",
  "learning_session_resume_prompt_viewed",
  "learning_session_resumed",
  "learning_answer_submitted",
  "learning_session_completed",
  "learning_session_abandoned",
  "daily_goal_completed",
  "due_review_completed",
  "learning_state_sync_result",
  "learning_state_conflict_detected",
  "learning_state_conflict_resolution_result",
] as const satisfies readonly AnalyticsEventName[];

export type CommonAnalyticsProperties = {
  $geoip_disable: true;
  analytics_schema_version: typeof ANALYTICS_SCHEMA_VERSION;
  app_version: string;
  release_sha: string;
  deployment_env: DeploymentEnvironment;
  state_schema_version: typeof APP_STATE_SCHEMA_VERSION;
  local_day: string;
  timezone?: string;
  sites_version: string;
  supabase_migration: string;
};

type CaptureOptions = {
  insertId?: string;
};

type CaptureOnceOptions = CaptureOptions & {
  dedupeKey: string;
  storage: "local" | "session";
};

const PROHIBITED_PROPERTY_KEYS = new Set([
  "username",
  "password",
  "password_hash",
  "email",
  "access_token",
  "refresh_token",
  "service_role_key",
  "answer_text",
  "selected_answer",
  "correct_answer",
  "translation",
  "german",
  "example",
  "state",
  "local_state",
  "remote_state",
  "request_body",
  "response_body",
  "error_message",
  "raw_error",
]);

function deploymentEnvironment(): DeploymentEnvironment {
  const value = process.env.NEXT_PUBLIC_DEPLOYMENT_ENV;
  return value === "preview" || value === "production" ? value : "local";
}

function browserTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;
  } catch {
    return undefined;
  }
}

export function isAnalyticsConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST,
  );
}

let analyticsInitialized = false;

export function initializeAnalyticsClient() {
  const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_ANALYTICS_TEST_MODE === "true"
  ) {
    analyticsInitialized = true;
    return true;
  }
  if (
    analyticsInitialized ||
    typeof window === "undefined" ||
    !projectToken ||
    !apiHost
  ) {
    return analyticsInitialized;
  }

  posthog.init(projectToken, {
    api_host: apiHost,
    defaults: "2026-01-30",
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    capture_exceptions: false,
    advanced_disable_flags: true,
    disable_external_dependency_loading: true,
    disable_session_recording: true,
    disable_surveys: true,
    person_profiles: "identified_only",
    request_batching: false,
    api_transport: "fetch",
    respect_dnt: true,
    debug: process.env.NODE_ENV === "development",
  });
  analyticsInitialized = true;
  return true;
}

export function commonAnalyticsProperties(
  now = new Date(),
): CommonAnalyticsProperties {
  return {
    $geoip_disable: true,
    analytics_schema_version: ANALYTICS_SCHEMA_VERSION,
    app_version: process.env.NEXT_PUBLIC_APP_VERSION || "local",
    release_sha: process.env.NEXT_PUBLIC_RELEASE_SHA || "local",
    deployment_env: deploymentEnvironment(),
    state_schema_version: APP_STATE_SCHEMA_VERSION,
    local_day: localDayKey(now),
    timezone: browserTimezone(),
    sites_version: process.env.NEXT_PUBLIC_SITES_VERSION || "unavailable",
    supabase_migration:
      process.env.NEXT_PUBLIC_SUPABASE_MIGRATION || "unavailable",
  };
}

export function findProhibitedAnalyticsKeys(value: unknown) {
  const found = new Set<string>();

  const visit = (current: unknown) => {
    if (!current || typeof current !== "object") return;
    for (const [key, nested] of Object.entries(current)) {
      if (PROHIBITED_PROPERTY_KEYS.has(key.toLowerCase())) found.add(key);
      visit(nested);
    }
  };

  visit(value);
  return [...found].sort();
}

export function buildAnalyticsProperties<K extends AnalyticsEventName>(
  properties: AnalyticsEventPropertiesMap[K],
  options: CaptureOptions = {},
) {
  const payload = {
    ...commonAnalyticsProperties(),
    ...properties,
    ...(options.insertId ? { $insert_id: options.insertId } : {}),
  };
  const prohibited = findProhibitedAnalyticsKeys(payload);
  if (prohibited.length > 0) {
    throw new Error(`analytics_privacy_violation:${prohibited.join(",")}`);
  }
  return payload;
}

export function captureAnalyticsEvent<K extends AnalyticsEventName>(
  event: K,
  properties: AnalyticsEventPropertiesMap[K],
  options: CaptureOptions = {},
) {
  if (!isAnalyticsConfigured()) return false;
  try {
    const payload = buildAnalyticsProperties(properties, options);
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_ANALYTICS_TEST_MODE === "true"
    ) {
      const sink = window.__GOTHEWORD_ANALYTICS_TEST_EVENTS__ ?? [];
      sink.push({ event, properties: payload });
      window.__GOTHEWORD_ANALYTICS_TEST_EVENTS__ = sink;
      return true;
    }
    if (!initializeAnalyticsClient()) return false;
    posthog.capture(event, payload);
    return true;
  } catch {
    console.error("Analytics event was dropped by the privacy guard.");
    return false;
  }
}

export function captureAnalyticsEventOnce<K extends AnalyticsEventName>(
  event: K,
  properties: AnalyticsEventPropertiesMap[K],
  options: CaptureOnceOptions,
) {
  if (!isAnalyticsConfigured() || typeof window === "undefined") return false;
  const storage =
    options.storage === "session" ? window.sessionStorage : window.localStorage;
  const key = `gotheword-analytics:${options.dedupeKey}`;
  if (storage.getItem(key)) return false;

  const captured = captureAnalyticsEvent(event, properties, options);
  if (captured) storage.setItem(key, new Date().toISOString());
  return captured;
}

export function identifyAnalyticsUser(userId: string) {
  if (!initializeAnalyticsClient()) return;
  if (process.env.NEXT_PUBLIC_ANALYTICS_TEST_MODE === "true") return;
  posthog.identify(userId);
}

export function resetAnalyticsUser() {
  if (!initializeAnalyticsClient()) return;
  if (process.env.NEXT_PUBLIC_ANALYTICS_TEST_MODE === "true") return;
  posthog.reset();
}

export function normalizeAnalyticsError(error: unknown): AnalyticsErrorCode {
  const record =
    error && typeof error === "object"
      ? (error as { code?: unknown; message?: unknown; status?: unknown; name?: unknown })
      : {};
  const code = typeof record.code === "string" ? record.code.toLowerCase() : "";
  const message =
    typeof record.message === "string" ? record.message.toLowerCase() : "";
  const status = typeof record.status === "number" ? record.status : undefined;
  const name = typeof record.name === "string" ? record.name.toLowerCase() : "";

  if (
    code === "40001" ||
    message.includes("learning_state_revision_conflict")
  ) {
    return "revision_conflict";
  }
  if (name === "aborterror" || code.includes("timeout") || message.includes("timeout")) {
    return "timeout";
  }
  if (status === 401 || code.includes("unauthorized")) return "unauthorized";
  if (status === 403 || code.includes("forbidden")) return "forbidden";
  if (status === 404 || code.includes("not_found")) return "not_found";
  if (status === 429 || code.includes("rate_limit")) return "rate_limited";
  if (
    code.includes("invalid_credentials") ||
    message.includes("invalid login credentials")
  ) {
    return "invalid_credentials";
  }
  if (
    code.includes("user_already_exists") ||
    message.includes("user already registered")
  ) {
    return "username_exists";
  }
  if (status === 400 || code.includes("invalid_input")) return "invalid_input";
  if (
    message.includes("failed to fetch") ||
    message.includes("network") ||
    name === "typeerror"
  ) {
    return "network_error";
  }
  if (message.includes("invalid") && message.includes("state")) {
    return "invalid_state";
  }
  if (status && status >= 500) return "provider_error";
  return "unknown";
}

export function captureSanitizedException(
  scope:
    | "authentication"
    | "authenticated_app_loading"
    | "learning_state_sync",
  errorCode: AnalyticsErrorCode,
  properties: Record<string, string | number | boolean> = {},
) {
  if (!initializeAnalyticsClient()) return;
  if (process.env.NEXT_PUBLIC_ANALYTICS_TEST_MODE === "true") return;
  const payload = {
    ...commonAnalyticsProperties(),
    error_scope: scope,
    error_code: errorCode,
    ...properties,
  };
  if (findProhibitedAnalyticsKeys(payload).length > 0) return;
  posthog.captureException(new Error(`${scope}:${errorCode}`), payload);
}

export function analyticsStateSize(value: unknown) {
  try {
    return new TextEncoder().encode(JSON.stringify(value)).byteLength;
  } catch {
    return 0;
  }
}
