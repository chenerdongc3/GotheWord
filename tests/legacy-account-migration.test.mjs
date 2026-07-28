import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("migration preserves user id and changes password only after new-email OTP", async () => {
  const source = await readFile(new URL("../app/legacy-account-migration.ts", import.meta.url), "utf8");
  assert.match(source, /signInWithPassword\(credentials\)/);
  assert.match(source, /type: "email_change"/);
  assert.ok(source.indexOf("email: input.newEmail") < source.indexOf("verifyOtp"));
  assert.ok(source.indexOf("verifyOtp") < source.indexOf("password: input.newPassword"));
  assert.equal((source.match(/assertSameUser\(input\.userId/g) ?? []).length, 4);
  assert.doesNotMatch(source, /admin\.|email_confirm|learning_states/);
});
