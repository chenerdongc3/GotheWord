import type {
  A1EntryType,
  A1TopicId,
  PartOfSpeech,
  Word,
} from "../a1/types.ts";

export type A2SourceEntry = {
  entryId: string;
  lemma: string;
  display: string;
  sourceDisplay: string;
  partOfSpeech: PartOfSpeech;
  article?: "der" | "die" | "das";
  plural?: string;
  forms?: string[];
  entryType: A1EntryType;
  cefr: "A2";
  source: {
    sourceId: "goethe-zertifikat-a2";
    page: number;
    order: number;
    section: string;
  };
};

export type A2LearningEntry = {
  entryId: string;
  topicIds: A1TopicId[];
  senses: Array<{
    senseId: string;
    zh: string;
  }>;
  examples: Array<{
    de: string;
    zh: string;
  }>;
  teachingOrder: number;
  active: boolean;
  reviewStatus: "machine-draft" | "reviewed";
};

export type A2RuntimeManifest = {
  schemaVersion: number;
  contentVersion: string;
  source: {
    sourceId: "goethe-zertifikat-a2";
    url: string;
    retrievedAt: string;
    sha256: string;
    pages: number;
    bytes: number;
    approximateLexicalUnits: number;
  };
  rights: {
    sourceList: "pending" | "approved";
    examples: "editorial-only";
  };
  editorial: {
    chineseSenses: "machine-draft" | "reviewed";
    examples: "project-authored-template";
  };
};

export type A2CoverageReport = {
  schemaVersion: 1;
  generatedAt: string;
  manifest: A2RuntimeManifest;
  source: {
    totalRows: number;
    main: number;
    derived: number;
    wordGroupMembers: number;
  };
  learning: {
    total: number;
    runtimeActive: number;
    reviewed: number;
    machineDraft: number;
  };
  distributions: {
    partOfSpeech: Record<string, number>;
    topic: Record<string, number>;
    entryType: Record<string, number>;
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

export type { Word };
