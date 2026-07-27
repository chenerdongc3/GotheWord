// Compatibility exports for non-page consumers. The authenticated application
// imports the generated runtime directly so the author-layer modules never
// enter the client dependency graph.
export {
  A1_BY_ID,
  A1_CONTENT,
  A1_MANIFEST,
  A1_WORDS as WORDS,
  getDisplayWord,
  resolveRuntimeWordId,
} from "./content/a1/generated/a1-runtime.ts";
export type { Word } from "./content/a1/types.ts";
