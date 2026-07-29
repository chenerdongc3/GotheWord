import assert from "node:assert/strict";
import test from "node:test";

import {
  findDuplicateGermanExamples,
  validateBilingualTeachingExample,
} from "../../app/content/example-quality.ts";

test("accepts a contextual example with a separated verb target", () => {
  assert.deepEqual(
    validateBilingualTeachingExample("abfahren", {
      de: "Der Zug fährt um acht Uhr ab.",
      zh: "火车八点出发。",
      target: "fährt|ab",
    }),
    [],
  );
});

test("rejects metalinguistic placeholder examples", () => {
  const issues = validateBilingualTeachingExample("abfahren", {
    de: "Heute lerne ich „abfahren“.",
    zh: "今天我学习“出发”这个词。",
    target: "abfahren",
  });

  assert.ok(
    issues.some((issue) => issue.includes("placeholder German")),
  );
  assert.ok(
    issues.some((issue) => issue.includes("placeholder Chinese")),
  );
  assert.ok(issues.some((issue) => issue.includes("not quoted")));
});

test("rejects a source stem described as a prefix", () => {
  const issues = validateBilingualTeachingExample("all-", {
    de: "Das Präfix All- steht am Anfang des Wortes allgemein.",
    zh: "前缀 All- 位于单词 allgemein 的开头。",
    target: "All-",
  });

  assert.ok(
    issues.some((issue) => issue.includes("placeholder German")),
  );
  assert.ok(
    issues.some((issue) => issue.includes("placeholder Chinese")),
  );
});

test("rejects a target annotation that is absent from the sentence", () => {
  const issues = validateBilingualTeachingExample("gestern", {
    de: "Heute ist das Wetter schön.",
    zh: "今天天气很好。",
    target: "gestern",
  });

  assert.ok(
    issues.some((issue) => issue.includes("does not contain target form")),
  );
});

test("reports a missing target annotation without crashing", () => {
  const issues = validateBilingualTeachingExample("gestern", {
    de: "Gestern war das Wetter schön.",
    zh: "昨天天气很好。",
  });

  assert.ok(issues.some((issue) => issue.includes("must be non-empty")));
});

test("does not accept a target that is only part of another word", () => {
  const issues = validateBilingualTeachingExample("ist", {
    de: "Der Mist liegt auf dem Feld.",
    zh: "粪肥堆在田里。",
    target: "ist",
  });

  assert.ok(
    issues.some((issue) => issue.includes("does not contain target form")),
  );
});

test("finds examples reused by different vocabulary entries", () => {
  assert.deepEqual(
    findDuplicateGermanExamples([
      {
        entryId: "one",
        examples: [
          { de: "Das ist gut.", zh: "这很好。", target: "gut" },
        ],
      },
      {
        entryId: "two",
        examples: [
          { de: "das ist gut.", zh: "这很好。", target: "ist" },
        ],
      },
    ]),
    ['duplicate German example "Das ist gut.": one, two'],
  );
});
