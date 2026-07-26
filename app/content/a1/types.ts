export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "preposition"
  | "conjunction"
  | "determiner"
  | "numeral"
  | "particle"
  | "phrase"
  | "other";

export type A1TopicId =
  | "person"
  | "housing"
  | "environment"
  | "travel"
  | "food"
  | "shopping"
  | "services"
  | "education"
  | "work"
  | "leisure";

export type A1WordGroupId =
  | "numbers"
  | "dates"
  | "clock-time"
  | "time-measures"
  | "weekdays"
  | "times-of-day"
  | "months"
  | "seasons"
  | "currencies"
  | "measurements"
  | "countries-nationalities"
  | "colors"
  | "directions";

export type A1EntryType =
  | "main"
  | "derived"
  | "word-group-member"
  | "word-group-pattern";

export type A1SourceEntry = {
  entryId: string;
  lemma: string;
  display: string;
  sourceDisplay: string;
  partOfSpeech: PartOfSpeech;
  article?: "der" | "die" | "das";
  plural?: string;
  forms?: string[];
  parentId?: string;
  entryType: A1EntryType;
  wordGroupId?: A1WordGroupId;
  cefr: "A1";
  source: {
    sourceId: "goethe-a1-start-deutsch-1";
    page: number;
    order: number;
    rowKind: "main" | "indented" | "group-member" | "group-pattern";
  };
};

export type A1ExtensionEntry = {
  entryId: string;
  lemma: string;
  display: string;
  partOfSpeech: PartOfSpeech;
  article?: "der" | "die" | "das";
  plural?: string;
  forms?: string[];
  cefr: "A1";
  reason: "legacy-content";
};

export type A1NonQuizReason =
  | "alias-of-parent"
  | "inflection-only"
  | "pattern-only"
  | "duplicate-display";

export type A1LearningEntry = {
  entryId: string;
  topicIds: A1TopicId[];
  senses: Array<{
    senseId: string;
    zh: string;
    note?: string;
  }>;
  examples: Array<{
    de: string;
    zh: string;
  }>;
  distractorOverrides?: string[];
  teachingOrder: number;
  active: boolean;
  nonQuizReason?: A1NonQuizReason;
  reviewStatus: "draft" | "reviewed";
};

export type A1RuntimeManifest = {
  schemaVersion: number;
  contentVersion: string;
  source: {
    sourceId: "goethe-a1-start-deutsch-1";
    url: string;
    retrievedAt: string;
    sha256: string;
    pages: number;
    bytes: number;
  };
  rights: {
    sourceList: "pending" | "approved";
    examples: "editorial-only";
  };
};

export type Word = {
  id: string;
  german: string;
  translation: string;
  kind: PartOfSpeech;
  article?: "der" | "die" | "das";
  plural?: string;
  topic: string;
  topicIds: A1TopicId[];
  distractors: string[];
  distractorIds: string[];
  examples: Array<{
    de: string;
    zh: string;
  }>;
  sourceEntryType: A1EntryType | "project-extension";
};

export type A1CoverageReport = {
  schemaVersion: 1;
  generatedAt: string;
  manifest: A1RuntimeManifest;
  source: {
    alphabetical: {
      total: number;
      main: number;
      derived: number;
      covered: number;
    };
    wordGroups: {
      taxonomy: number;
      expectedTaxonomy: number;
      totalRows: number;
      members: number;
      patterns: number;
      covered: number;
    };
    totalRows: number;
    coveredRows: number;
  };
  learning: {
    total: number;
    quizEligible: number;
    reviewed: number;
    nonQuiz: number;
    runtimeActive: number;
    projectExtensions: number;
  };
  distributions: {
    partOfSpeech: Record<string, number>;
    topic: Record<string, number>;
    entryType: Record<string, number>;
    nonQuizReason: Record<string, number>;
  };
  legacy: {
    stableIds: number;
    mappedIds: number;
    resolvedIds: number;
  };
  artifact: {
    generatedRuntimeBytes: number;
    gzipBytes: number;
    brotliBytes: number;
    chunks: Array<{
      file: string;
      bytes: number;
      gzipBytes: number;
      brotliBytes: number;
    }>;
    initialHtmlIncludesRuntime: boolean | null;
  };
};
