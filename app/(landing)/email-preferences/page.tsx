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
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="rounded-3xl border-1 border-[#ffffff20] bg-[#333350] p-3">
        <PreferenceSettings profile={profile} />
      </div>
    </div>
  );
}

export default page;
