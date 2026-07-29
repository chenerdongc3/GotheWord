import { A1_TOPIC_LABELS } from "../a1/taxonomy.ts";
import {
  findDuplicateGermanExamples,
  validateBilingualTeachingExample,
} from "../example-quality.ts";
import { B1_LEARNING_CONTENT_ZH } from "./learning-content.zh.ts";
import { B1_MANIFEST, B1_SOURCE_BASELINE } from "./manifest.ts";
import { B1_SOURCE_ENTRIES } from "./source-entries.ts";
import type {
  B1CoverageReport,
  B1LearningEntry,
  B1RuntimeManifest,
  B1SourceEntry,
  Word,
} from "./types.ts";

const SOURCE_BY_ID = new Map<string, B1SourceEntry>(
  B1_SOURCE_ENTRIES.map((entry) => [entry.entryId, entry]),
);
const LEARNING_BY_ID = new Map<string, B1LearningEntry>(
  B1_LEARNING_CONTENT_ZH.map((entry) => [entry.entryId, entry]),
);
const TOPIC_PRIORITY = [
  "person",
  "housing",
  "food",
  "travel",
  "shopping",
  "leisure",
  "education",
  "work",
  "services",
  "environment",
] as const;
const PART_OF_SPEECH_PRIORITY = [
  "noun",
  "verb",
  "adjective",
  "adverb",
  "phrase",
  "pronoun",
  "preposition",
  "conjunction",
  "determiner",
  "numeral",
  "particle",
  "other",
] as const;

function priorityIndex(values: readonly string[], value: string) {
  const index = values.indexOf(value);
  return index === -1 ? values.length : index;
}

function uniqueByTranslation(
  candidates: Array<{ author: B1SourceEntry; learning: B1LearningEntry }>,
  excludedId: string,
  excludedTranslation: string,
) {
  const seen = new Set<string>([excludedTranslation]);
  return candidates.filter(({ author, learning }) => {
    const translation = learning.senses[0]?.zh.trim();
    if (author.entryId === excludedId || !translation || seen.has(translation)) {
      return false;
    }
    seen.add(translation);
    return true;
  });
}

function distractorsFor(
  author: B1SourceEntry,
  learning: B1LearningEntry,
  activeEntries: Array<{ author: B1SourceEntry; learning: B1LearningEntry }>,
) {
  const sameTopicAndKind = activeEntries.filter(
    (candidate) =>
      candidate.author.partOfSpeech === author.partOfSpeech &&
      candidate.learning.topicIds.some((topicId) =>
        learning.topicIds.includes(topicId),
      ),
  );
  const sameKind = activeEntries.filter(
    (candidate) => candidate.author.partOfSpeech === author.partOfSpeech,
  );
  return uniqueByTranslation(
    [...sameTopicAndKind, ...sameKind, ...activeEntries],
    author.entryId,
    learning.senses[0].zh,
  ).slice(0, 3);
}

export function buildB1Runtime() {
  const activeEntries = B1_LEARNING_CONTENT_ZH
    .filter((learning) => learning.active)
    .map((learning) => ({
      learning,
      author: SOURCE_BY_ID.get(learning.entryId),
    }))
    .filter(
      (
        item,
      ): item is {
        learning: B1LearningEntry;
        author: B1SourceEntry;
      } => Boolean(item.author),
    )
    .sort((left, right) => {
      const topicDifference =
        priorityIndex(TOPIC_PRIORITY, left.learning.topicIds[0]) -
        priorityIndex(TOPIC_PRIORITY, right.learning.topicIds[0]);
      if (topicDifference) return topicDifference;
      const partOfSpeechDifference =
        priorityIndex(
          PART_OF_SPEECH_PRIORITY,
          left.author.partOfSpeech,
        ) -
        priorityIndex(
          PART_OF_SPEECH_PRIORITY,
          right.author.partOfSpeech,
        );
      if (partOfSpeechDifference) return partOfSpeechDifference;
      return left.author.source.order - right.author.source.order;
    });

  const words = activeEntries.map(({ author, learning }) => {
    const distractors = distractorsFor(author, learning, activeEntries);
    return {
      id: author.entryId,
      german: author.display,
      translation: learning.senses[0].zh,
      kind: author.partOfSpeech,
      ...(author.article ? { article: author.article } : {}),
      ...(author.plural ? { plural: author.plural } : {}),
      topic: A1_TOPIC_LABELS[learning.topicIds[0]],
      topicIds: [...learning.topicIds],
      distractors: distractors.map(({ learning: item }) => item.senses[0].zh),
      distractorIds: distractors.map(({ author: item }) => item.entryId),
      examples: learning.examples.map(({ de, zh }) => ({ de, zh })),
      sourceEntryType: author.entryType,
    } satisfies Word;
  });

  return {
    words,
    byId: new Map(words.map((word) => [word.id, word])),
    validIds: new Set(words.map((word) => word.id)),
  };
}

function duplicates(values: string[]) {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}

export function validateB1Content() {
  const issues: string[] = [];
  const sourceIds = B1_SOURCE_ENTRIES.map((entry) => entry.entryId);
  const learningIds = B1_LEARNING_CONTENT_ZH.map((entry) => entry.entryId);

  if (B1_SOURCE_ENTRIES.length !== B1_SOURCE_BASELINE.totalRows) {
    issues.push(
      `source baseline drift: expected ${B1_SOURCE_BASELINE.totalRows}, got ${B1_SOURCE_ENTRIES.length}`,
    );
  }
  for (const duplicate of duplicates(sourceIds)) {
    issues.push(`duplicate source entryId: ${duplicate}`);
  }
  for (const duplicate of duplicates(learningIds)) {
    issues.push(`duplicate learning entryId: ${duplicate}`);
  }
  for (const id of sourceIds) {
    if (!LEARNING_BY_ID.has(id)) issues.push(`${id}: missing learning content`);
  }
  for (const id of learningIds) {
    if (!SOURCE_BY_ID.has(id)) {
      issues.push(`${id}: learning entry has no source entry`);
    }
  }

  const orders = B1_LEARNING_CONTENT_ZH
    .filter((entry) => entry.active)
    .map((entry) => entry.teachingOrder)
    .sort((left, right) => left - right);
  for (let index = 0; index < orders.length; index += 1) {
    if (orders[index] !== index + 1) {
      issues.push(
        `teachingOrder must be continuous: expected ${index + 1}, got ${orders[index]}`,
      );
      break;
    }
  }

  for (const source of B1_SOURCE_ENTRIES) {
    if (!source.lemma.trim() || !source.sourceDisplay.trim()) {
      issues.push(`${source.entryId}: missing source text`);
    }
    if (
      source.source.page !== null &&
      (source.source.page < 8 || source.source.page > B1_MANIFEST.source.pages)
    ) {
      issues.push(`${source.entryId}: source page is outside the frozen PDF`);
    }
  }
  for (const learning of B1_LEARNING_CONTENT_ZH) {
    if (!learning.senses[0]?.zh.trim()) {
      issues.push(`${learning.entryId}: missing Chinese sense`);
    }
    if (learning.examples.length < 1 || learning.examples.length > 3) {
      issues.push(`${learning.entryId}: examples must contain 1..3 pairs`);
    }
    if (learning.reviewStatus === "reviewed") {
      for (const example of learning.examples) {
        issues.push(
          ...validateBilingualTeachingExample(learning.entryId, example),
        );
      }
    }
  }
  issues.push(
    ...findDuplicateGermanExamples(
      B1_LEARNING_CONTENT_ZH.filter(
        (learning) => learning.reviewStatus === "reviewed",
      ),
    ),
  );

  const runtime = buildB1Runtime();
  for (const word of runtime.words) {
    if (!word.id.startsWith("b1-")) {
      issues.push(`${word.id}: B1 runtime id must use the b1- prefix`);
    }
    if (word.distractors.length !== 3 || word.distractorIds.length !== 3) {
      issues.push(`${word.id}: expected 3 distractors`);
    }
    if (
      new Set([word.translation, ...word.distractors]).size !==
      word.distractors.length + 1
    ) {
      issues.push(`${word.id}: duplicate Chinese answer display`);
    }
  }

  return issues;
}

function countBy(values: string[]) {
  return Object.fromEntries(
    values.reduce((counts, value) => {
      counts.set(value, (counts.get(value) ?? 0) + 1);
      return counts;
    }, new Map<string, number>()),
  );
}

export function buildB1CoverageReport(
  artifact: Partial<B1CoverageReport["artifact"]> = {},
): B1CoverageReport {
  const runtime = buildB1Runtime();
  return {
    schemaVersion: 1,
    generatedAt: B1_MANIFEST.contentVersion,
    manifest: B1_MANIFEST,
    source: {
      totalRows: B1_SOURCE_ENTRIES.length,
      main: B1_SOURCE_ENTRIES.filter((entry) => entry.entryType === "main").length,
      derived: B1_SOURCE_ENTRIES.filter(
        (entry) => entry.entryType === "derived",
      ).length,
      wordGroupMembers: B1_SOURCE_ENTRIES.filter(
        (entry) => entry.entryType === "word-group-member",
      ).length,
      rowsWithVerifiedPage: B1_SOURCE_ENTRIES.filter(
        (entry) => entry.source.page !== null,
      ).length,
    },
    learning: {
      total: B1_LEARNING_CONTENT_ZH.length,
      runtimeActive: runtime.words.length,
      reviewed: B1_LEARNING_CONTENT_ZH.filter(
        (entry) => entry.reviewStatus === "reviewed",
      ).length,
      machineDraft: B1_LEARNING_CONTENT_ZH.filter(
        (entry) => entry.reviewStatus === "machine-draft",
      ).length,
    },
    distributions: {
      partOfSpeech: countBy(runtime.words.map((word) => word.kind)),
      topic: countBy(B1_LEARNING_CONTENT_ZH.flatMap((entry) => entry.topicIds)),
      entryType: countBy(B1_SOURCE_ENTRIES.map((entry) => entry.entryType)),
    },
    artifact: {
      generatedRuntimeBytes: artifact.generatedRuntimeBytes ?? 0,
      gzipBytes: artifact.gzipBytes ?? 0,
      brotliBytes: artifact.brotliBytes ?? 0,
      chunks: artifact.chunks ?? [],
      initialHtmlIncludesRuntime: artifact.initialHtmlIncludesRuntime ?? null,
    },
  };
}

export function serializeB1RuntimeModule() {
  const runtime = buildB1Runtime();
  const literal = (value: unknown) => JSON.stringify(value, null, 2);
  const chunks = Array.from(
    { length: Math.ceil(runtime.words.length / 100) },
    (_, index) => runtime.words.slice(index * 100, (index + 1) * 100),
  );
  return `import type { B1RuntimeManifest, Word } from "../types.ts";

export const B1_MANIFEST = ${literal(B1_MANIFEST)} as const satisfies B1RuntimeManifest;

const B1_WORD_CHUNKS: readonly (readonly Word[])[] = ${literal(chunks)};

export const B1_WORDS: readonly Word[] = B1_WORD_CHUNKS.flat();

export const B1_BY_ID = new Map<string, Word>(
  B1_WORDS.map((word) => [word.id, word]),
);

export const B1_VALID_IDS = new Set<string>(B1_WORDS.map((word) => word.id));

export function getDisplayWord(word: Word) {
  return word.article ? \`\${word.article} \${word.german}\` : word.german;
}

export const B1_CONTENT = {
  manifest: B1_MANIFEST,
  words: B1_WORDS,
  byId: B1_BY_ID,
} as const;

export type { Word } from "../types.ts";
`;
}

export type { B1RuntimeManifest };
