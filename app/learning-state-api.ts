import { migrateAppState, type AppState } from "./learning.ts";
import type { RemoteLearningState } from "./learning-sync.ts";
import { supabase } from "./supabase.ts";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function toRemoteLearningState(value: unknown): RemoteLearningState {
  if (!isRecord(value)) throw new Error("云端返回了无效的学习记录");

  const state = migrateAppState(value.state);
  const schemaVersion = Number(value.schema_version);
  const stateVersion = isRecord(value.state)
    ? Number(value.state.version)
    : Number.NaN;
  const revision = Number(value.revision);
  if (
    !state ||
    !Number.isSafeInteger(schemaVersion) ||
    schemaVersion < 1 ||
    !Number.isSafeInteger(revision) ||
    revision < 0 ||
    typeof value.updated_at !== "string"
  ) {
    throw new Error("云端返回了无法识别的学习记录");
  }

  return {
    state,
    schemaVersion:
      schemaVersion === stateVersion ? schemaVersion : 1,
    revision,
    updatedAt: value.updated_at,
  };
}

export async function loadLearningState(userId: string) {
  if (!supabase) throw new Error("Supabase 尚未配置");

  const { data, error } = await supabase
    .from("learning_states")
    .select("state, schema_version, revision, updated_at")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return toRemoteLearningState(data);
}

export class LearningStateConflictError extends Error {
  constructor() {
    super("learning_state_revision_conflict");
    this.name = "LearningStateConflictError";
  }
}

export async function saveLearningState(
  expectedRevision: number,
  state: AppState,
) {
  if (!supabase) throw new Error("Supabase 尚未配置");

  const { data, error } = await supabase
    .rpc("save_learning_state", {
      expected_revision: expectedRevision,
      next_state: state,
    })
    .single();

  if (error) {
    if (
      error.code === "40001" ||
      error.message.includes("learning_state_revision_conflict")
    ) {
      throw new LearningStateConflictError();
    }
    throw error;
  }

  return toRemoteLearningState(data);
}
