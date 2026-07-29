import type { B1RuntimeManifest } from "./types.ts";

export const B1_MANIFEST = {
  schemaVersion: 1,
  contentVersion: "2026.07.28-b1.1",
  source: {
    sourceId: "goethe-zertifikat-b1",
    landingPageUrl: "https://www.goethe.de/de/spr/prf/ueb/pb1.html",
    url: "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf",
    retrievedAt: "2026-07-28",
    sha256: "8860f7f0c916831b2365f66239a3ceba3be81ddba28e1224846ca8420807fe42",
    pages: 104,
    bytes: 475500,
    approximateLexicalUnits: 2400,
  },
  rights: {
    sourceList: "pending",
    examples: "project-authored-only",
  },
  editorial: {
    chineseSenses: "machine-draft",
    examples: "project-authored-template",
    sourcePageMapping: "pending",
  },
} as const satisfies B1RuntimeManifest;

export const B1_SOURCE_BASELINE = {
  totalRows: 3207,
} as const;

/** @deprecated Use B1_MANIFEST. Kept for callers that inspect the rights gate. */
export const B1_SOURCE_CANDIDATE = {
  sourceId: "goethe-zertifikat-b1-wortliste",
  landingPageUrl: B1_MANIFEST.source.landingPageUrl,
  pdfUrl: B1_MANIFEST.source.url,
  retrievedAt: B1_MANIFEST.source.retrievedAt,
  sha256: B1_MANIFEST.source.sha256,
  pages: B1_MANIFEST.source.pages,
  bytes: B1_MANIFEST.source.bytes,
  edition: "2016-1",
  rights: B1_MANIFEST.rights,
  publication: "blocked",
} as const;
