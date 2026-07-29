import {
  GOETHE_ALPHABETICAL_ENTRIES,
  GOETHE_ENTRIES,
  GOETHE_WORD_GROUP_ENTRIES,
  PROJECT_EXTENSION_ENTRIES,
} from "./goethe-entries.ts";
import { A1_LEARNING_CONTENT_ZH } from "./learning-content.zh.ts";
import { LEGACY_ID_MAP, LEGACY_STABLE_IDS } from "./legacy-id-map.ts";
import { A1_MANIFEST, A1_SOURCE_BASELINE } from "./manifest.ts";
import {
  A1_TOPIC_LABELS,
  A1_TOPICS,
  A1_WORD_GROUPS,
} from "./taxonomy.ts";
import type {
  A1CoverageReport,
  A1LearningEntry,
  A1SourceEntry,
  PartOfSpeech,
  Word,
} from "./types.ts";
import {
  findDuplicateGermanExamples,
  validateBilingualTeachingExample,
} from "../example-quality.ts";

type AuthorEntry =
  | A1SourceEntry
  | (typeof PROJECT_EXTENSION_ENTRIES)[number];

type RuntimeBuild = {
  words: Word[];
  byId: Map<string, Word>;
  validIds: Set<string>;
};

const SOURCE_BY_ID = new Map(
  GOETHE_ENTRIES.map((entry) => [entry.entryId, entry]),
);
const EXTENSION_BY_ID = new Map(
  PROJECT_EXTENSION_ENTRIES.map((entry) => [entry.entryId, entry]),
);
const AUTHOR_BY_ID = new Map<string, AuthorEntry>([
  ...SOURCE_BY_ID,
  ...EXTENSION_BY_ID,
]);
const LEARNING_BY_ID = new Map<string, A1LearningEntry>(
  A1_LEARNING_CONTENT_ZH.map((entry) => [entry.entryId, entry]),
);

function sourceEntryType(entry: AuthorEntry): Word["sourceEntryType"] {
  return "entryType" in entry ? entry.entryType : "project-extension";
}

function pickDistractors(
  entry: AuthorEntry,
  learning: A1LearningEntry,
  activeEntries: Array<{ author: AuthorEntry; learning: A1LearningEntry }>,
) {
  const correctTranslation = learning.senses[0].zh;
  const selected: Array<{ id: string; translation: string }> = [];
  const seenTranslations = new Set([correctTranslation]);
  const overrideIds = learning.distractorOverrides ?? [];

  const add = (candidate?: { author: AuthorEntry; learning: A1LearningEntry }) => {
    if (!candidate || candidate.author.entryId === entry.entryId) return;
    const translation = candidate.learning.senses[0].zh;
    if (seenTranslations.has(translation)) return;
    seenTranslations.add(translation);
    selected.push({ id: candidate.author.entryId, translation });
  };

  for (const overrideId of overrideIds) {
    add(activeEntries.find((candidate) => candidate.author.entryId === overrideId));
  }

  const pools = [
    activeEntries.filter(
      (candidate) =>
        candidate.author.partOfSpeech === entry.partOfSpeech &&
        candidate.learning.topicIds.some((topicId) =>
          learning.topicIds.includes(topicId),
        ),
    ),
    activeEntries.filter(
      (candidate) => candidate.author.partOfSpeech === entry.partOfSpeech,
    ),
    activeEntries,
  ];

  for (const pool of pools) {
    for (const candidate of pool) {
      add(candidate);
      if (selected.length === 3) return selected;
    }
  }
  return selected;
}

export function buildA1Runtime(): RuntimeBuild {
  const activeEntries = A1_LEARNING_CONTENT_ZH
    .filter((learning) => learning.active && !learning.nonQuizReason)
    .map((learning) => ({
      author: AUTHOR_BY_ID.get(learning.entryId),
      learning,
    }))
    .filter(
      (
        item,
      ): item is {
        author: AuthorEntry;
        learning: A1LearningEntry;
      } => Boolean(item.author),
    )
    .sort(
      (left, right) =>
        left.learning.teachingOrder - right.learning.teachingOrder,
    );

  const words = activeEntries.map(({ author, learning }) => {
    const distractors = pickDistractors(author, learning, activeEntries);
    return {
      id: author.entryId,
      german: author.display,
      translation: learning.senses[0].zh,
      kind: author.partOfSpeech,
      ...("article" in author && author.article
        ? { article: author.article }
        : {}),
      ...("plural" in author && author.plural
        ? { plural: author.plural }
        : {}),
      topic: A1_TOPIC_LABELS[learning.topicIds[0]],
      topicIds: [...learning.topicIds],
      distractors: distractors.map((candidate) => candidate.translation),
      distractorIds: distractors.map((candidate) => candidate.id),
      examples: learning.examples.map(({ de, zh }) => ({ de, zh })),
      sourceEntryType: sourceEntryType(author),
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

function isQuizEligible(learning: A1LearningEntry) {
  return learning.active && !learning.nonQuizReason;
}

export function validateA1Content() {
  const issues: string[] = [];
  const sourceIds = GOETHE_ENTRIES.map((entry) => entry.entryId);
  const authorIds = [
    ...sourceIds,
    ...PROJECT_EXTENSION_ENTRIES.map((entry) => entry.entryId),
  ];
  const learningIds = A1_LEARNING_CONTENT_ZH.map((entry) => entry.entryId);
  const sourceIdSet = new Set(sourceIds);
  const authorIdSet = new Set(authorIds);
  const topicIds = new Set(A1_TOPICS.map((topic) => topic.id));
  const wordGroupIds = new Set(A1_WORD_GROUPS.map((group) => group.id));

  for (const duplicate of duplicates(authorIds)) {
    issues.push(`duplicate author entryId: ${duplicate}`);
  }
  for (const duplicate of duplicates(learningIds)) {
    issues.push(`duplicate learning entryId: ${duplicate}`);
  }

  if (
    GOETHE_ALPHABETICAL_ENTRIES.length !==
    A1_SOURCE_BASELINE.alphabetical.total
  ) {
    issues.push(
      `alphabetical baseline drift: expected ${A1_SOURCE_BASELINE.alphabetical.total}, got ${GOETHE_ALPHABETICAL_ENTRIES.length}`,
    );
  }
  const mainCount = GOETHE_ALPHABETICAL_ENTRIES.filter(
    (entry) => entry.entryType === "main",
  ).length;
  const derivedCount = GOETHE_ALPHABETICAL_ENTRIES.filter(
    (entry) => entry.entryType === "derived",
  ).length;
  if (mainCount !== A1_SOURCE_BASELINE.alphabetical.main) {
    issues.push(
      `main entry baseline drift: expected ${A1_SOURCE_BASELINE.alphabetical.main}, got ${mainCount}`,
    );
  }
  if (derivedCount !== A1_SOURCE_BASELINE.alphabetical.derived) {
    issues.push(
      `derived entry baseline drift: expected ${A1_SOURCE_BASELINE.alphabetical.derived}, got ${derivedCount}`,
    );
  }
  if (A1_TOPICS.length !== A1_SOURCE_BASELINE.topics) {
    issues.push(
      `topic taxonomy drift: expected ${A1_SOURCE_BASELINE.topics}, got ${A1_TOPICS.length}`,
    );
  }
  if (A1_WORD_GROUPS.length !== A1_SOURCE_BASELINE.wordGroups) {
    issues.push(
      `word-group taxonomy drift: expected ${A1_SOURCE_BASELINE.wordGroups}, got ${A1_WORD_GROUPS.length}`,
    );
  }

  for (const entry of GOETHE_ENTRIES) {
    if (entry.parentId && !sourceIdSet.has(entry.parentId)) {
      issues.push(`${entry.entryId}: missing parent ${entry.parentId}`);
    }
    if (entry.entryType === "derived" && !entry.parentId) {
      issues.push(`${entry.entryId}: derived entry has no parent`);
    }
    if (
      (entry.entryType === "word-group-member" ||
        entry.entryType === "word-group-pattern") &&
      (!entry.wordGroupId || !wordGroupIds.has(entry.wordGroupId))
    ) {
      issues.push(`${entry.entryId}: invalid word group`);
    }
    if (entry.partOfSpeech !== "noun" && entry.article) {
      issues.push(`${entry.entryId}: non-noun has article`);
    }
  }

  for (const id of authorIds) {
    if (!LEARNING_BY_ID.has(id)) issues.push(`${id}: missing learning content`);
  }
  for (const id of learningIds) {
    if (!authorIdSet.has(id)) issues.push(`${id}: learning entry has no author entry`);
  }

  const quizEntries = A1_LEARNING_CONTENT_ZH.filter(isQuizEligible);
  const quizOrders = quizEntries
    .map((entry) => entry.teachingOrder)
    .sort((left, right) => left - right);
  for (let index = 0; index < quizOrders.length; index += 1) {
    if (quizOrders[index] !== index + 1) {
      issues.push(
        `teachingOrder must be continuous for quiz entries: expected ${index + 1}, got ${quizOrders[index]}`,
      );
      break;
    }
  }

  for (const learning of A1_LEARNING_CONTENT_ZH) {
    if (!learning.topicIds.length) {
      issues.push(`${learning.entryId}: missing topic`);
    }
    for (const topicId of learning.topicIds) {
      if (!topicIds.has(topicId)) {
        issues.push(`${learning.entryId}: invalid topic ${topicId}`);
      }
    }
    if (isQuizEligible(learning)) {
      if (learning.reviewStatus !== "reviewed") {
        issues.push(`${learning.entryId}: quiz entry is not reviewed`);
      }
      if (!learning.senses.length || !learning.senses[0].zh.trim()) {
        issues.push(`${learning.entryId}: missing Chinese sense`);
      }
      if (learning.examples.length < 1 || learning.examples.length > 3) {
        issues.push(`${learning.entryId}: examples must contain 1..3 pairs`);
      }
      for (const example of learning.examples) {
        if (!example.de.trim() || !example.zh.trim()) {
          issues.push(`${learning.entryId}: empty bilingual example`);
        }
        issues.push(
          ...validateBilingualTeachingExample(learning.entryId, example),
        );
      }
    }
    if (learning.nonQuizReason) {
      const source = SOURCE_BY_ID.get(learning.entryId);
      if (!source?.parentId) {
        issues.push(`${learning.entryId}: non-quiz entry has no source parent`);
      }
    }
  }
  issues.push(...findDuplicateGermanExamples(A1_LEARNING_CONTENT_ZH));

  const runtime = buildA1Runtime();
  for (const word of runtime.words) {
    if (word.distractors.length !== 3 || word.distractorIds.length !== 3) {
      issues.push(`${word.id}: expected 3 distractors`);
    }
    if (new Set(word.distractorIds).size !== word.distractorIds.length) {
      issues.push(`${word.id}: duplicate distractor ids`);
    }
    if (
      new Set([word.translation, ...word.distractors]).size !==
      word.distractors.length + 1
    ) {
      issues.push(`${word.id}: duplicate Chinese answer display`);
    }
  }

  for (const legacyId of LEGACY_STABLE_IDS) {
    const resolved = LEGACY_ID_MAP[legacyId] ?? legacyId;
    if (!runtime.validIds.has(resolved)) {
      issues.push(`${legacyId}: legacy id does not resolve to runtime content`);
    }
  }

  const sourceOrder = GOETHE_ALPHABETICAL_ENTRIES.map((entry) => entry.entryId);
  const teachingOrder = quizEntries
    .slice()
    .sort((left, right) => left.teachingOrder - right.teachingOrder)
    .map((entry) => entry.entryId);
  if (
    sourceOrder.slice(0, 20).every((entryId, index) => entryId === teachingOrder[index])
  ) {
    issues.push("teaching order must not reuse the PDF alphabetical order");
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

export function buildCoverageReport(
  artifact: Partial<A1CoverageReport["artifact"]> = {},
): A1CoverageReport {
  const runtime = buildA1Runtime();
  const quizEntries = A1_LEARNING_CONTENT_ZH.filter(isQuizEligible);
  const nonQuizEntries = A1_LEARNING_CONTENT_ZH.filter(
    (entry) => entry.nonQuizReason,
  );
  const memberCount = GOETHE_WORD_GROUP_ENTRIES.filter(
    (entry) => entry.entryType === "word-group-member",
  ).length;
  const patternCount = GOETHE_WORD_GROUP_ENTRIES.length - memberCount;

  return {
    schemaVersion: 1,
    generatedAt: A1_MANIFEST.contentVersion,
    manifest: A1_MANIFEST,
    source: {
      alphabetical: {
        total: GOETHE_ALPHABETICAL_ENTRIES.length,
        main: GOETHE_ALPHABETICAL_ENTRIES.filter(
          (entry) => entry.entryType === "main",
        ).length,
        derived: GOETHE_ALPHABETICAL_ENTRIES.filter(
          (entry) => entry.entryType === "derived",
        ).length,
        covered: GOETHE_ALPHABETICAL_ENTRIES.filter((entry) =>
          LEARNING_BY_ID.has(entry.entryId),
        ).length,
      },
      wordGroups: {
        taxonomy: new Set(
          GOETHE_WORD_GROUP_ENTRIES.map((entry) => entry.wordGroupId),
        ).size,
        expectedTaxonomy: A1_WORD_GROUPS.length,
        totalRows: GOETHE_WORD_GROUP_ENTRIES.length,
        members: memberCount,
        patterns: patternCount,
        covered: GOETHE_WORD_GROUP_ENTRIES.filter((entry) =>
          LEARNING_BY_ID.has(entry.entryId),
        ).length,
      },
      totalRows: GOETHE_ENTRIES.length,
      coveredRows: GOETHE_ENTRIES.filter((entry) =>
        LEARNING_BY_ID.has(entry.entryId),
      ).length,
    },
    learning: {
      total: A1_LEARNING_CONTENT_ZH.length,
      quizEligible: quizEntries.length,
      reviewed: quizEntries.filter(
        (entry) => entry.reviewStatus === "reviewed",
      ).length,
      nonQuiz: nonQuizEntries.length,
      runtimeActive: runtime.words.length,
      projectExtensions: PROJECT_EXTENSION_ENTRIES.length,
    },
    distributions: {
      partOfSpeech: countBy(runtime.words.map((word) => word.kind)),
      topic: countBy(
        A1_LEARNING_CONTENT_ZH.flatMap((entry) => entry.topicIds),
      ),
      entryType: countBy(
        GOETHE_ENTRIES.map((entry) => entry.entryType),
      ),
      nonQuizReason: countBy(
        nonQuizEntries.map((entry) => entry.nonQuizReason!),
      ),
    },
    legacy: {
      stableIds: LEGACY_STABLE_IDS.length,
      mappedIds: Object.keys(LEGACY_ID_MAP).length,
      resolvedIds: LEGACY_STABLE_IDS.filter((id) =>
        runtime.validIds.has(LEGACY_ID_MAP[id] ?? id),
      ).length,
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

export function serializeA1RuntimeModule() {
  const runtime = buildA1Runtime();
  const literal = (value: unknown) => JSON.stringify(value, null, 2);
  return `import type { A1RuntimeManifest, Word } from "../types.ts";

export const A1_MANIFEST = ${literal(A1_MANIFEST)} as const satisfies A1RuntimeManifest;

export const A1_WORDS = ${literal(runtime.words)} as const satisfies readonly Word[];

export const A1_BY_ID = new Map<string, Word>(
  A1_WORDS.map((word) => [word.id, word]),
);

export const A1_VALID_IDS = new Set(A1_WORDS.map((word) => word.id));

export const LEGACY_ID_MAP = ${literal(LEGACY_ID_MAP)} as const;

export function resolveRuntimeWordId(wordId: string) {
  const resolved = LEGACY_ID_MAP[wordId as keyof typeof LEGACY_ID_MAP] ?? wordId;
  return A1_VALID_IDS.has(resolved) ? resolved : undefined;
}

export function getDisplayWord(word: Word) {
  return word.article ? \`\${word.article} \${word.german}\` : word.german;
}

export const A1_CONTENT = {
  manifest: A1_MANIFEST,
  words: A1_WORDS,
  byId: A1_BY_ID,
} as const;

export const PART_OF_SPEECH_LABELS = ${literal(PART_OF_SPEECH_LABELS)} as const;

export type { Word } from "../types.ts";
`;
}

export const PART_OF_SPEECH_LABELS = {
  noun: "名词 · 连同冠词记忆",
  verb: "动词 · 不定式",
  adjective: "形容词",
  adverb: "副词",
  pronoun: "代词",
  preposition: "介词",
  conjunction: "连词",
  determiner: "限定词",
  numeral: "数词",
  particle: "语气词",
  phrase: "表达",
  other: "词汇与表达",
} as const satisfies Record<PartOfSpeech, string>;
