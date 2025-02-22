import type { Metadata } from "next";
import { figtree, inter } from "@/lib/fonts";
import "@/app/globals.css";
import { Suspense } from "react";
import image from "@/public/metadata/og-default.png";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FriendsCodes - Benefit from referral sharing!",
  description:
    "The easiest place to share and redeem product referrals with anyone. Collect benefits from 4000+ companies worldwide.",
  keywords: [
    "referral codes",
    "refer friend",
    "invite friend",
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
      <body className="overflow-x-hidden overflow-y-scroll bg-[#09071C] font-figtree">
        <Suspense>{children}</Suspense>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
