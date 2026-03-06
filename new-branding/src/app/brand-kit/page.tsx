import { Metadata } from "next";
import { BrandKitContent } from "@/components/brand-kit/Content";
import { BrandKitHero } from "@/components/brand-kit/Hero";
import { Footer } from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";

export const metadata: Metadata = {
  title: "Brand Kit - Utexo",
  description:
    "Download Utexo logos, brand assets, colors, and typography. Resources to present the Utexo brand clearly and professionally.",
  alternates: { canonical: "https://utexo.com/brand-kit" },
  openGraph: {
    title: "Brand Kit - Utexo",
    description:
      "Download Utexo logos, brand assets, colors, and typography.",
    url: "https://utexo.com/brand-kit",
  },
  twitter: {
    title: "Brand Kit - Utexo",
    description:
      "Download Utexo logos, brand assets, colors, and typography.",
  },
};

const BrandKit = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <BrandKitHero />
        <BrandKitContent />
        <Footer />
      </div>
    </div>
  );
};

export default BrandKit;
