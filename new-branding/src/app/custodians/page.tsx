import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { PspHero } from "@/components/psp/Hero";
import { Products } from "@/components/common/Products";
import { FeaturesWrapper } from "@/components/common/Features/Wrapper";
import { custodiansFeatures } from "@/mocks/custodians";
import { CustodiansHero } from "@/components/custodians/Hero";
import { CloudInfo } from "@/components/common/CloudInfo";

export default function Custodians() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <CustodiansHero />
        <TrustedBy />
        <FeaturesWrapper features={custodiansFeatures} />
        <Products />
        <CloudInfo />
        <Footer />
      </div>
    </div>
  );
}
