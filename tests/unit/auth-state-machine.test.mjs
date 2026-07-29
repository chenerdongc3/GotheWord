import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [root, supabaseClient, analytics] = await Promise.all([
  readFile(new URL("../../app/GotheWordRoot.tsx", import.meta.url), "utf8"),
  readFile(new URL("../../app/supabase.ts", import.meta.url), "utf8"),
  readFile(new URL("../../app/analytics.ts", import.meta.url), "utf8"),
]);

test("uses native email/password auth and the complete OTP recovery flow", () => {
  assert.match(root, /auth\.signUp\(/);
  assert.match(root, /auth\.signInWithPassword\(/);
  assert.match(root, /auth\.verifyOtp\(\{[\s\S]*type: "email"/);
  assert.match(root, /auth\.resend\(\{ type: "signup"/);
  assert.match(root, /auth\.resetPasswordForEmail\(/);
  assert.match(root, /type: "recovery"/);
  assert.match(root, /auth\.updateUser\(\{ password \}\)/);
  assert.match(root, /RESEND_COOLDOWN_SECONDS = 60/);
});

test("does not derive synthetic credentials in the browser", () => {
  assert.doesNotMatch(supabaseClient, /crypto\.subtle|users\.gotheword\.local|SHA-256/);
  assert.doesNotMatch(root, /getAuthCredentials|functions\.invoke\("register"/);
});

test("exposes accessible async messages and guards auth secrets from analytics", () => {
  assert.match(root, /role="alert"/);
  assert.match(root, /role="status"/);
  for (const field of ["email", "password", "otp", "token", "provider"]) {
    assert.match(analytics, new RegExp(`"${field}"`));
  }
});
