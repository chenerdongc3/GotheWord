import assert from "node:assert/strict";
import test from "node:test";
import {
  buildA1Runtime,
  buildCoverageReport,
  validateA1Content,
} from "../app/content/a1/build-runtime.ts";
import {
  GOETHE_ALPHABETICAL_ENTRIES,
  GOETHE_WORD_GROUP_ENTRIES,
} from "../app/content/a1/goethe-entries.ts";
import { LEGACY_STABLE_IDS } from "../app/content/a1/legacy-id-map.ts";
import { A1_MANIFEST } from "../app/content/a1/manifest.ts";
import { A1_WORD_GROUPS } from "../app/content/a1/taxonomy.ts";

test("matches the frozen adult A1 source baseline and all content gates", () => {
  const report = buildCoverageReport();

  assert.deepEqual(validateA1Content(), []);
  assert.equal(A1_MANIFEST.source.sha256.length, 64);
  assert.equal(GOETHE_ALPHABETICAL_ENTRIES.length, 687);
  assert.equal(
    GOETHE_ALPHABETICAL_ENTRIES.filter((entry) => entry.entryType === "main").length,
    628,
  );
  assert.equal(
    GOETHE_ALPHABETICAL_ENTRIES.filter((entry) => entry.entryType === "derived").length,
    59,
  );
  assert.equal(A1_WORD_GROUPS.length, 13);
  assert.equal(
    new Set(GOETHE_WORD_GROUP_ENTRIES.map((entry) => entry.wordGroupId)).size,
    13,
  );
  assert.equal(report.source.totalRows, report.source.coveredRows);
  assert.equal(report.learning.quizEligible, report.learning.reviewed);
  assert.equal(report.learning.quizEligible, report.learning.runtimeActive);
});

test("keeps all 24 legacy ids and generates three unambiguous distractors", () => {
  const runtime = buildA1Runtime();

  for (const id of LEGACY_STABLE_IDS) assert.ok(runtime.byId.has(id), id);
  for (const word of runtime.words) {
    assert.equal(word.distractors.length, 3, word.id);
    assert.equal(new Set(word.distractorIds).size, 3, word.id);
    assert.equal(
      new Set([word.translation, ...word.distractors]).size,
      4,
      word.id,
    );
    assert.ok(word.examples.length >= 1 && word.examples.length <= 3, word.id);
  }
});
