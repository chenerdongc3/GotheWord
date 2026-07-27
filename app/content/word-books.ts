import {
  A1_BY_ID,
  A1_MANIFEST,
  A1_VALID_IDS,
  A1_WORDS,
  getDisplayWord,
  LEGACY_ID_MAP,
  PART_OF_SPEECH_LABELS,
} from "./a1/generated/a1-runtime.ts";
import {
  A2_BY_ID,
  A2_MANIFEST,
  A2_VALID_IDS,
  A2_WORDS,
} from "./a2/generated/a2-runtime.ts";
import type { Word } from "./a1/types.ts";

export type WordBookId = "a1" | "a2";

export type WordBook = {
  id: WordBookId;
  level: "A1" | "A2";
  name: string;
  words: readonly Word[];
  byId: ReadonlyMap<string, Word>;
};

export const WORD_BOOKS = {
  a1: {
    id: "a1",
    level: "A1",
    name: "Goethe A1",
    words: A1_WORDS,
    byId: A1_BY_ID,
    manifest: A1_MANIFEST,
  },
  a2: {
    id: "a2",
    level: "A2",
    name: "Goethe A2",
    words: A2_WORDS,
    byId: A2_BY_ID,
    manifest: A2_MANIFEST,
  },
} as const satisfies Record<
  WordBookId,
  WordBook & { manifest: { readonly contentVersion: string } }
>;

export const ALL_WORDS_BY_ID = new Map<string, Word>([
  ...A1_BY_ID,
  ...A2_BY_ID,
]);

export function resolveRuntimeWordId(wordId: string) {
  const a1Resolved =
    LEGACY_ID_MAP[wordId as keyof typeof LEGACY_ID_MAP] ?? wordId;
  if (A1_VALID_IDS.has(a1Resolved)) return a1Resolved;
  if (A2_VALID_IDS.has(wordId)) return wordId;
  return undefined;
}

export function wordBookForWordId(wordId: string): WordBookId | undefined {
  if (A2_VALID_IDS.has(wordId)) return "a2";
  const resolved =
    LEGACY_ID_MAP[wordId as keyof typeof LEGACY_ID_MAP] ?? wordId;
  return A1_VALID_IDS.has(resolved) ? "a1" : undefined;
}

export function countLearnedWords(
  words: readonly Word[],
  progress: Record<string, { state: string } | undefined>,
) {
  return words.filter((word) => {
    const wordProgress = progress[word.id];
    return Boolean(
      wordProgress &&
        wordProgress.state !== "unlearned" &&
        wordProgress.state !== "learning",
    );
  }).length;
}

export { getDisplayWord, PART_OF_SPEECH_LABELS };
export type { Word };
