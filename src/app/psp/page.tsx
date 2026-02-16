import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { PspHero } from "@/components/psp/Hero";
import { PspFeatures } from "@/components/psp/PspFeatures";
import { Products } from "@/components/psp/Products";
import { UseCases } from "@/components/psp/UseCases";

export default function Psp() {
  return (
    <div className="page">
      <Navigation />
      <PspHero />
      <TrustedBy />
      <PspFeatures />
      <Products />
      <UseCases />
      <Footer />
    </div>
  );
}
