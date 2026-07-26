-- Run only after all clients that depend on CAS have been taken offline.
-- This restores the pre-POR-5 write path; it does not downgrade AppState JSON.

grant insert, update, delete on public.learning_states
to authenticated;

drop function if exists public.save_learning_state(bigint, jsonb);

drop trigger if exists set_learning_state_updated_at
on public.learning_states;

drop function if exists public.set_learning_state_updated_at();

alter table public.learning_states
  drop column if exists revision,
  drop column if exists schema_version,
  alter column state set default
    '{"version":1,"progress":{},"stats":{}}'::jsonb;
