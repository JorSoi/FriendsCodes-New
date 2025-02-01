import NavBar from "@/components/Product/NavBar/NavBar";
import Tab from "@/components/Product/Tab";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function Page() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  if (!user) {
      redirect('/auth/login')
  }

  return (
    <div className="w-full ">
      
      <div className="flex flex-col gap-10 justify-center items-center">
      <Tab />

      <div className="max-w-[900px] w-full h-[700px] bg-[#D0DAff11]">
      </div>
      

      </div>
    </div>
  );
}

export default Page;
