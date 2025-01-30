"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Notifications() {
  const [unreadNotifications, setUnreadNotifications] = useState<number>(0);

  useEffect(() => {
    const getNotifications = async () => {
      const supabase = createClient();
      const { count, error } = await await supabase
        .from("notifications")
        .select("*", { count: "exact" })
        .eq("marked_as_read", false);
      if (count) {
        setUnreadNotifications(count);
      } else {
        console.log(error);
      }
    };

    getNotifications();
  }, []);

  return (
    <div className="group flex size-[40px] cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[#ffffff16]">
      <div className="relative">
        <Image
          src={"/icons/bell-default.svg"}
          width={20}
          height={20}
          alt="Notifications"
          className="opacity-[50%] transition-all group-hover:opacity-[70%]"
          draggable={false}
        />
        {unreadNotifications > 0 && (
          <div className="absolute -right-[35%] -top-[19%] z-[1] flex size-[16px] items-center justify-center rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] text-[13px] font-semibold shadow-[0_0_0_2px_#262538,inset_0_2px_2px_0_#ffffff70]">
            <div className="absolute inset-0 -z-[1] animate-ping rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF]"></div>
            <p>{unreadNotifications}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
