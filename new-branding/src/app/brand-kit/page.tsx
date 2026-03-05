import { Metadata } from "next";
import { BrandKitContent } from "@/components/brand-kit/Content";
import { BrandKitHero } from "@/components/brand-kit/Hero";
import { Footer } from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";

export const metadata: Metadata = {
  alternates: { canonical: "https://utexo.com/brand-kit" },
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
