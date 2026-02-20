import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/common/TrustedBy";
import { Payments } from "@/components/home/Payments";
import { Impact } from "@/components/home/Impact";
import { Operators } from "@/components/home/Operators";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <Hero />
        <TrustedBy />
        <Operators />
        <Payments />
        <Impact />
        <NewsletterCTA />
        <Footer />
      </div>
    </div>
  );
}
