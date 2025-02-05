alter table "public"."notifications" drop constraint "notifications_used_referral_fkey";

alter table "public"."notifications" add constraint "notifications_used_referral_fkey" FOREIGN KEY (used_referral) REFERENCES user_codes(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."notifications" validate constraint "notifications_used_referral_fkey";


