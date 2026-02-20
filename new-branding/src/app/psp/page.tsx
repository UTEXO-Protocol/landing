import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { PspHero } from "@/components/psp/Hero";
import { Products } from "@/components/psp/Products";
import { UseCases } from "@/components/psp/UseCases";
import { PspFeatures } from "@/components/psp/PspFeatures";

export default function Psp() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <PspHero />
        <TrustedBy />
        <PspFeatures />
        <Products />
        <UseCases />
        <Footer />
      </div>
    </div>
  );
}
