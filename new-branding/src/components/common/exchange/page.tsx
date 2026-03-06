import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Products } from "@/components/common/Products";
import { FeaturesWrapper } from "@/components/common/Features/Wrapper";
import { exchangeFeatures } from "@/mocks/exchange";
import { ExchangeHero } from "@/components/exchange/Hero";
import { CloudInfo } from "@/components/common/CloudInfo";

export default function Exchange() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <ExchangeHero />
        <TrustedBy />
        <FeaturesWrapper features={exchangeFeatures} />
        <Products />
        <CloudInfo />
        <Footer />
      </div>
    </div>
  );
}
