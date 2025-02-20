"use client";

import { Tables } from "@/types/database.types";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

//This component's sole responsibility is to increment the page view count, It has to be its own component since Nextjs would otherwise call the function twice on both ssr and client rendering.
export const TrackPageView = ({
  profileOwner,
}: {
  profileOwner: Tables<"profiles"> | null;
}) => {
  const supabase = createClient();

  useEffect(() => {
    if (!profileOwner) return;
    const incrementProfileView = async () => {
      //Track visit count for profileOwner
      const { data, error } = await supabase.rpc(
        "increment_profile_visitor_count",
        { profile_owner_id: profileOwner.id },
      );
      console.log(data, error);
    };
    incrementProfileView();
  }, []);

  return null;
};
