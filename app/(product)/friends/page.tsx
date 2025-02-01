import Tab from "@/components/Product/Tab";
import { getServerProfile } from "@/utils/getServerProfile";
import { redirect } from "next/navigation";

async function Page() {
  const { user } = await getServerProfile();
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
