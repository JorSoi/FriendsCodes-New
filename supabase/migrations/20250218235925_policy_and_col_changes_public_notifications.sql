drop policy "Enable insert for authenticated users and their rows only" on "public"."notifications";

drop policy "Enable read access for authenticated users" on "public"."notifications";

alter table "public"."notifications" alter column "triggered_by" drop not null;

alter table "public"."notifications" disable row level security;

create policy "Enable insert for all users"
on "public"."notifications"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."notifications"
as permissive
for select
to public
using (true);



