/** Stable identifiers used by content, persistence, sessions, and analytics. */
export const LEVEL_IDS = ["A1", "B1"] as const;
export type LevelId = (typeof LEVEL_IDS)[number];

export type LevelAvailability = "active" | "rights-blocked";

export type LevelCatalogEntry = {
  id: LevelId;
  label: string;
  contentVersion: string | null;
  availability: LevelAvailability;
  sourceKind: "official-word-list";
};

/**
 * Deliberately small and safe to include in the application shell. Full
 * runtimes are loaded through `loadLevelRuntime` and are never imported here.
 */
export const LEVEL_CATALOG = [
  {
    id: "A1",
    label: "A1 词汇轨道",
    contentVersion: "2026.07.26-por9.1",
    availability: "active",
    sourceKind: "official-word-list",
  },
  {
    id: "B1",
    label: "B1 词汇轨道",
    contentVersion: null,
    availability: "rights-blocked",
    sourceKind: "official-word-list",
  },
] as const satisfies readonly LevelCatalogEntry[];

export function isLevelId(value: unknown): value is LevelId {
  return LEVEL_IDS.includes(value as LevelId);
}

export function getLevelCatalogEntry(levelId: LevelId) {
  return LEVEL_CATALOG.find(({ id }) => id === levelId)!;
}
