import type { AppState } from "./learning";
import { migrateAppState } from "./learning";

export const LEGACY_GLOBAL_STORAGE_KEY = "gotheword-state-v1";
export const LEGACY_MIGRATION_KEY = "gotheword-legacy-migration-v1";

export type LegacyMigrationStatus = "dismissed" | "imported";

type StorageReader = Pick<Storage, "getItem">;
type StorageWriter = Pick<Storage, "setItem" | "removeItem">;

export function legacyMigrationMarkerKey(userId: string) {
  return `${LEGACY_MIGRATION_KEY}:${userId}`;
}

export function markLegacyMigrationDecision(
  storage: Pick<Storage, "setItem">,
  userId: string,
  status: LegacyMigrationStatus,
) {
  storage.setItem(legacyMigrationMarkerKey(userId), status);
}

export function readLegacyMigration(
  storage: StorageReader,
  userId: string,
): AppState | null {
  if (storage.getItem(legacyMigrationMarkerKey(userId))) return null;

  const raw = storage.getItem(LEGACY_GLOBAL_STORAGE_KEY);
  if (!raw) return null;

  try {
    return migrateAppState(JSON.parse(raw) as unknown);
  } catch {
    return null;
  }
}

export async function commitLegacyMigration({
  storage,
  userId,
  userStorageKey,
  state,
  save,
}: {
  storage: StorageWriter;
  userId: string;
  userStorageKey: string;
  state: AppState;
  save: () => Promise<void>;
}) {
  await save();
  storage.setItem(userStorageKey, JSON.stringify(state));
  storage.removeItem(LEGACY_GLOBAL_STORAGE_KEY);
  markLegacyMigrationDecision(storage, userId, "imported");
}
