import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function deploymentEnvironment() {
  const value = Deno.env.get("DEPLOYMENT_ENV");
  return value === "preview" || value === "production" ? value : "local";
}

async function captureSignUpCompleted(userId: string) {
  const projectToken = Deno.env.get("POSTHOG_PROJECT_TOKEN");
  const host = Deno.env.get("POSTHOG_HOST");
  if (!projectToken || !host) return;

  const now = new Date();
  try {
    await fetch(`${host.replace(/\/$/, "")}/i/v0/e/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: projectToken,
        event: "sign_up_completed",
        properties: {
          distinct_id: userId,
          $geoip_disable: true,
          analytics_schema_version: 1,
          app_version: Deno.env.get("APP_VERSION") || "unavailable",
          release_sha: Deno.env.get("RELEASE_SHA") || "unavailable",
          deployment_env: deploymentEnvironment(),
          state_schema_version: 2,
          local_day: now.toISOString().slice(0, 10),
          sites_version: Deno.env.get("SITES_VERSION") || "unavailable",
          supabase_migration:
            Deno.env.get("SUPABASE_MIGRATION") || "unavailable",
          auth_method: "username_password",
          registration_path: "supabase_edge_function",
        },
      }),
      signal: AbortSignal.timeout(2_000),
    });
  } catch {
    // Analytics availability must never change registration success semantics.
  }
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const { email, password, username } = await request.json();
    const validEmail =
      typeof email === "string" &&
      /^[a-f0-9]{64}@users\.gotheword\.local$/.test(email);
    const validPassword =
      typeof password === "string" && /^[a-f0-9]{64}$/.test(password);

    if (!validEmail || !validPassword || typeof username !== "string" || !username.trim()) {
      return json({ error: "Invalid credentials" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { username: username.trim() },
    });

    if (error) {
      const status = error.message.includes("already") ? 409 : 400;
      return json({ error: error.message }, status);
    }

    if (data.user) await captureSignUpCompleted(data.user.id);
    return json({ created: true }, 201);
  } catch {
    return json({ error: "Unable to create user" }, 400);
  }
});
