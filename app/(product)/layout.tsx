import type { Metadata } from "next";
import { figtree, inter } from "@/lib/fonts";
import "@/app/globals.css";
import NavBar from "@/components/Product/NavBar/NavBar";
import { getServerProfile } from "@/utils/getServerProfile";
import { redirect } from "next/navigation";

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
        redirect('/auth/login')
    }

  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden overflow-y-scroll bg-[#09071C] font-figtree pt-[150px] sm:pt-[120px]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
