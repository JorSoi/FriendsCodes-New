create extension if not exists "pg_jsonschema" with schema "public";

alter table "public"."notifications" add column "used_referral" bigint;

alter table "public"."notifications" add constraint "notifications_used_referral_fkey" FOREIGN KEY (used_referral) REFERENCES user_codes(id) ON UPDATE CASCADE not valid;

alter table "public"."notifications" validate constraint "notifications_used_referral_fkey";


