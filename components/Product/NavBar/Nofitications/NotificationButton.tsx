"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Global/Button";
import { Tables } from "@/types/database.types";
import Notification from "./Notification";
import { NotificationWithRelations } from "@/types/general.types";
import HoverMenu from "@/components/Global/HoverMenu/HoverMenu";
import HoverMenuItem from "@/components/Global/HoverMenu/HoverMenuItem";
import { getClientProfile } from "@/utils/getClientProfile";

function NotificationButton() {
  const [notifications, setNotifications] = useState<
    NotificationWithRelations[]
  >([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleReadAll = async () => {
    const supabase = createClient();

    // Update all notifications to read
    const { error } = await supabase
      .from("notifications")
      .update({ marked_as_read: true })
      .eq("marked_as_read", false); // Only update unread ones

    if (!error) {
      // Optimistically update local state
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, marked_as_read: true })),
      );
      setUnreadCount(0);
    }
  };

  useEffect(() => {
    const getNotifications = async () => {
      const supabase = createClient();
      const { user } = await getClientProfile();
      if (!user) return;

      const { data, error } = await supabase
        .from("notifications")
        .select(
          "*, profiles!notifications_triggered_by_fkey(*), user_codes!notifications_used_referral_fkey(*,companies(*))",
        )
        .eq("recipient", user.id)
        .order("created_at", { ascending: false })
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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="relative">
          <Image
            src={"/icons/bell-default.svg"}
            width={17}
            height={17}
            alt="Notifications"
            className="select-none opacity-[50%] transition-all group-hover:opacity-[70%]"
            draggable={false}
          />
          {unreadCount > 0 && (
            <div className="absolute -right-[35%] -top-[30%] z-[1] flex size-[16px] items-center justify-center rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] text-[13px] font-semibold shadow-[0_0_0_2px_#262538,inset_0_2px_2px_0_#ffffff70]">
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
      <HoverMenu
        isVisible={isMenuOpen}
        setIsVisible={setIsMenuOpen}
        className="w-[350px] sm:w-[unset]"
      >
        <div className="mb-3 flex items-center justify-between">
          <h4 className="flex items-center gap-2 px-1 text-[15px] font-semibold">
            Notifications{" "}
            <span className="flex size-6 items-center justify-center rounded-lg bg-[#ffffff20] px-2 text-[13px]">
              {unreadCount}
            </span>
          </h4>
          <p
            onClick={handleReadAll}
            className="cursor-pointer pr-4 text-[13px]"
          >
            Read All
          </p>
        </div>
        {notifications.map(({ ...notification }) => {
          return (
            <HoverMenuItem key={notification.id}>
              <Notification {...notification} />
            </HoverMenuItem>
          );
        })}
      </HoverMenu>
    </div>
  );
}

export default NotificationButton;
