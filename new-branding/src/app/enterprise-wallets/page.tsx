import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Products } from "@/components/common/Products";
import { FeaturesWrapper } from "@/components/common/Features/Wrapper";
import { enterpiseWalletsFeatures } from "@/mocks/enterprise-wallets";
import { EnterpriseWalletsHero } from "@/components/enterprise-wallet/Hero";
import { CloudInfo } from "@/components/common/CloudInfo";

export default function EnterpriseWallets() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <EnterpriseWalletsHero />
        <TrustedBy />
        <FeaturesWrapper features={enterpiseWalletsFeatures} />
        <Products />
        <CloudInfo />
        <Footer />
      </div>
    </div>
  );
}
