create table public.learning_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null
    default '{"version":1,"progress":{},"stats":{}}'::jsonb
    check (jsonb_typeof(state) = 'object'),
  updated_at timestamptz not null default now()
);

alter table public.learning_states enable row level security;

create policy "Users can read their learning state"
on public.learning_states
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their learning state"
on public.learning_states
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their learning state"
on public.learning_states
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their learning state"
on public.learning_states
for delete
to authenticated
using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.learning_states to authenticated;
