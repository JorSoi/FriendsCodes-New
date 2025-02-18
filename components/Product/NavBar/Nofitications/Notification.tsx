import Link from "next/link";
import { NotificationWithRelations } from "@/types/general.types";
import { getTimeAgo } from "@/utils/getTimeAgo";
import CompanyLogo from "../../CompanyLogo";
import { isValidURL } from "@/utils/isValidURL";
import clsx from "clsx";
import Image from "next/image";

function Notification({ ...notification }: NotificationWithRelations) {
  const isValidUrl = isValidURL(notification.user_codes?.referral_value || "");
  return (
    <div className="flex gap-3">
      <div
        className={clsx(
          "relative flex size-[40px] shrink-0 items-center justify-center",
          {
            "absolute rounded-xl border-1 border-[#ffffff1b] bg-[#47476a] p-2":
              notification.type == "new_friend" || !notification.user_codes?.companies.logo_url,
          },
        )}
      >
        {notification.type == "code_interaction" && (
          <CompanyLogo
            src={notification.user_codes?.companies.logo_url}
            size={"md"}
          />
        )}

        {notification.type == "new_friend" && (
          <Image src={"/icons/add-user.svg"} width={17} height={17} alt="20" />
        )}

        {!notification.marked_as_read && (
          <div className="absolute bottom-[-7%] right-[-7%] z-[1] flex size-[13px] items-center justify-center rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] text-[13px] font-semibold shadow-[0_0_0_2px_#262538,inset_0_2px_2px_0_#ffffff70]"></div>
        )}
      </div>

      <div>
        {notification.type == "code_interaction" && (
          <div>
            <p className="text-[13.5px] text-[#c1c1c1]">
              <Link
                className="font-semibold text-white transition-colors hover:text-[#FF00B2]"
                href={`/${notification.profiles.user_name}`}
              >
                {notification.profiles.user_name}{" "}
              </Link>
              {isValidUrl
                ? "opened your referral link!"
                : "copied your referral code!"}{" "}
              Check{" "}
              <span className="font-semibold text-white">
                {notification.user_codes!.companies.name}{" "}
              </span>{" "}
              to see if it was redeemed 🎉 💸
            </p>
            {/* <div className="mt-2 mb-1 flex gap-3">
            <Button size={'xs'}>Yes, redeemed!</Button>
            <Button size={'xs'} variant={'secondary'}>No, it wasn&apos;t</Button>
          </div> */}
          </div>
        )}
        {notification.type == "new_friend" && (
          <p className="text-[13.5px] text-[#c1c1c1]">
            <Link
              className="font-semibold text-white transition-colors hover:text-[#FF00B2]"
              href={`/${notification.profiles.user_name}`}
            >
              @{notification.profiles.user_name}{" "}
            </Link>
            added you as a friend. They will use your referral codes.
          </p>
        )}
        <p className="pt-[2px] text-[11.5px] text-[#ffffff50]">
          {getTimeAgo(notification.created_at)}
        </p>
      </div>
    </div>
  );
}

export default Notification;
