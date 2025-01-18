import type { Metadata } from "next";
import { figtree, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FriendsCodes - Benefit from referrals!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden overflow-y-scroll bg-[#09071C] font-figtree">
        {children}
      </body>
    </html>
  );
}
