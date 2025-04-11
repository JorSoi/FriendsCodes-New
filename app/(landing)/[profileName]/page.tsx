import Button from "@/components/Global/Button";
import CodeContainer from "@/components/Global/CodeContainer";
import CodeList from "@/components/Product/my-codes/CodeList";
import NavBar from "@/components/Product/NavBar/NavBar";
import { UserCodeWithRelations } from "@/types/general.types";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { TrackPageView } from "./TrackPageView";
import EmptyState from "../../../components/Landing/[profileName]/EmptyState";
import { Metadata } from "next";
import image from "@/public/metadata/og-personal.png";
import { Tables } from "@/types/database.types";
import { compareDesc } from "date-fns";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ profileName: string }>;
  searchParams: Promise<{ referral: string }> | undefined;
}): Promise<Metadata> {
  return {
    title: `${(await params).profileName}'s Referral Profile`,
    description: `Use referral codes from ${(await params).profileName} to earn cash and rewards and save on deals!`,
    openGraph: {
      type: "website",
      url: "https://friendscodes.app",
      title: (await searchParams)?.referral
        ? `Use my "${(await searchParams)?.referral}" referral and get exclusive benefits!`
        : `Use ${(await params).profileName}'s referral codes!`,
      description: `Both of you will earn cash and other rewards for using the referrals on ${(await params).profileName}'s profile!`,
      siteName: "FriendsCodes",
      images: [
        {
          url: image.src,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: image.src,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ profileName: string }>;
}) {
  const { profileName } = await params;
  let userCodes: UserCodeWithRelations[] | null = [];
  const supabase = await createClient();
  const { user } = await getServerProfile();
  let isAlreadyFriend;
  let profileExists;

  const { data: profileOwner, error } = await supabase
    //get profileOwner based on profileName in url slug
    .from("profiles")
    .select()
    .ilike("user_name", profileName)
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

    const pinnedCodes = (
      userCodeData?.filter((code) => !!code.pinned_at) || []
    ).sort((a: Tables<"user_codes">, b: Tables<"user_codes">) =>
      compareDesc(new Date(a.pinned_at!), new Date(b.pinned_at!)),
    );
    const remainingCodes = userCodeData?.filter(
      (userCodes) => !!!userCodes.pinned_at,
    );

    userCodes = [...(pinnedCodes || []), ...(remainingCodes || [])];
  }

  return (
    <>
      <NavBar />
      <div className="relative mx-[3%] flex min-h-svh flex-col items-center justify-center gap-5 pt-[150px]">
        <CodeContainer
          variant={profileExists ? "block" : "center"}
          className="mb-5"
        >
          {profileExists && (
            <div className="mb-5 flex w-full flex-col items-center justify-center text-center">
              <h1 className="pt-2 text-[1.7rem] font-bold text-white md:text-[1.5rem]">
                {profileName}&apos;s referral profile 🎁 🎉
              </h1>
              <p className="mt-1 max-w-[450px] text-[15px] text-[#a1a3ae] md:hidden">
                Redeem the referral codes below so that you and {profileName}{" "}
                can both collect store benefits!
              </p>
            </div>
          )}

          {profileExists ? (
            <CodeList userCodes={userCodes} viewOnly />
          ) : (
            <EmptyState profileName={profileName} />
          )}

          <div className="absolute inset-x-0 bottom-0 flex h-[100px] items-center justify-center xs:h-[80px]">
            <div className="flex gap-2">
              {user && !isAlreadyFriend && user.id !== profileOwner?.id && (
                <Link href={`/invitation?friend=${profileName}`}>
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
                <Link
                  href={"/auth/registration"}
                  data-umami-event="prod-create-own-profile"
                >
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
          data-umami-event="prod-created-with-friendscodes"
        >
          Created with{" "}
          <span className="bg-gradient-to-r from-[#FF00B2] to-[#D900FF] bg-clip-text text-lg font-semibold leading-normal text-transparent">
            FriendsCodes.app
          </span>
        </Link>
      </div>
      <TrackPageView profileOwner={profileOwner} />
    </>
  );
}
