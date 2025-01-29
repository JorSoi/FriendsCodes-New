alter table "public"."profiles" drop constraint "profiles_username_key";

alter table "public"."profiles" drop constraint "username_length";

drop index if exists "public"."profiles_username_key";

alter table "public"."profiles" drop column "redemption_count";

alter table "public"."profiles" drop column "username";

alter table "public"."user_codes" drop column "exposed_count";

alter table "public"."user_codes" drop column "redemption_count";


