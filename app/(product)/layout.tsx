import type { Metadata } from "next";
import { figtree, inter } from "@/lib/fonts";
import "@/app/globals.css";
import NavBar from "@/components/Product/NavBar/NavBar";
import { getServerProfile } from "@/utils/getServerProfile";
import { redirect } from "next/navigation";
import InvitationLogic from "@/components/Global/InvitationLogic";
import FireWorkLogic from "@/components/Global/FireWorkContext";
import image from "@/public/metadata/og-default.png";
import Script from "next/script";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "FriendsCodes Dashboard",
  description:
    "The easiest place to share and redeem product referrals with anyone. Collect benefits from 4000+ companies worldwide.",
  keywords: [
    "referral codes",
    "refer friend",
    "invite friend",
    "share discount",
    "Find referral codes",
    "invite code",
    "referral rewards",
    "redeem referral",
    "promo codes",
  ],
  openGraph: {
    type: "website",
    url: "https://friendscodes.de",
    title: "FriendsCodes - Earn from referral sharing!",
    description:
      "The easiest place to share and redeem product referrals with anyone. Collect benefits from 4000+ companies worldwide.",
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
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
