create type "public"."notification_types" as enum ('new_follower', 'code_interaction');

alter table "public"."notifications" add column "triggered_by" uuid not null;

alter table "public"."notifications" alter column "type" set data type notification_types using "type"::notification_types;

alter table "public"."notifications" add constraint "notifications_triggered_by_fkey" FOREIGN KEY (triggered_by) REFERENCES profiles(id) not valid;

alter table "public"."notifications" validate constraint "notifications_triggered_by_fkey";

create policy "Enable users to view their own data only"
on "public"."notifications"
as permissive
for select
to authenticated
using ((( SELECT auth.uid() AS uid) = recipient));



