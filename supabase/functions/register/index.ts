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
    const { error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { username: username.trim() },
    });

    if (error) {
      const status = error.message.includes("already") ? 409 : 400;
      return json({ error: error.message }, status);
    }

    return json({ created: true }, 201);
  } catch {
    return json({ error: "Unable to create user" }, 400);
  }
});
