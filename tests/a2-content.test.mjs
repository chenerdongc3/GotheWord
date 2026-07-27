import assert from "node:assert/strict";
import test from "node:test";
import {
  buildA2Runtime,
  validateA2Content,
} from "../app/content/a2/build-runtime.ts";
import { A2_MANIFEST } from "../app/content/a2/manifest.ts";
import { A2_SOURCE_ENTRIES } from "../app/content/a2/source-entries.ts";
import {
  LevelUnavailableError,
  loadLevelRuntime,
} from "../app/content/runtime.ts";

test("matches the frozen A2 source baseline and content gates", () => {
  assert.equal(A2_SOURCE_ENTRIES.length, 1038);
  assert.equal(A2_MANIFEST.source.pages, 32);
  assert.equal(A2_MANIFEST.source.sha256.length, 64);
  assert.deepEqual(validateA2Content(), []);
});

test("builds an isolated A2 runtime with stable ids and quiz options", () => {
  const runtime = buildA2Runtime();

  assert.equal(runtime.words.length, 1038);
  assert.equal(runtime.validIds.size, runtime.words.length);
  assert.ok(runtime.words.every((word) => word.id.startsWith("a2-")));
  assert.ok(runtime.words.every((word) => word.distractors.length === 3));
  assert.ok(runtime.words.every((word) => word.examples.length >= 1));
});

test("loads the active A2 runtime and keeps B1 publication blocked", async () => {
  const runtime = await loadLevelRuntime("A2");

  assert.equal(runtime.levelId, "A2");
  assert.equal(runtime.contentVersion, A2_MANIFEST.contentVersion);
  assert.equal(runtime.words.length, A2_SOURCE_ENTRIES.length);
  await assert.rejects(
    loadLevelRuntime("B1"),
    (error) =>
      error instanceof LevelUnavailableError && error.levelId === "B1",
  );
});
