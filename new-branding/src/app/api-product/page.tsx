import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { ApiHero } from "@/components/api-product/Hero";
import { Infrastructure } from "@/components/api-product/Infrastructure";
import { ApiFeatures } from "@/components/api-product/ApiFeatures";
import { Operators } from "@/components/api-product/Operators";
import { Innovators } from "@/components/common/Innovators";

export default function ApiProduct() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <ApiHero />
        <TrustedBy />
        <Infrastructure />
        <ApiFeatures />
        <Operators />
        <Innovators />
        <Footer />
      </div>
    </div>
  );
}
