import type { Word } from "./a1/types.ts";
import type { LevelId } from "./levels.ts";

export type LevelRuntime = {
  levelId: LevelId;
  contentVersion: string;
  words: readonly Word[];
  byId: ReadonlyMap<string, Word>;
  resolveCanonicalId: (id: string) => string | undefined;
};

export class LevelUnavailableError extends Error {
  readonly levelId: LevelId;

  constructor(levelId: LevelId, message: string) {
    super(message);
    this.levelId = levelId;
    this.name = "LevelUnavailableError";
  }
}

/** Explicit dynamic imports keep every complete runtime out of the login chunk. */
export async function loadLevelRuntime(levelId: LevelId): Promise<LevelRuntime> {
  if (levelId === "A1") {
    const runtime = await import("./a1/generated/a1-runtime.ts");
    return {
      levelId,
      contentVersion: runtime.A1_MANIFEST.contentVersion,
      words: runtime.A1_WORDS,
      byId: runtime.A1_BY_ID,
      resolveCanonicalId: runtime.resolveRuntimeWordId,
    };
  }

  if (levelId === "A2") {
    const runtime = await import("./a2/generated/a2-runtime.ts");
    return {
      levelId,
      contentVersion: runtime.A2_MANIFEST.contentVersion,
      words: runtime.A2_WORDS,
      byId: runtime.A2_BY_ID,
      resolveCanonicalId: (id) =>
        runtime.A2_VALID_IDS.has(id) ? id : undefined,
    };
  }

  const runtime = await import("./b1/generated/b1-runtime.ts");
  return {
    levelId,
    contentVersion: runtime.B1_MANIFEST.contentVersion,
    words: runtime.B1_WORDS,
    byId: runtime.B1_BY_ID,
    resolveCanonicalId: (id) =>
      runtime.B1_VALID_IDS.has(id) ? id : undefined,
  };
}
