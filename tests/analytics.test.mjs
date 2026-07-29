import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  ANALYTICS_EVENT_NAMES,
  analyticsStateSize,
  buildAnalyticsProperties,
  findProhibitedAnalyticsKeys,
  normalizeAnalyticsError,
} from "../app/analytics.ts";

test("declares the complete POR-12 P0 client event catalog", () => {
  assert.deepEqual(ANALYTICS_EVENT_NAMES, [
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
  ]);
});

test("adds release correlation and schema properties without PII", () => {
  const payload = buildAnalyticsProperties({
    auth_method: "username_password",
  });

  assert.equal(payload.analytics_schema_version, 1);
  assert.equal(payload.state_schema_version, 3);
  assert.equal(payload.$geoip_disable, true);
  assert.equal(typeof payload.app_version, "string");
  assert.equal(typeof payload.release_sha, "string");
  assert.equal(typeof payload.sites_version, "string");
  assert.equal(typeof payload.supabase_migration, "string");
  assert.match(payload.local_day, /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(findProhibitedAnalyticsKeys(payload), []);
});

test("rejects forbidden identity, answer, raw error, and state fields", () => {
  assert.deepEqual(
    findProhibitedAnalyticsKeys({
      username: "hidden",
      password: "hidden",
      selected_answer: "hidden",
      raw_error: "hidden",
      state: { progress: {} },
    }),
    ["password", "raw_error", "selected_answer", "state", "username"],
  );
  assert.throws(
    () => buildAnalyticsProperties({ password: "must-not-leave-browser" }),
    /analytics_privacy_violation:password/,
  );
});

test("normalizes provider errors to stable low-cardinality codes", () => {
  assert.equal(
    normalizeAnalyticsError({ code: "40001" }),
    "revision_conflict",
  );
  assert.equal(
    normalizeAnalyticsError(new Error("Invalid login credentials")),
    "invalid_credentials",
  );
  assert.equal(
    normalizeAnalyticsError({ status: 429 }),
    "rate_limited",
  );
  assert.equal(
    normalizeAnalyticsError(new TypeError("Failed to fetch")),
    "network_error",
  );
  assert.equal(normalizeAnalyticsError(new Error("opaque provider detail")), "unknown");
});

test("reports only state byte size and never serializes it into event fields", () => {
  const value = { version: 2, progress: { tisch: { secret: "not-an-event" } } };
  const size = analyticsStateSize(value);
  assert.ok(size > 0);
  const payload = buildAnalyticsProperties({
    operation: "save",
    outcome: "succeeded",
    duration_ms: 12,
    fallback_to_local: false,
    retry_attempt: 0,
    state_size_bytes: size,
  });
  assert.equal(payload.state_size_bytes, size);
  assert.equal("state" in payload, false);
});

test("keeps retired registration fail-closed and disables unsafe automatic capture", async () => {
  const [root, edge, analytics, instrumentation] = await Promise.all([
    readFile(new URL("../app/GotheWordRoot.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../supabase/functions/register/index.ts", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/analytics.ts", import.meta.url), "utf8"),
    readFile(new URL("../instrumentation-client.ts", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(root, /sign_up_completed/);
  assert.match(edge, /legacy_registration_disabled/);
  assert.match(edge, /410/);
  assert.doesNotMatch(edge, /createUser|email_confirm|SERVICE_ROLE/);
  assert.match(instrumentation, /initializeAnalyticsClient\(\)/);
  assert.match(analytics, /autocapture: false/);
  assert.match(analytics, /capture_pageview: false/);
  assert.match(analytics, /advanced_disable_flags: true/);
  assert.match(analytics, /disable_external_dependency_loading: true/);
  assert.match(analytics, /disable_session_recording: true/);
  assert.match(analytics, /capture_exceptions: false/);
});
