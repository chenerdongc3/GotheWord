import assert from "node:assert/strict";
import test from "node:test";
import {
  commitLegacyMigration,
  LEGACY_GLOBAL_STORAGE_KEY,
  legacyMigrationMarkerKey,
  markLegacyMigrationDecision,
  readLegacyMigration,
} from "../app/legacyMigration.ts";

function storage(entries = {}) {
  const values = new Map(Object.entries(entries));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
}

const oldState = JSON.stringify({
  version: 1,
  dailyGoal: 5,
  progress: {},
  stats: {},
});

test("does not offer a global legacy state after this account made a choice", () => {
  const userId = "user-b";
  const localStorage = storage({
    [LEGACY_GLOBAL_STORAGE_KEY]: oldState,
    [legacyMigrationMarkerKey(userId)]: "dismissed",
  });

  assert.equal(readLegacyMigration(localStorage, userId), null);
});

test("dismissing a legacy offer only records the decision", () => {
  const localStorage = storage({
    [LEGACY_GLOBAL_STORAGE_KEY]: oldState,
    "gotheword-state-v2:user-b": JSON.stringify({ version: 2, progress: {} }),
  });
  const globalBefore = localStorage.getItem(LEGACY_GLOBAL_STORAGE_KEY);
  const userBefore = localStorage.getItem("gotheword-state-v2:user-b");

  assert.ok(readLegacyMigration(localStorage, "user-b"));
  markLegacyMigrationDecision(localStorage, "user-b", "dismissed");

  assert.equal(localStorage.getItem(LEGACY_GLOBAL_STORAGE_KEY), globalBefore);
  assert.equal(localStorage.getItem("gotheword-state-v2:user-b"), userBefore);
  assert.equal(
    localStorage.getItem(legacyMigrationMarkerKey("user-b")),
    "dismissed",
  );
});

test("offers unclaimed global legacy data independently to a new account", () => {
  const localStorage = storage({ [LEGACY_GLOBAL_STORAGE_KEY]: oldState });

  assert.equal(readLegacyMigration(localStorage, "user-a")?.dailyGoal, 5);
  assert.equal(readLegacyMigration(localStorage, "user-b")?.dailyGoal, 5);
});

test("ignores missing and malformed global legacy data", () => {
  assert.equal(readLegacyMigration(storage(), "user-a"), null);
  assert.equal(
    readLegacyMigration(
      storage({ [LEGACY_GLOBAL_STORAGE_KEY]: "not-json" }),
      "user-a",
    ),
    null,
  );
});

test("keeps legacy data and leaves the migration unmarked when upload fails", async () => {
  const localStorage = storage({ [LEGACY_GLOBAL_STORAGE_KEY]: oldState });

  await assert.rejects(
    commitLegacyMigration({
      storage: localStorage,
      userId: "user-a",
      userStorageKey: "gotheword-state-v2:user-a",
      state: JSON.parse(oldState),
      save: async () => {
        throw new Error("offline");
      },
    }),
    /offline/,
  );

  assert.equal(localStorage.getItem(LEGACY_GLOBAL_STORAGE_KEY), oldState);
  assert.equal(localStorage.getItem(legacyMigrationMarkerKey("user-a")), null);
  assert.equal(localStorage.getItem("gotheword-state-v2:user-a"), null);
});

test("removes legacy data and marks completion only after upload succeeds", async () => {
  const localStorage = storage({ [LEGACY_GLOBAL_STORAGE_KEY]: oldState });
  let uploaded = false;

  await commitLegacyMigration({
    storage: localStorage,
    userId: "user-a",
    userStorageKey: "gotheword-state-v2:user-a",
    state: JSON.parse(oldState),
    save: async () => {
      uploaded = true;
    },
  });

  assert.equal(uploaded, true);
  assert.equal(localStorage.getItem(LEGACY_GLOBAL_STORAGE_KEY), null);
  assert.equal(localStorage.getItem(legacyMigrationMarkerKey("user-a")), "imported");
  assert.ok(localStorage.getItem("gotheword-state-v2:user-a"));
});
