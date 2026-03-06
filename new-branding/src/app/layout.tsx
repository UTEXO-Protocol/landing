import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ToasterClient from "@/components/common/ToasterClient";
import "./index.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://utexo.com"),
  title: "Utexo - Move USDT Instantly and Privately on Bitcoin for Free",
  description: "APIs and products for private, instant payments on an open network. Move USDT for free on Bitcoin and Lightning, natively.",
  keywords:
    "Utexo, USDT, Bitcoin, Lightning Network, stablecoins, private payments, instant payments, zero fee payments, non-custodial, RGB, API payments, stablecoin infrastructure, agentic payments, A2A payments",
  openGraph: {
    title: "Utexo - Move USDT Instantly and Privately on Bitcoin for Free",
    description: "APIs and products for private, instant payments on an open network. Move USDT for free on Bitcoin and Lightning, natively.",
    url: "https://utexo.com",
    siteName: "Utexo",
    images: [
      {
        url: "utexo-og.png",
        width: 1200,
        height: 630,
        alt: "Utexo - Private Stablecoin Payments on Bitcoin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utexo - Move USDT Instantly and Privately on Bitcoin for Free",
    description: "APIs and products for private, instant payments on an open network. Move USDT for free on Bitcoin and Lightning, natively.",
    images: ["utexo-og.png"],
    site: "@utexocom",
    creator: "@utexocom",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Analytics />
        <ToasterClient />
      </body>
    </html>
  );
}
