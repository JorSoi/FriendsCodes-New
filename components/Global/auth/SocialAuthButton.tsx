"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function SocialAuthButton({
  provider,
  className,
}: {
  provider: "google" | "twitter" | "facebook";
  className?: string;
}) {
  const handleClick = async () => {
    const supabase = await createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  console.log(`${window.location.origin}/auth/callback`)

  return (
    <button
      className={twMerge(
        "flex flex-grow items-center justify-center rounded-md border-1 border-[#262537] p-[10px] transition-colors hover:bg-[#ffffff1f]",
        className,
      )}
      onClick={handleClick}
    >
      <Image
        src={`/company-logos/${provider}.svg`}
        width={22}
        height={22}
        alt={`${provider} logo`}
        draggable={false}
      />
    </button>
  );
}

export default SocialAuthButton;
