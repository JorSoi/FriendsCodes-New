alter table "public"."companies" drop column "description";

alter table "public"."companies" add column "company_description" text;

alter table "public"."companies" add column "referral_sharing_reward" text;

alter table "public"."companies" add column "referral_usage_reward" text;

alter table "public"."user_codes" add column "referral_description" text;

alter table "public"."user_codes" add column "referral_reward" text;


