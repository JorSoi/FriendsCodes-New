alter table "public"."profiles" drop column "updated_at";

alter table "public"."profiles" add column "last_activity_at" timestamp with time zone default (now() AT TIME ZONE 'utc'::text);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.update_time_of_last_activity()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        UPDATE profiles
        SET last_activity_at = NOW()
        WHERE id = NEW.user_id;
    ELSIF (TG_OP = 'DELETE') THEN
        UPDATE profiles
        SET last_activity_at = NOW()
        WHERE id = OLD.user_id;
    END IF;

    RETURN NULL;  -- Triggers that run AFTER do not modify the row
END;$function$
;

CREATE TRIGGER on_friend_activity AFTER INSERT OR DELETE ON public.friends FOR EACH ROW EXECUTE FUNCTION update_time_of_last_activity();

CREATE TRIGGER on_usercode_activity AFTER INSERT OR DELETE OR UPDATE ON public.user_codes FOR EACH ROW EXECUTE FUNCTION update_time_of_last_activity();


