alter table "public"."notifications" add column "email_delivered" boolean not null default false;

alter table "public"."profiles" add column "email_preferences" jsonb not null default '{"friends": false, "product_updates": true, "referral_conversions": true}'::jsonb;

alter table "public"."user_codes" add constraint "user_codes_user_id_fkey1" FOREIGN KEY (user_id) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_codes" validate constraint "user_codes_user_id_fkey1";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.retrieve_referrals_for_email_notification(user_id uuid)
 RETURNS SETOF companies
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
   select
  c.*
from
  companies c
  join user_codes u on c.id = u.company_id
join profiles p on p.id = u.user_id
join notifications n on n.used_referral = u.id
where
  p.id = retrieve_referrals_for_email_notification.user_id
  AND n.type = 'code_interaction'
  AND n.email_delivered = false;
END;
$function$
;


