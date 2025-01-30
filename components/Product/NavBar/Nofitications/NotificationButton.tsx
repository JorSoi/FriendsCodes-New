"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Global/Button";
import { Tables } from "@/types/database.types";
import Notification from "./Notification";
import { NotificationWithRelations } from "@/types/general.types";

function NotificationButton() {
  const [notifications, setNotifications] = useState<
    NotificationWithRelations[]
  >([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  useEffect(() => {
    const getNotifications = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("notifications")

        .select(
          "*, profiles!notifications_triggered_by_fkey(*), user_codes!notifications_used_referral_fkey(companies(*))",
        )
        .returns<NotificationWithRelations[]>();

      if (data) {
        setNotifications(data);
        setUnreadCount(data.filter((item) => !item.marked_as_read).length);
      } else {
        console.error(error);
      }
    };

    getNotifications();
  }, []);

  return (
    <div className="relative">
      <Button
        variant={"ghost"}
        className="peer flex size-[40px] items-center justify-center p-[unset]"
      >
        <div className="relative">
          <Image
            src={"/icons/bell-default.svg"}
            width={20}
            height={20}
            alt="Notifications"
            className="select-none opacity-[50%] transition-all group-hover:opacity-[70%]"
            draggable={false}
          />
          {unreadCount > 0 && (
            <div className="absolute -right-[35%] -top-[19%] z-[1] flex size-[16px] items-center justify-center rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] text-[13px] font-semibold shadow-[0_0_0_2px_#262538,inset_0_2px_2px_0_#ffffff70]">
              <div className="absolute inset-0 -z-[1] animate-ping rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF]"></div>
              <p>
                {
                  notifications.filter(
                    (item: Tables<"notifications">) => !item.marked_as_read,
                  ).length
                }
              </p>
            </div>
          )}
        </div>
      </Button>
      <div className="invisible opacity-0 absolute -left-[400%] top-[100%] w-[350px] translate-y-1 space-y-1 rounded-xl border-1 border-[#ffffff16] bg-[#1d2336] px-2 pb-2 pt-4 shadow-[0px_0px_50px_0px_#00000050] backdrop-blur-[160px] transition-all peer-focus:visible peer-focus:translate-y-0 peer-focus:opacity-100">
        <h4 className="mb-3 flex items-center gap-2 px-1 text-[15px] font-semibold">
          Notifications{" "}
          <span className="flex size-6 items-center justify-center rounded-lg bg-[#ffffff20] px-2 text-[12px]">
            {unreadCount}
          </span>
        </h4>
        {notifications.map(({ ...notification }) => {
          return <Notification key={notification.id} {...notification} />;
        })}
      </div>
    </div>
  );
}

export default NotificationButton;
