import assert from "node:assert/strict";
import test from "node:test";
import { validateAuthConfig } from "../scripts/auth-release-preflight.mjs";

const valid = {
  site_url: "https://chenerdongc3.github.io/GotheWord/",
  uri_allow_list: ["https://chenerdongc3.github.io/GotheWord/"],
  mailer_autoconfirm: false,
  disable_signup: false,
  external_email_enabled: true,
  smtp_host: "smtp.example.test",
  smtp_admin_email: "accounts@example.test",
  mailer_templates_confirmation_content: "<p>{{ .Token }}</p>",
  mailer_templates_recovery_content: "<p>{{ .Token }}</p>",
  mailer_templates_email_change_content: "<p>{{ .Token }}</p>",
  security_captcha_enabled: true,
  rate_limit_email_sent: 4,
};
const env = {
  AUTH_EXPECTED_SITE_URL: valid.site_url,
  AUTH_EXPECTED_REDIRECT_URLS: valid.site_url,
  AUTH_LEGACY_REGISTER_DISABLED: "true",
};

test("accepts an exact Pages URL and hardened email auth configuration", () => {
  assert.deepEqual(validateAuthConfig(valid, env), []);
});

test("rejects autoconfirm, wildcard redirects, missing controls, and legacy registration", () => {
  const failures = validateAuthConfig({
    ...valid,
    site_url: "https://chenerdongc3.github.io/",
    uri_allow_list: ["https://chenerdongc3.github.io/**"],
    mailer_autoconfirm: true,
    smtp_host: "localhost",
    mailer_templates_confirmation_content: "<a href=\"{{ .ConfirmationURL }}\">Confirm</a>",
    mailer_templates_recovery_content: "",
    security_captcha_enabled: false,
    rate_limit_email_sent: 0,
  }, { ...env, AUTH_LEGACY_REGISTER_DISABLED: "false" });
  assert.ok(failures.length >= 11);
  assert.ok(failures.includes("confirmation email template must include the six-digit OTP token"));
  assert.ok(failures.includes("confirmation email template must not contain an action link"));
  assert.ok(failures.includes("recovery email template must include the six-digit OTP token"));
});
