import type { A1RuntimeManifest } from "./types.ts";

export const A1_MANIFEST = {
  schemaVersion: 1,
  contentVersion: "2026.07.26-por9.1",
  source: {
    sourceId: "goethe-a1-start-deutsch-1",
    url: "https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf",
    retrievedAt: "2026-07-26",
    sha256: "45fb648bc0ac02338f7898cae065953e320ab72ed0c14e13e0deffe6f1c5d64e",
    pages: 29,
    bytes: 712341,
  },
  rights: {
    sourceList: "approved",
    examples: "editorial-only",
  },
} as const satisfies A1RuntimeManifest;

export const A1_SOURCE_BASELINE = {
  topics: 10,
  wordGroups: 13,
  alphabetical: {
    total: 687,
    main: 628,
    derived: 59,
  },
} as const;

export const A1_EDITORIAL_SOURCE = {
  translationReference: {
    title: "Deutsch Online A1 词汇表（第 1–18 章）",
    url: "https://lernen.goethe.de/deutschonline/A1/PDF/ZH_CN/A1_deutschonline_%E8%AF%8D%E6%B1%87%E8%A1%A8_alpha.pdf",
    retrievedAt: "2026-07-26",
    sha256: "c4bcd9bee2ac8e3087a91ccf32e488422969fd0b6abf92f745b9047e112659b7",
  },
  examples: {
    policy: "GotheWord 自编；不复制来源 PDF 例句",
    reviewedAt: "2026-07-26",
  },
} as const;
