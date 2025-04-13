drop function if exists "public"."retrieve_referrals_for_email_notification"(user_id uuid);

alter table "public"."companies" alter column "logo_url" set data type text using "logo_url"::text;

alter table "public"."companies" alter column "name" set data type text using "name"::text;

alter table "public"."notifications" add column "email_delivered" boolean not null default false;

alter table "public"."profiles" add column "email_preferences" jsonb not null default '{"friends": false, "product_updates": true, "referral_conversions": true}'::jsonb;

alter table "public"."user_codes" add constraint "user_codes_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_codes" validate constraint "user_codes_user_id_fkey1";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.retrieve_referrals_for_email_notification(user_id uuid)
 RETURNS TABLE(name text, logo_url text, conversion_at timestamp with time zone, triggered_by text)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        c.name,
        c.logo_url,
        n.created_at AS conversion_at,
        p.user_name AS triggered_by
    FROM
        notifications n
        JOIN user_codes u ON n.used_referral = u.id
        JOIN companies c ON c.id = u.company_id
        LEFT JOIN profiles p ON p.id = n.triggered_by
    WHERE
        n.recipient = retrieve_referrals_for_email_notification.user_id
        AND n.type = 'code_interaction'
        AND n.email_delivered = false
        AND n.created_at > NOW() - INTERVAL '1 day';
END;
$function$
;


