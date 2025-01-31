create policy "Enable users to update their own data only"
on "public"."notifications"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = recipient));



