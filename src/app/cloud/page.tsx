import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { CloudHero } from "@/components/cloud/Hero";
import { Overview } from "@/components/cloud/Overview";
import { CloudFeatures } from "@/components/cloud/CloudFeatures";
import { CloudOperators } from "@/components/cloud/CloudOperators";
import { Innovators } from "@/components/common/Innovators";

export default function Cloud() {
  return (
    <div className="page">
      <Navigation />
      <CloudHero />
      <TrustedBy />
      <Overview />
      <CloudFeatures />
      <CloudOperators />
      <Innovators />
      <Footer />
    </div>
  );
}
