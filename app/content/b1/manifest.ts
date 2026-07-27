/**
 * Publication remains blocked until the candidate PDF is frozen and B1 rights
 * are approved independently. Null integrity fields prevent fabricated source
 * evidence from being mistaken for a releasable artifact.
 */
export const B1_SOURCE_CANDIDATE = {
  sourceId: "goethe-zertifikat-b1-wortliste",
  landingPageUrl: "https://www.goethe.de/de/spr/prf/ueb/pb1.html",
  pdfUrl: "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf",
  retrievedAt: null,
  sha256: null,
  pages: 104,
  bytes: null,
  edition: null,
  rights: {
    sourceList: "pending",
    examples: "project-authored-only",
  },
  publication: "blocked",
} as const;
