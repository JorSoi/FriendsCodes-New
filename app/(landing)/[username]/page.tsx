import Button from "@/components/Global/Button";
import CodeContainer from "@/components/Global/CodeContainer";
import CodeList from "@/components/Product/my-codes/CodeList";
import NavBar from "@/components/Product/NavBar/NavBar";
import { UserCodeWithRelations } from "@/types/general.types";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { TrackPageView } from "./TrackPageView";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  let userCodes: UserCodeWithRelations[] | null = [];
  const supabase = await createClient();
  const { user } = await getServerProfile();
  let isAlreadyFriend;
  let profileExists;

  const { data: profileOwner, error } = await supabase
    //get profileOwner based on username in url slug
    .from("profiles")
    .select()
    .eq("user_name", username)
    .single();
  if (!error) profileExists = true;



  if (profileOwner?.id && user?.id) {
    //Check if visitor and profileOwner are already friends
    const { data, error } = await supabase
      .from("friends")
      .select()
      .eq("user_id", user.id)
      .eq("friend_id", profileOwner.id);
    if (!error && data.length > 0) isAlreadyFriend = true;
  }

  if (profileOwner?.id) {
    //Get usercodes from profileOwner
    const { data: userCodeData } = await supabase
      .from("user_codes")
      .select(`*, companies(*)`)
      .eq("user_id", profileOwner.id)
      .order("created_at", { ascending: false });

    userCodes = userCodeData;
  }

  return (
    <>
      <NavBar />
      <div className="relative mx-[3%] flex min-h-svh flex-col items-center justify-center gap-5 pt-[150px]">
        <CodeContainer
          className={clsx("mb-5", {
            "flex items-center justify-center": !profileExists,
          })}
        >
          <div
            className={clsx(
              "mb-5 flex w-full flex-col items-center justify-center text-center",
              { "hidden": !profileExists },
            )}
          >
            <h1 className="pt-2 text-[1.7rem] font-bold">
              {username}&apos;s referral profile 🎁 🎉
            </h1>
            <p className="mt-1 max-w-[450px] text-[15px] text-[#a1a3ae]">
              Redeem the referral codes below so that you and {username} can
              both collect store benefits!
            </p>
          </div>

          {profileExists ? (
            <CodeList userCodes={userCodes} viewOnly />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex size-[50px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px] text-2xl">
                🤔
              </div>
              <h1 className="pt-6 text-xl font-bold">
                Hmm... never heard of &quot;{username}&quot;
              </h1>
              <p className="mt-2 max-w-[500px] text-[#a1a3ae]">
                We sadly couldn&apos;t find this profile. Please check the link
                again or tell the one who shared it with you.
              </p>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 flex h-[100px] items-center justify-center xs:h-[80px]">
            <div className="flex gap-2">
              {/* {user && (
                <Link href={"/home"}>
                  <Button variant={"secondary"} className="flex gap-2 px-5 items-center ">
                    <Image
                      className="rotate-180"
                      src={"/icons/chevron.svg"}
                      width={6}
                      height={6}
                      alt=""
                    />
                    Back
                  </Button>
                </Link>
              )} */}
              {user && !isAlreadyFriend && (
                <Link href={`/invitation?friend=${username}`}>
                  <Button className="flex items-center gap-2">
                    <Image
                      src={"/icons/add-friend.svg"}
                      width={16}
                      height={16}
                      alt=""
                    />
                    Add to friends
                  </Button>
                </Link>
              )}
              {!user && (
                <Link href={"/auth/registration"}>
                  <Button className="flex items-center gap-2">
                    Build your own referral profile!
                    <Image
                      src={"/icons/chevron.svg"}
                      width={6}
                      height={6}
                      alt=""
                    />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CodeContainer>
        <Link
          href={"/"}
          className="inline-block h-[100px] text-center text-lg font-medium xs:h-[80px]"
        >
          Created with{" "}
          <span className="bg-gradient-to-r from-[#FF00B2] to-[#D900FF] bg-clip-text text-lg font-semibold leading-normal text-transparent">
            FriendsCodes.de
          </span>
        </Link>
      </div>
      <TrackPageView profileOwner={profileOwner}/>
    </>
  );
}


