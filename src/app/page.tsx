import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUtexo from "@/components/WhyUtexo";
import ProductSuite from "@/components/ProductSuite";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D4D4D4] text-black w-full">
      <Navigation />
      <Hero />
      <Stats />
      <WhyUtexo />
      <ProductSuite />
      <Features />
      <Quote />
      <FAQ />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}
