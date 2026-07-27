-- Run only against a local Supabase database or an isolated development branch.
-- The transaction is always rolled back, including the temporary auth users.

begin;

insert into auth.users (
  id,
  instance_id,
  aud,
  role,
  email,
  encrypted_password,
  created_at,
  updated_at
)
values
  (
    '11111111-1111-4111-8111-111111111111',
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    'por5-a@example.invalid',
    '',
    now(),
    now()
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    'por5-b@example.invalid',
    '',
    now(),
    now()
  );

insert into public.learning_states (
  user_id,
  state,
  schema_version,
  revision
)
values (
  '22222222-2222-4222-8222-222222222222',
  '{"version":2,"dailyGoal":5,"progress":{},"stats":{},"activeSession":null}'::jsonb,
  2,
  0
);

set local role authenticated;
select set_config(
  'request.jwt.claim.sub',
  '11111111-1111-4111-8111-111111111111',
  true
);

do $por5$
declare
  saved_revision bigint;
begin
  select revision
  into saved_revision
  from public.save_learning_state(
    0,
    '{"version":2,"dailyGoal":10,"progress":{},"stats":{},"activeSession":null}'::jsonb
  );

  if saved_revision <> 1 then
    raise exception 'first save revision mismatch: %', saved_revision;
  end if;

  select revision
  into saved_revision
  from public.save_learning_state(
    1,
    '{"version":2,"dailyGoal":20,"progress":{},"stats":{},"activeSession":null}'::jsonb
  );

  if saved_revision <> 2 then
    raise exception 'second save revision mismatch: %', saved_revision;
  end if;

  begin
    perform public.save_learning_state(
      1,
      '{"version":2,"dailyGoal":5,"progress":{},"stats":{},"activeSession":null}'::jsonb
    );
    raise exception 'stale revision unexpectedly succeeded';
  exception
    when serialization_failure then null;
  end;

  if exists (
    select 1
    from public.learning_states
    where user_id = '22222222-2222-4222-8222-222222222222'
  ) then
    raise exception 'user A can read user B state';
  end if;

  begin
    update public.learning_states
    set state =
      '{"version":2,"progress":{},"stats":{},"activeSession":null}'::jsonb
    where user_id = '22222222-2222-4222-8222-222222222222';
    raise exception 'direct update unexpectedly succeeded';
  exception
    when insufficient_privilege then null;
  end;
end;
$por5$;

select set_config(
  'request.jwt.claim.sub',
  '22222222-2222-4222-8222-222222222222',
  true
);

do $por5$
begin
  if exists (
    select 1
    from public.learning_states
    where user_id = '11111111-1111-4111-8111-111111111111'
  ) then
    raise exception 'user B can read user A state';
  end if;
end;
$por5$;

rollback;
