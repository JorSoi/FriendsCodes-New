drop policy "Enable insert for authenticated users only" on "public"."notifications";

drop policy "Enable users to update their own data only" on "public"."notifications";

drop policy "Enable users to view their own data only" on "public"."notifications";

alter table "public"."user_codes" alter column "user_id" set not null;

CREATE UNIQUE INDEX unique_code_interaction ON public.notifications USING btree (recipient, triggered_by, used_referral) WHERE (type = 'code_interaction'::notification_types);

CREATE UNIQUE INDEX unique_new_friend ON public.notifications USING btree (recipient, triggered_by) WHERE (type = 'new_friend'::notification_types);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_friend_request_notification()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
  INSERT INTO public.notifications (type, recipient, triggered_by)
  VALUES ('new_friend', NEW.friend_id, NEW.user_id)
  ON CONFLICT (recipient, triggered_by) 
  WHERE type = 'new_friend'
  DO NOTHING;

  RETURN NEW;
END;$function$
;

create policy "Enable insert for authenticated users and their rows only"
on "public"."notifications"
as permissive
for insert
to authenticated
with check (((auth.uid() = recipient) OR (auth.uid() = triggered_by)));


create policy "Enable read access for authenticated users"
on "public"."notifications"
as permissive
for select
to authenticated
using (true);



