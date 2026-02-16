import DevNavigation from "@/components/DevNavigation";
import DevHero from "@/components/DevHero";
import DevWhatIs from "@/components/DevWhatIs";
import DevWhy from "@/components/DevWhy";

import DevProductSuite from "@/components/DevProductSuite";
import DevPricing from "@/components/DevPricing";
import DevFaq from "@/components/DevFAQ";
import DevFinal from "@/components/DevFinalCTA";


import Footer from "@/components/DevFooter";

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
      <DevProductSuite /> 
       <DevWhy /> 
       {/*<DevPricing /> */}
       <DevFaq /> 
       <DevFinal /> 

      {/* Footer (can reuse for now; dark variant later if needed) */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
