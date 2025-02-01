// This layout component only counts for auth pages and ensures that all forms have the identical layout setting. Thus, its just here for positioning/layout purposes.

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function layout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) {
    redirect("/home");
  } else {
    console.log(error);
  }

  return (
    <div className="flex h-screen w-full justify-center pt-[15vh] xs:pt-[6vh]">
      <div className="mx-[3%] xs:mx-[5%]">
        <div className="pb-[15vh]">{children}</div>
      </div>
    </div>
  );
}

export default layout;
