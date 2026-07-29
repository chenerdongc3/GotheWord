import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("production Auth policy requires confirmation, OTP, SMTP, limits and CAPTCHA", async () => {
  const config = await read("supabase/config.toml");
  assert.match(config, /enable_confirmations = true/);
  assert.match(config, /otp_length = 6/);
  assert.match(config, /otp_expiry = 600/);
  assert.match(config, /max_frequency = "60s"/);
  assert.match(config, /\[auth\.rate_limit\][\s\S]*email_sent = 2/);
  assert.match(config, /\[auth\.email\.smtp\][\s\S]*enabled = true/);
  assert.match(config, /\[auth\.captcha\][\s\S]*provider = "turnstile"/);
  assert.doesNotMatch(config, /localhost|SUPABASE_SERVICE_ROLE_KEY/);
});

test("Auth templates use OTP tokens rather than action links", async () => {
  for (const name of ["confirmation", "recovery", "email-change"]) {
    const template = await read(`supabase/templates/${name}.html`);
    assert.match(template, /\{\{ \.Token \}\}/);
    assert.doesNotMatch(template, /ConfirmationURL|TokenHash|localhost/);
  }
});

test("legacy register function is permanently fail-closed", async () => {
  const source = await read("supabase/functions/register/index.ts");
  assert.match(source, /legacy_registration_disabled/);
  assert.match(source, /410/);
  assert.doesNotMatch(source, /createUser|email_confirm|SERVICE_ROLE/);
});
