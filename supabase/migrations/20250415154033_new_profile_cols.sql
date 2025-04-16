alter table "public"."profiles" add column "display_name" text;

alter table "public"."profiles" add column "profile_description" text not null default 'Redeem my referrals below so that we can both collect store benefits together!!'::text;

alter table "public"."profiles" alter column "email_preferences" set default '{"misc": true, "friends": true, "product_updates": true, "referral_conversions": true}'::jsonb;