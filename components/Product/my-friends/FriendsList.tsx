"use client";

import FriendsCard from "./FriendsCard";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FriendWithCodes } from "@/types/general.types";
import AddItemButton from "../AddItemButton";

function FriendsList({ friendsList }: { friendsList: FriendWithCodes[] }) {
  const searchParams = useSearchParams();
  const [list, setList] = useState<FriendWithCodes[]>(friendsList);

  useEffect(() => {
    const filterCodes = () => {
      const searchValue = searchParams.get("search")?.toLowerCase();

      if (searchValue && friendsList) {
        const searchResult = friendsList.filter((friend: FriendWithCodes) => {
          const hasMatchingCode = friend.user_codes.filter((user_code) => {
            return user_code.companies.name
              ?.toLowerCase()
              .includes(searchValue);
          });

          const hasMatchingUserName = friend.profile.user_name
            ?.toLowerCase()
            .includes(searchValue);

          console.log(hasMatchingUserName);
          if (hasMatchingCode.length > 0 || hasMatchingUserName) return true;
        });

        setList(searchResult);
      } else {
        setList(friendsList);
      }
    };

    filterCodes();
  }, [searchParams, friendsList]);

  return (
    <div className="grid grid-cols-4 gap-3 lg:grid-cols-4 md:grid-cols-3 md:gap-2 sm:grid-cols-2">
      {list.map((friend: FriendWithCodes) => {
        return <FriendsCard key={friend.profile.id} {...friend} />;
      })}
      <AddItemButton />
    </div>
  );
}

export default FriendsList;
