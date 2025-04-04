create type "public"."company_categories" as enum ('banking', 'crypto', 'education', 'fitness', 'food', 'housing', 'games', 'mobility', 'travel', 'shopping', 'other', 'software');

alter table "public"."companies" drop column "default_sharing_reward";

alter table "public"."companies" drop column "default_usage_reward";

alter table "public"."companies" add column "company_categories" company_categories[];

alter table "public"."companies" add column "spotlighted" boolean;

alter table "public"."companies" add column "referral_sharing_reward" text;

alter table "public"."companies" add column "referral_usage_reward" text;


