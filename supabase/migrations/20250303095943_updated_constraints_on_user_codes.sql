alter table "public"."user_codes" drop constraint "user_codes_company_id_fkey";

alter table "public"."companies" drop column "benefits";

alter table "public"."companies" add column "description" text;

alter table "public"."companies" alter column "name" set not null;

alter table "public"."user_codes" add constraint "user_codes_company_id_fkey" FOREIGN KEY (company_id) REFERENCES companies(id) ON UPDATE CASCADE not valid;

alter table "public"."user_codes" validate constraint "user_codes_company_id_fkey";


