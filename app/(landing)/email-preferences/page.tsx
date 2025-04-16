import NavBar from "@/components/Landing/NavBar";
import PreferenceSettings from "@/components/Product/Settings/PreferenceSettings";
import { createClient } from "@/utils/supabase/server";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ uid: string }>;
}) {
  const userId = (await searchParams).uid;
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", userId)
    .single();

  return (
    <>
      <NavBar />
      <div className="flex h-dvh w-dvw items-center justify-center md:items-start md:pt-[25svh]">
        <div className="rounded-3xl border-1 border-[#ffffff20] bg-[#333350] p-5">
          <PreferenceSettings profile={profile} />
        </div>
      </div>
    </>
  );
}

export default page;
