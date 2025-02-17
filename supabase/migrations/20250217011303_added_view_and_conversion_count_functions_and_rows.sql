alter table "public"."user_codes" add column "conversion_count" bigint not null default '0'::bigint;

alter table "public"."user_codes" add column "view_count" bigint not null default '0'::bigint;

alter table "public"."user_codes" add constraint "user_codes_check" CHECK (((conversion_count)::double precision <> (id)::double precision)) not valid;

alter table "public"."user_codes" validate constraint "user_codes_check";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.increment_conversion_count(user_code_id bigint)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
UPDATE user_codes
SET conversion_count = conversion_count + 1
WHERE id = user_code_id;
RETURN;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.increment_view_count(user_code_id integer)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Directly using the parameter in the WHERE clause
    UPDATE user_codes
    SET view_count = view_count + 1
    WHERE id = user_code_id;
    RETURN;
END;
$function$
;


