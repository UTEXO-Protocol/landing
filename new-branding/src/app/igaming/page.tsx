import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Products } from "@/components/psp/Products";
import { IGamingHero } from "@/components/igaming/Hero";
import { IgamingFeatures } from "@/components/igaming/Features";

export default function IGaming() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <IGamingHero />
        <TrustedBy />
        <IgamingFeatures />
        <Products />
        <Footer />
      </div>
    </div>
  );
}
