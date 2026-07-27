import type { A2RuntimeManifest } from "./types.ts";

export const A2_MANIFEST = {
  schemaVersion: 1,
  contentVersion: "2026.07.28-a2.1",
  source: {
    sourceId: "goethe-zertifikat-a2",
    url: "https://www.goethe.de/resources/files/pdf329/goethe-zertifikat_a2_wortliste.pdf",
    retrievedAt: "2026-07-28",
    sha256: "76cebc5fa7356fb1fb0f0bf964ad204e59a3e79753e7bad8cf3e4f0b38c352b7",
    pages: 32,
    bytes: 411290,
    approximateLexicalUnits: 1300,
  },
  rights: {
    sourceList: "pending",
    examples: "editorial-only",
  },
  editorial: {
    chineseSenses: "machine-draft",
    examples: "project-authored-template",
  },
} as const satisfies A2RuntimeManifest;

export const A2_SOURCE_BASELINE = {
  totalRows: 1038,
} as const;
