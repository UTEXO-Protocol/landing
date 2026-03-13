import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { PspHero } from "@/components/psp/Hero";
import { Products } from "@/components/common/Products";
import { UseCases } from "@/components/psp/UseCases";
import { PspFeatures } from "@/components/psp/PspFeatures";
import { apiProduct, cloudProduct } from "@/mocks/common";

export default function Psp() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <PspHero />
        <TrustedBy />
        <PspFeatures />
        <Products products={[apiProduct]} />
        {/* <UseCases /> */}
        <Footer />
      </div>
    </div>
  );
}
