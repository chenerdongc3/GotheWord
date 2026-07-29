import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabasePublishableKey,
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabasePublishableKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    })
  : null;

async function digest(value: string) {
  const bytes = new TextEncoder().encode(value);
  const hash = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function getAuthCredentials(username: string, password: string) {
  const normalizedUsername = username.trim();
  const [usernameHash, passwordHash] = await Promise.all([
    digest(`gotheword:username:${normalizedUsername}`),
    digest(`gotheword:password:${password}`),
  ]);

  return {
    username: normalizedUsername,
    email: `${usernameHash}@users.gotheword.local`,
    password: passwordHash,
  };
}
