import { A1_TOPIC_LABELS } from "../a1/taxonomy.ts";
import { A2_LEARNING_CONTENT_ZH } from "./learning-content.zh.ts";
import { A2_MANIFEST, A2_SOURCE_BASELINE } from "./manifest.ts";
import { A2_SOURCE_ENTRIES } from "./source-entries.ts";
import type {
  A2CoverageReport,
  A2LearningEntry,
  A2RuntimeManifest,
  A2SourceEntry,
  Word,
} from "./types.ts";

const SOURCE_BY_ID = new Map<string, A2SourceEntry>(
  A2_SOURCE_ENTRIES.map((entry) => [entry.entryId, entry]),
);
const LEARNING_BY_ID = new Map<string, A2LearningEntry>(
  A2_LEARNING_CONTENT_ZH.map((entry) => [entry.entryId, entry]),
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
  candidates: Array<{ author: A2SourceEntry; learning: A2LearningEntry }>,
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
  author: A2SourceEntry,
  learning: A2LearningEntry,
  activeEntries: Array<{ author: A2SourceEntry; learning: A2LearningEntry }>,
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
  const candidates = uniqueByTranslation(
    [...sameTopicAndKind, ...sameKind, ...activeEntries],
    author.entryId,
    learning.senses[0].zh,
  );
  return candidates.slice(0, 3);
}

export function buildA2Runtime() {
  const activeEntries = A2_LEARNING_CONTENT_ZH
    .filter((learning) => learning.active)
    .map((learning) => ({
      learning,
      author: SOURCE_BY_ID.get(learning.entryId),
    }))
    .filter(
      (
        item,
      ): item is {
        learning: A2LearningEntry;
        author: A2SourceEntry;
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
      examples: learning.examples.map((example) => ({ ...example })),
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

export function validateA2Content() {
  const issues: string[] = [];
  const sourceIds = A2_SOURCE_ENTRIES.map((entry) => entry.entryId);
  const learningIds = A2_LEARNING_CONTENT_ZH.map((entry) => entry.entryId);

  if (A2_SOURCE_ENTRIES.length !== A2_SOURCE_BASELINE.totalRows) {
    issues.push(
      `source baseline drift: expected ${A2_SOURCE_BASELINE.totalRows}, got ${A2_SOURCE_ENTRIES.length}`,
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
    if (!SOURCE_BY_ID.has(id)) issues.push(`${id}: learning entry has no source entry`);
  }

  const orders = A2_LEARNING_CONTENT_ZH
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

  for (const learning of A2_LEARNING_CONTENT_ZH) {
    if (!learning.senses[0]?.zh.trim()) {
      issues.push(`${learning.entryId}: missing Chinese sense`);
    }
    if (learning.examples.length < 1 || learning.examples.length > 3) {
      issues.push(`${learning.entryId}: examples must contain 1..3 pairs`);
    }
  }

  const runtime = buildA2Runtime();
  for (const word of runtime.words) {
    if (!word.id.startsWith("a2-")) {
      issues.push(`${word.id}: A2 runtime id must use the a2- prefix`);
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

export function buildA2CoverageReport(
  artifact: Partial<A2CoverageReport["artifact"]> = {},
): A2CoverageReport {
  const runtime = buildA2Runtime();
  return {
    schemaVersion: 1,
    generatedAt: A2_MANIFEST.contentVersion,
    manifest: A2_MANIFEST,
    source: {
      totalRows: A2_SOURCE_ENTRIES.length,
      main: A2_SOURCE_ENTRIES.filter((entry) => entry.entryType === "main").length,
      derived: A2_SOURCE_ENTRIES.filter(
        (entry) => entry.entryType === "derived",
      ).length,
      wordGroupMembers: A2_SOURCE_ENTRIES.filter(
        (entry) => entry.entryType === "word-group-member",
      ).length,
    },
    learning: {
      total: A2_LEARNING_CONTENT_ZH.length,
      runtimeActive: runtime.words.length,
      reviewed: A2_LEARNING_CONTENT_ZH.filter(
        (entry) => entry.reviewStatus === "reviewed",
      ).length,
      machineDraft: A2_LEARNING_CONTENT_ZH.filter(
        (entry) => entry.reviewStatus === "machine-draft",
      ).length,
    },
    distributions: {
      partOfSpeech: countBy(runtime.words.map((word) => word.kind)),
      topic: countBy(A2_LEARNING_CONTENT_ZH.flatMap((entry) => entry.topicIds)),
      entryType: countBy(A2_SOURCE_ENTRIES.map((entry) => entry.entryType)),
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

export function serializeA2RuntimeModule() {
  const runtime = buildA2Runtime();
  const literal = (value: unknown) => JSON.stringify(value, null, 2);
  return `import type { A2RuntimeManifest, Word } from "../types.ts";

export const A2_MANIFEST = ${literal(A2_MANIFEST)} as const satisfies A2RuntimeManifest;

export const A2_WORDS = ${literal(runtime.words)} as const satisfies readonly Word[];

export const A2_BY_ID = new Map<string, Word>(
  A2_WORDS.map((word) => [word.id, word]),
);

export const A2_VALID_IDS = new Set<string>(A2_WORDS.map((word) => word.id));

export function getDisplayWord(word: Word) {
  return word.article ? \`\${word.article} \${word.german}\` : word.german;
}

export const A2_CONTENT = {
  manifest: A2_MANIFEST,
  words: A2_WORDS,
  byId: A2_BY_ID,
} as const;

export type { Word } from "../types.ts";
`;
}

export type { A2RuntimeManifest };
