alter table "public"."profiles" add column "visitor_count" bigint not null default '0'::bigint;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.increment_profile_visitor_count(profile_owner_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN 
    UPDATE profiles
    SET visitor_count = visitor_count + 1
    WHERE id = profile_owner_id;
END;$function$
;


