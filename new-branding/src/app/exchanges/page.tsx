import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Products } from "@/components/common/Products";
import { FeaturesWrapper } from "@/components/common/Features/Wrapper";
import { exchangeFeatures } from "@/mocks/exchange";
import { ExchangeHero } from "@/components/exchange/Hero";
import { apiProduct, cloudProduct } from "@/mocks/common";

export default function Exchange() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <ExchangeHero />
        <TrustedBy />
        <FeaturesWrapper features={exchangeFeatures} />
        <Products products={[apiProduct, cloudProduct]} />
        <Footer />
      </div>
    </div>
  );
}
