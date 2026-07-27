import type { LevelId } from "./levels.ts";

/** One physical/logical row in a frozen source, never used as a progress key. */
export type SourceRow = {
  sourceRowId: string;
  levelId: LevelId;
  page: number;
  order: number;
  kind:
    | "word-group"
    | "main"
    | "derived"
    | "regional-variant"
    | "cross-reference"
    | "abbreviation"
    | "instruction"
    | "structure";
  sourceDisplay: string;
  canonicalLexemeId?: string;
  quizEligibility: "eligible" | "ineligible" | "needs-review";
};

/** Global identity shared by progress when two levels contain the same lexeme. */
export type CanonicalLexeme = {
  canonicalLexemeId: string;
  lemma: string;
  crosswalkStatus: "confirmed" | "needs-review";
};

export type EditorialEvidence = {
  status: "generated" | "editorial-review" | "approved";
  reviewer?: string;
  reviewedAt?: string;
  contentVersion: string;
};

export type LevelCoverage = {
  sourceRows: number;
  uniqueLexemes: number;
  a1Overlap: number;
  unresolvedCrosswalk: number;
  quizEligible: number;
  runtimeActive: number;
};
