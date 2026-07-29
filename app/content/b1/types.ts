import type {
  A1EntryType,
  A1TopicId,
  PartOfSpeech,
  Word,
} from "../a1/types.ts";

export type B1SourceEntry = {
  entryId: string;
  lemma: string;
  display: string;
  sourceDisplay: string;
  partOfSpeech: PartOfSpeech;
  article?: "der" | "die" | "das";
  plural?: string;
  forms?: string[];
  entryType: A1EntryType;
  cefr: "B1";
  source: {
    sourceId: "goethe-zertifikat-b1";
    page: number | null;
    order: number;
    section: string;
  };
};

export type B1LearningEntry = {
  entryId: string;
  topicIds: A1TopicId[];
  senses: Array<{
    senseId: string;
    zh: string;
  }>;
  examples: Array<{
    de: string;
    zh: string;
    target?: string;
  }>;
  teachingOrder: number;
  active: boolean;
  reviewStatus: "machine-draft" | "reviewed";
};

export type B1RuntimeManifest = {
  schemaVersion: number;
  contentVersion: string;
  source: {
    sourceId: "goethe-zertifikat-b1";
    landingPageUrl: string;
    url: string;
    retrievedAt: string;
    sha256: string;
    pages: number;
    bytes: number;
    approximateLexicalUnits: number;
  };
  rights: {
    sourceList: "pending" | "approved";
    examples: "project-authored-only";
  };
  editorial: {
    chineseSenses: "machine-draft" | "reviewed";
    examples: "project-authored-template";
    sourcePageMapping: "pending" | "reviewed";
  };
};

export type B1CoverageReport = {
  schemaVersion: 1;
  generatedAt: string;
  manifest: B1RuntimeManifest;
  source: {
    totalRows: number;
    main: number;
    derived: number;
    wordGroupMembers: number;
    rowsWithVerifiedPage: number;
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
