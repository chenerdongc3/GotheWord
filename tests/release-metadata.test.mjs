import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import {
  buildReleaseManifest,
  validateProductionReleaseMetadata,
} from "../scripts/release-metadata.mjs";

const completeEnvironment = {
  NEXT_PUBLIC_APP_VERSION: "0.1.0",
  NEXT_PUBLIC_RELEASE_SHA: execFileSync("git", ["rev-parse", "HEAD"], {
    encoding: "utf8",
  }).trim(),
  NEXT_PUBLIC_DEPLOYMENT_ENV: "production",
  NEXT_PUBLIC_SITES_VERSION: "v6",
  NEXT_PUBLIC_SUPABASE_MIGRATION: "20260726100000",
  NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: "phc_test_only",
  NEXT_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com",
  NEXT_PUBLIC_SUPABASE_URL: "https://test-project.supabase.co",
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_test_only",
};

test("builds a public release manifest without credentials", async () => {
  const manifest = await buildReleaseManifest(completeEnvironment);

  assert.deepEqual(Object.keys(manifest), [
    "app_version",
    "release_sha",
    "deployment_env",
    "sites_version",
    "supabase_migration",
    "analytics_schema_version",
    "state_schema_version",
  ]);
  assert.equal(manifest.analytics_schema_version, 1);
  assert.equal(manifest.state_schema_version, 3);
  assert.doesNotMatch(JSON.stringify(manifest), /phc_|posthog_host|token/i);
});

test("accepts complete traceable production metadata", async () => {
  const manifest = await buildReleaseManifest(completeEnvironment);
  await assert.doesNotReject(
    validateProductionReleaseMetadata(manifest, completeEnvironment),
  );
});

test("rejects placeholder or untraceable production metadata", async () => {
  const environment = {
    ...completeEnvironment,
    NEXT_PUBLIC_RELEASE_SHA: "local",
    NEXT_PUBLIC_SITES_VERSION: "unavailable",
    NEXT_PUBLIC_SUPABASE_MIGRATION: "missing",
    NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: "",
    NEXT_PUBLIC_POSTHOG_HOST: "http://example.com",
    NEXT_PUBLIC_SUPABASE_URL: "not-a-url",
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "legacy-or-secret-key",
  };
  const manifest = await buildReleaseManifest(environment);

  await assert.rejects(
    validateProductionReleaseMetadata(manifest, environment),
    (error) => {
      assert.match(error.message, /40-character Git SHA/);
      assert.match(error.message, /SITES_VERSION/);
      assert.match(error.message, /14-digit migration/);
      assert.match(error.message, /POSTHOG_PROJECT_TOKEN/);
      assert.match(error.message, /HTTPS PostHog ingestion host/);
      assert.match(error.message, /SUPABASE_URL/);
      assert.match(error.message, /SUPABASE_PUBLISHABLE_KEY/);
      return true;
    },
  );
});

test("rejects metadata for a commit other than the checked-out source", async () => {
  const manifest = await buildReleaseManifest({
    ...completeEnvironment,
    NEXT_PUBLIC_RELEASE_SHA: "a".repeat(40),
  });

  await assert.rejects(
    validateProductionReleaseMetadata(manifest, completeEnvironment),
    /must equal the checked-out source commit/,
  );
});
