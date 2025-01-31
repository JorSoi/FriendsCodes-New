
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { NotificationWithRelations } from "@/types/general.types";
TimeAgo.addDefaultLocale(en);



function Notification({ ...notification } : NotificationWithRelations) {
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="flex gap-3">
      <div className="relative flex size-[40px] shrink-0 items-center justify-center rounded-lg bg-[#484E6844]">
        {notification.type == "code_interaction" && (
          <Image
            src={notification.user_codes!.companies.logo_url!}
            width={50}
            height={50}
            alt=""
            className="rounded-md"
          />
        )}

        {notification.type == "new_follower" && <p className="text-2xl">👥</p>}

        {!notification.marked_as_read && (
          <div className="absolute bottom-[-7%] right-[-7%] z-[1] flex size-[13px] items-center justify-center rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] text-[13px] font-semibold shadow-[0_0_0_2px_#262538,inset_0_2px_2px_0_#ffffff70]"></div>
        )}
      </div>

      <div>
        {notification.type == "code_interaction" && (
            <div>

          <p className="text-[13px] text-[#c1c1c1]">
            <Link
              className="font-semibold text-white transition-colors hover:text-[#FF00B2]"
              href={`/${notification.profiles.user_name}`}
            >
              @{notification.profiles.user_name}{" "}
            </Link>
            interacted with your{" "}
            <span className="font-semibold text-white">
              {notification.user_codes!.companies.name}
              {" "}
            </span>
            referral. Was it redeemed by them? 🎉💸
          </p>
          {/* <div className="mt-2 mb-1 flex gap-3">
            <Button size={'xs'}>Yes, redeemed!</Button>
            <Button size={'xs'} variant={'secondary'}>No, it wasn&apos;t</Button>
          </div> */}
          </div>
        )}
        {notification.type == "new_follower" && (
          <p className="text-[13px] text-[#c1c1c1]">
            <Link
              className="font-semibold text-white transition-colors hover:text-[#FF00B2]"
              href={`/${notification.profiles.user_name}`}
            >
              @{notification.profiles.user_name}{" "}
            </Link>
            has added you to their friendslist. They will use your referral
            codes.
          </p>
        )}
        <p className="pt-[2px] text-[11px] text-[#ffffff50]">
          {timeAgo.format(new Date(notification.created_at))}
        </p>
      </div>
    </div>
  );
}

export default Notification;
