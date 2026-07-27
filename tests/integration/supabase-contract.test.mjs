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

test("client loads by user and saves through the authenticated CAS function", async () => {
  const [client, revisionSql] = await Promise.all([
    readFile(new URL("../../app/learning-state-api.ts", import.meta.url), "utf8"),
    readFile(
      new URL(
        "../../supabase/migrations/20260726100000_add_learning_state_revision.sql",
        import.meta.url,
      ),
      "utf8",
    ),
  ]);

  assert.match(client, /\.eq\("user_id", userId\)/);
  assert.match(client, /\.rpc\("save_learning_state", \{/);
  assert.match(client, /expected_revision: expectedRevision/);
  assert.match(client, /throw new LearningStateConflictError\(\)/);
  assert.match(revisionSql, /current_user_id uuid := auth\.uid\(\)/);
  assert.match(revisionSql, /learning_state\.revision = expected_revision/);
  assert.match(revisionSql, /grant execute on function public\.save_learning_state/);
  assert.match(revisionSql, /revoke insert, update, delete on public\.learning_states/);
});
