import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Products } from "@/components/common/Products";
import { IGamingHero } from "@/components/igaming/Hero";
import { FeaturesWrapper } from "@/components/common/Features/Wrapper";
import { igamingFeatures } from "@/mocks/igaming";
import { apiProduct } from "@/mocks/common";

export default function IGaming() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <IGamingHero />
        <TrustedBy />
        <FeaturesWrapper features={igamingFeatures} />
        <Products products={[apiProduct]} />
        <Footer />
      </div>
    </div>
  );
}
