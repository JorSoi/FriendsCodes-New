create type "public"."company_status" as enum ('public', 'reviewing', 'private');

alter table "public"."companies" add column "benefits" text;

alter table "public"."companies" add column "status" company_status not null default 'reviewing'::company_status;


