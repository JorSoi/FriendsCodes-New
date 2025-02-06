import { FriendWithCodes } from "@/types/general.types";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Image from "next/image";

function FriendsCard({ ...friend }: FriendWithCodes) {
  return (
    <div className="group relative min-h-[130px] max-h-[180px] w-full cursor-pointer overflow-hidden rounded-lg bg-[#2F304A] p-5 pb-6 transition-colors hover:bg-[#3e405bd9] lg:p-[10px] sm:rounded-md md:max-h-[150px] border-1 border-[#ffffff10]">
      <div className="mb-2 flex flex-wrap gap-2">
        {friend.user_codes.map((user_code) => {
          return (
            <div key={user_code.id} className="bg-[#444560dd]  flex justify-center items-center rounded-md overflow-hidden border-1 border-[#ffffff10]">
            <Image
              key={user_code.id}
              src={user_code.company.logo_url}
              width={30}
              height={30}
              alt=""
              className="object-contain"
              />
              </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F304A] via-[#2f304aea] via-70% to-[#2f304a00] px-5 py-5 lg:p-[10px]">
        <p className="mt-[10px] w-full truncate font-semibold text-white">
          @{friend.profile.user_name}
        </p>
        <p className="text-[13px] text-[#9496A1]">
          Added {getTimeAgo(friend.created_at)}
        </p>
      </div>
    </div>
  );
}

export default FriendsCard;
