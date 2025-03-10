import type { Metadata } from "next";
import { figtree, inter } from "@/lib/fonts";
import "@/app/globals.css";
import { Suspense } from "react";
import image from "@/public/metadata/og-default.png";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";

export const metadata: Metadata = {
  title: "FriendsCodes - Share Codes, Earn Rewards Together!",
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
      <body className="overflow-x-hidden overflow-y-scroll font-figtree [&::-webkit-scrollbar-thumb]:bg-[#4f4f64] [&::-webkit-scrollbar-thumb]:pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full">
        <Suspense>{children}</Suspense>
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
