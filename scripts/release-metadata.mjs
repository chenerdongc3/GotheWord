import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const outputPath = resolve(repositoryRoot, "public/release.json");
const unavailableValues = new Set(["", "local", "unavailable", "unknown"]);

function requiredValue(environment, key) {
  return typeof environment[key] === "string" ? environment[key].trim() : "";
}

async function readSchemaVersion(path, pattern, label) {
  const source = await readFile(resolve(repositoryRoot, path), "utf8");
  const match = source.match(pattern);
  if (!match) throw new Error(`Unable to read ${label} from ${path}.`);
  return Number(match[1]);
}

export async function buildReleaseManifest(environment = process.env) {
  const packageJson = JSON.parse(
    await readFile(resolve(repositoryRoot, "package.json"), "utf8"),
  );
  const [analyticsSchemaVersion, stateSchemaVersion] = await Promise.all([
    readSchemaVersion(
      "app/analytics.ts",
      /ANALYTICS_SCHEMA_VERSION\s*=\s*(\d+)/,
      "analytics schema version",
    ),
    readSchemaVersion(
      "app/learning-state-schema.ts",
      /APP_STATE_SCHEMA_VERSION\s*=\s*(\d+)/,
      "state schema version",
    ),
  ]);

  return {
    app_version:
      requiredValue(environment, "NEXT_PUBLIC_APP_VERSION") ||
      packageJson.version,
    release_sha:
      requiredValue(environment, "NEXT_PUBLIC_RELEASE_SHA") || "local",
    deployment_env:
      requiredValue(environment, "NEXT_PUBLIC_DEPLOYMENT_ENV") || "local",
    sites_version:
      requiredValue(environment, "NEXT_PUBLIC_SITES_VERSION") || "unavailable",
    supabase_migration:
      requiredValue(environment, "NEXT_PUBLIC_SUPABASE_MIGRATION") ||
      "unavailable",
    analytics_schema_version: analyticsSchemaVersion,
    state_schema_version: stateSchemaVersion,
  };
}

export async function validateProductionReleaseMetadata(
  manifest,
  environment = process.env,
) {
  const failures = [];

  if (!/^[0-9a-f]{40}$/i.test(manifest.release_sha)) {
    failures.push("NEXT_PUBLIC_RELEASE_SHA must be a full 40-character Git SHA.");
  }
  if (!["preview", "production"].includes(manifest.deployment_env)) {
    failures.push(
      "NEXT_PUBLIC_DEPLOYMENT_ENV must be preview or production for a release.",
    );
  }
  if (
    unavailableValues.has(manifest.sites_version.toLowerCase()) ||
    /\s/.test(manifest.sites_version)
  ) {
    failures.push(
      "NEXT_PUBLIC_SITES_VERSION must identify the saved Sites or hosting version.",
    );
  }
  if (!/^\d{14}$/.test(manifest.supabase_migration)) {
    failures.push(
      "NEXT_PUBLIC_SUPABASE_MIGRATION must be a 14-digit migration version.",
    );
  } else {
    const migrations = await readdir(
      resolve(repositoryRoot, "supabase/migrations"),
    );
    if (
      !migrations.some((file) =>
        file.startsWith(`${manifest.supabase_migration}_`),
      )
    ) {
      failures.push(
        `No local migration starts with ${manifest.supabase_migration}_.`,
      );
    }
  }

  const packageJson = JSON.parse(
    await readFile(resolve(repositoryRoot, "package.json"), "utf8"),
  );
  if (manifest.app_version !== packageJson.version) {
    failures.push(
      `NEXT_PUBLIC_APP_VERSION must equal package.json version ${packageJson.version}.`,
    );
  }

  const postHogToken = requiredValue(
    environment,
    "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN",
  );
  if (!postHogToken.startsWith("phc_")) {
    failures.push("NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is missing or invalid.");
  }
  const postHogHost = requiredValue(environment, "NEXT_PUBLIC_POSTHOG_HOST");
  try {
    const host = new URL(postHogHost);
    if (
      host.protocol !== "https:" ||
      !host.hostname.endsWith(".i.posthog.com")
    ) {
      failures.push(
        "NEXT_PUBLIC_POSTHOG_HOST must be an HTTPS PostHog ingestion host.",
      );
    }
  } catch {
    failures.push("NEXT_PUBLIC_POSTHOG_HOST is missing or invalid.");
  }

  if (failures.length > 0) {
    throw new Error(`Release metadata validation failed:\n- ${failures.join("\n- ")}`);
  }
}

export async function writeReleaseManifest(manifest) {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  await access(outputPath);
}

const invokedDirectly =
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const manifest = await buildReleaseManifest();
  if (process.argv.includes("--verify")) {
    await validateProductionReleaseMetadata(manifest);
  }
  await writeReleaseManifest(manifest);
  console.log(
    process.argv.includes("--verify")
      ? "Release metadata is complete and public/release.json was generated."
      : "Generated public/release.json.",
  );
}
