import { readFile } from "node:fs/promises";

export function validateAuthConfig(config, env = process.env) {
  const failures = [];
  const siteUrl = env.AUTH_EXPECTED_SITE_URL;
  const redirects = (env.AUTH_EXPECTED_REDIRECT_URLS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const actualRedirects = Array.isArray(config.uri_allow_list)
    ? config.uri_allow_list
    : String(config.uri_allow_list ?? "").split(",").map((value) => value.trim()).filter(Boolean);

  if (!siteUrl) failures.push("AUTH_EXPECTED_SITE_URL is required");
  if (config.site_url !== siteUrl) failures.push("Auth Site URL does not match the exact expected URL");
  if (!siteUrl?.endsWith("/GotheWord/")) failures.push("production Site URL must retain the /GotheWord/ path");
  if (actualRedirects.some((url) => url.includes("*"))) failures.push("redirect allowlist must not contain wildcards");
  if (redirects.length && JSON.stringify([...actualRedirects].sort()) !== JSON.stringify([...redirects].sort())) {
    failures.push("redirect allowlist does not exactly match AUTH_EXPECTED_REDIRECT_URLS");
  }
  if (config.mailer_autoconfirm !== false) failures.push("Confirm Email must be enabled (mailer_autoconfirm=false)");
  if (config.disable_signup === true) failures.push("new registrations are disabled before smoke");
  if (config.external_email_enabled === false) failures.push("email provider is disabled");
  if (!config.smtp_host || /^(localhost|127\.0\.0\.1)$/i.test(config.smtp_host)) failures.push("a non-local SMTP host is required");
  if (!config.smtp_admin_email) failures.push("SMTP sender address is required");
  if (config.security_captcha_enabled !== true) failures.push("Captcha must be enabled");
  if (!Number.isInteger(config.rate_limit_email_sent) || config.rate_limit_email_sent < 1) failures.push("email rate limit must be a positive integer");
  if (env.AUTH_LEGACY_REGISTER_DISABLED !== "true") failures.push("legacy register Edge Function is not attested disabled");
  return failures;
}

async function loadConfig(env = process.env) {
  if (env.AUTH_CONFIG_FILE) return JSON.parse(await readFile(env.AUTH_CONFIG_FILE, "utf8"));
  const projectRef = env.SUPABASE_PROJECT_REF;
  const token = env.SUPABASE_ACCESS_TOKEN;
  if (!projectRef || !token) throw new Error("SUPABASE_PROJECT_REF and SUPABASE_ACCESS_TOKEN are required");
  const response = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/config/auth`, {
    headers: { Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`Supabase Auth config request failed with HTTP ${response.status}`);
  return response.json();
}

async function main() {
  const config = await loadConfig();
  const failures = validateAuthConfig(config);
  if (failures.length) {
    console.error("Auth release preflight failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
    process.exitCode = 1;
    return;
  }
  console.log("Auth release preflight passed (secrets and addresses intentionally omitted).");
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) await main();
