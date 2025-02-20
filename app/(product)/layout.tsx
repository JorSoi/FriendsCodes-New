import type { Metadata } from "next";
import { figtree, inter } from "@/lib/fonts";
import "@/app/globals.css";
import NavBar from "@/components/Product/NavBar/NavBar";
import { getServerProfile } from "@/utils/getServerProfile";
import { redirect } from "next/navigation";
import InvitationLogic from "@/components/Global/InvitationLogic";
import FireWorkLogic from "@/components/Global/FireWorkContext";

export const metadata: Metadata = {
  title: "FriendsCodes - Benefit from referrals!",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getServerProfile();
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="overflow-y-auto overflow-x-hidden bg-[#09071C] pt-[150px] font-figtree sm:pt-[120px]">
        <InvitationLogic>
          <FireWorkLogic>
            <NavBar />
            {children}
          </FireWorkLogic>
        </InvitationLogic>
      </body>
    </html>
  );
}
