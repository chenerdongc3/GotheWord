import assert from "node:assert/strict";
import test from "node:test";
import {
  buildB1Runtime,
  validateB1Content,
} from "../app/content/b1/build-runtime.ts";
import {
  B1_MANIFEST,
  B1_SOURCE_BASELINE,
} from "../app/content/b1/manifest.ts";
import { B1_SOURCE_ENTRIES } from "../app/content/b1/source-entries.ts";
import { loadLevelRuntime } from "../app/content/runtime.ts";

test("matches the frozen Goethe B1 source baseline and content gates", () => {
  assert.equal(B1_SOURCE_ENTRIES.length, B1_SOURCE_BASELINE.totalRows);
  assert.equal(B1_MANIFEST.source.pages, 104);
  assert.equal(B1_MANIFEST.source.bytes, 475500);
  assert.equal(B1_MANIFEST.source.sha256.length, 64);
  assert.equal(B1_MANIFEST.rights.sourceList, "pending");
  assert.deepEqual(validateB1Content(), []);
});

test("builds an isolated B1 runtime with stable ids and quiz options", () => {
  const runtime = buildB1Runtime();

  assert.equal(runtime.words.length, B1_SOURCE_BASELINE.totalRows);
  assert.equal(runtime.validIds.size, runtime.words.length);
  assert.ok(runtime.words.every((word) => word.id.startsWith("b1-")));
  assert.ok(runtime.words.every((word) => word.distractors.length === 3));
  assert.ok(runtime.words.every((word) => word.examples.length >= 1));
});

test("loads B1 without treating local readiness as publication approval", async () => {
  const runtime = await loadLevelRuntime("B1");

  assert.equal(runtime.levelId, "B1");
  assert.equal(runtime.contentVersion, B1_MANIFEST.contentVersion);
  assert.equal(runtime.words.length, B1_SOURCE_ENTRIES.length);
  assert.equal(B1_MANIFEST.rights.sourceList, "pending");
});
