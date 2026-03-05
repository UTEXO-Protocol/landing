import { Metadata } from "next";

import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { CloudHero } from "@/components/cloud/Hero";
import { Overview } from "@/components/cloud/Overview";
import { CloudFeatures } from "@/components/cloud/CloudFeatures";
import { Innovators } from "@/components/common/Innovators";

export const metadata: Metadata = {
  alternates: { canonical: "https://utexo.com/cloud" },
};

export default function Cloud() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <CloudHero />
        <TrustedBy />
        <Overview />
        <CloudFeatures />
        {/* <Innovators /> */}
        <Footer />
      </div>
    </div>
  );
}
