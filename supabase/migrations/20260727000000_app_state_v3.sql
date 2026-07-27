alter table public.learning_states
  alter column schema_version set default 3,
  alter column state set default
    '{"version":3,"activeLevel":"A1","progress":{},"stats":{},"activeSession":null}'::jsonb;

update public.learning_states
set schema_version = 3
where state ->> 'version' = '3';

create or replace function public.save_learning_state(
  expected_revision bigint,
  next_state jsonb
)
returns table (
  state jsonb,
  schema_version integer,
  revision bigint,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  saved public.learning_states%rowtype;
begin
  if current_user_id is null then
    raise exception using
      errcode = '42501',
      message = 'authentication_required';
  end if;

  if
    next_state is null
    or jsonb_typeof(next_state) <> 'object'
    or next_state ->> 'version' <> '3'
  then
    raise exception using
      errcode = '22023',
      message = 'invalid_learning_state';
  end if;

  update public.learning_states as learning_state
  set
    state = next_state,
    schema_version = 3,
    revision = learning_state.revision + 1
  where
    learning_state.user_id = current_user_id
    and learning_state.revision = expected_revision
  returning learning_state.* into saved;

  if found then
    state := saved.state;
    schema_version := saved.schema_version;
    revision := saved.revision;
    updated_at := saved.updated_at;
    return next;
    return;
  end if;

  if expected_revision = 0 then
    insert into public.learning_states as learning_state (
      user_id,
      state,
      schema_version,
      revision
    )
    values (
      current_user_id,
      next_state,
      3,
      1
    )
    on conflict (user_id) do nothing
    returning learning_state.* into saved;

    if found then
      state := saved.state;
      schema_version := saved.schema_version;
      revision := saved.revision;
      updated_at := saved.updated_at;
      return next;
      return;
    end if;
  end if;

  raise exception using
    errcode = '40001',
    message = 'learning_state_revision_conflict';
end;
$$;

revoke all on function public.save_learning_state(bigint, jsonb)
from public, anon, authenticated;
grant execute on function public.save_learning_state(bigint, jsonb)
to authenticated;

revoke insert, update, delete on public.learning_states
from authenticated;
grant select on public.learning_states to authenticated;
