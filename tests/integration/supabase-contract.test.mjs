import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const migrationUrl = new URL(
  "../../supabase/migrations/20260726000000_create_learning_states.sql",
  import.meta.url,
);

test("learning state migration enables RLS for every write path", async () => {
  const sql = await readFile(migrationUrl, "utf8");

  assert.match(sql, /alter table public\.learning_states enable row level security/i);
  for (const operation of ["select", "insert", "update", "delete"]) {
    assert.match(sql, new RegExp(`for ${operation}\\b`, "i"));
  }
  assert.equal((sql.match(/auth\.uid\(\)\) = user_id/g) ?? []).length, 5);
  assert.match(sql, /user_id uuid primary key references auth\.users\(id\)/i);
});

test("client saves with a user-scoped upsert and propagates conflicts", async () => {
  const client = await readFile(new URL("../../app/supabase.ts", import.meta.url), "utf8");

  assert.match(client, /\.eq\("user_id", userId\)/);
  assert.match(client, /\.from\("learning_states"\)\.upsert\(\{/);
  assert.match(client, /user_id: userId/);
  assert.match(client, /if \(error\) throw error/);
});
