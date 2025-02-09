set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_friend_request_notification()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
  INSERT INTO public.notifications (type, recipient, triggered_by)
 VALUES ('new_friend', NEW.friend_id, NEW.user_id);
  
  RETURN NEW;
  END;$function$
;


