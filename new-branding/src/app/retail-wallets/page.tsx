import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Products } from "@/components/common/Products";
import { FeaturesWrapper } from "@/components/common/Features/Wrapper";
import { RetailsWalletHero } from "@/components/retails-wallet/Hero";
import { retailsWalletFeatures } from "@/mocks/retailsWallets";
import { apiProduct } from "@/mocks/common";

export default function RetailsWallets() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <RetailsWalletHero />
        <TrustedBy />
        <FeaturesWrapper features={retailsWalletFeatures} />
        <Products products={[apiProduct]} />
        <Footer />
      </div>
    </div>
  );
}
