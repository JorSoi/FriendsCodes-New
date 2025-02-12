alter table "public"."notifications" drop constraint "notifications_recipient_fkey";

alter table "public"."notifications" drop constraint "notifications_triggered_by_fkey";

alter table "public"."profiles" add column "email" character varying not null;

CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email);

alter table "public"."profiles" add constraint "profiles_email_key" UNIQUE using index "profiles_email_key";

alter table "public"."notifications" add constraint "notifications_recipient_fkey" FOREIGN KEY (recipient) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."notifications" validate constraint "notifications_recipient_fkey";

alter table "public"."notifications" add constraint "notifications_triggered_by_fkey" FOREIGN KEY (triggered_by) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."notifications" validate constraint "notifications_triggered_by_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_new_user_profile()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  INSERT INTO public.profiles (id, user_name, avatar_url, email)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'user_name', NEW.raw_user_meta_data->>'avatar_url', NEW.email);
  
  RETURN NEW;
END;$function$
;


