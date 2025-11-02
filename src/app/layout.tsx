
// export const metadata: Metadata = {
//   title: "Utexo - Bitcoin's private stablecoin backbone",
//   description: "Native USDT & BTC, instant zero-fee settlements, lightning fast, private & non-custodial payments.",
// };

import type { Metadata } from "next";
import "./globals.css";
import ToasterClient from "@/components/ToasterClient";


export const metadata: Metadata = {
  metadataBase: new URL('https://utexo.com'),
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
        url: "/utexo-og.png",
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
    images: ["/utexo-og.png"],
    site: "@utexocom",
    creator: "@utexocom",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/fonts/PPMori-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPMori-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <ToasterClient />
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
