import DevNavigation from "@/components/DevNavigation";
import DevHero from "@/components/DevHero";
import DevWhatIs from "@/components/DevWhatIs";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Dev Utexo — RGB & Lightning Infrastructure Cloud",
  description:
    "Launch, monitor, and scale RGB + Lightning with secure non-custodial signing, 24/7 uptime, and zero DevOps overhead.",
};

export default function DevPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Dark nav shared across Dev pages */}
      <DevNavigation />

      {/* Hero */}
      <DevHero />

      {/* TODO: upcoming Dev sections (same order we agreed) */}
      <DevWhatIs />
      {/* <DevProductSuite /> */}
      {/* <DevWhy /> */}
      {/* <DevPricing /> */}
      {/* <DevFaq /> */}
      {/* <NewsletterCTA /> */}

      {/* Footer (can reuse for now; dark variant later if needed) */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
