import type { SupabaseClient, User } from "@supabase/supabase-js";

export const LEGACY_EMAIL_SUFFIX = "@users.gotheword.local";

export function isLegacyUser(user: Pick<User, "email" | "user_metadata">) {
  return Boolean(user.email?.endsWith(LEGACY_EMAIL_SUFFIX) && user.user_metadata.auth_scheme_version !== 2);
}

function assertSameUser(expected: string, actual?: string) {
  if (actual !== expected) throw new Error("账号身份校验失败，迁移已停止");
}

async function digestLegacyCredential(value: string) {
  const bytes = new TextEncoder().encode(value);
  const hash = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function getLegacyAuthCredentials(username: string, password: string) {
  const normalizedUsername = username.trim();
  const [usernameHash, passwordHash] = await Promise.all([
    digestLegacyCredential(`gotheword:username:${normalizedUsername}`),
    digestLegacyCredential(`gotheword:password:${password}`),
  ]);
  return {
    email: `${usernameHash}${LEGACY_EMAIL_SUFFIX}`,
    password: passwordHash,
  };
}

export async function beginLegacyMigration(client: SupabaseClient, input: {
  userId: string; username: string; currentPassword: string; newEmail: string;
}) {
  const credentials = await getLegacyAuthCredentials(
    input.username,
    input.currentPassword,
  );
  const { data: auth, error: authError } = await client.auth.signInWithPassword(credentials);
  if (authError) throw authError;
  assertSameUser(input.userId, auth.user?.id);
  // Keep the legacy password valid until the new address has been proven.
  const { data, error } = await client.auth.updateUser({ email: input.newEmail.trim().toLowerCase() });
  if (error) throw error;
  assertSameUser(input.userId, data.user.id);
}

export async function completeLegacyMigration(client: SupabaseClient, input: {
  userId: string; newEmail: string; otp: string; newPassword: string;
}) {
  const { data: verified, error: verifyError } = await client.auth.verifyOtp({
    email: input.newEmail.trim().toLowerCase(), token: input.otp.trim(), type: "email_change",
  });
  if (verifyError) throw verifyError;
  assertSameUser(input.userId, verified.user?.id);
  const { data, error } = await client.auth.updateUser({
    password: input.newPassword, data: { auth_scheme_version: 2 },
  });
  if (error) throw error;
  assertSameUser(input.userId, data.user.id);
}
