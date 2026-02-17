import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ToasterClient from "@/components/common/ToasterClient";
import "./index.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://utexo.com"),
  title: "Utexo - Bitcoin's private stablecoin backbone",
  description: "Native USDT & BTC, instant zero-fee settlements, lightning-fast, private & non-custodial payments.",
  keywords: "Utexo, stablecoins, Bitcoin, Lightning, private payments, non-custodial, RGB",
  openGraph: {
    title: "Utexo - Bitcoin's private stablecoin backbone",
    description: "Experience native USDT & BTC, instant zero-fee settlements, lightning-fast, private & non-custodial payments on Bitcoin with Utexo.",
    url: "https://utexo.com",
    siteName: "Utexo",
    images: [
      {
        url: "/common/utexo-og.png",
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
    title: "Utexo - Bitcoin's private stablecoin backbone",
    description: "Native USDT & BTC, instant zero-fee settlements, lightning-fast, private & non-custodial payments.",
    images: ["/common/utexo-og.png"],
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
