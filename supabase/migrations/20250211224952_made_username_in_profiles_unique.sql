alter table "public"."profiles" drop constraint "profiles_id_fkey";

CREATE UNIQUE INDEX profiles_user_name_key ON public.profiles USING btree (user_name);

alter table "public"."profiles" add constraint "profiles_user_name_key" UNIQUE using index "profiles_user_name_key";

alter table "public"."profiles" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_id_fkey";


