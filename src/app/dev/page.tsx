import DevHero from "@/components/DevHero";
import Footer from "@/components/Footer";
// We'll add future sections like DevFeatures, DevPricing, DevFAQ later.

export const metadata = {
  title: "Dev Utexo — RGB & Lightning Infrastructure Cloud",
  description:
    "Launch, monitor, and scale RGB + Lightning with secure non-custodial signing, 24/7 uptime, and zero DevOps overhead.",
};

export default function DevPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* we will reuse Navigation, but themed dark.
         For now, we leave a placeholder so the page renders. */}

      {/* TODO: <Navigation variant="dark" /> */}
      <header className="py-4 sm:py-6 lg:py-[33px] mx-auto left-0 right-0 z-50 bg-black w-full px-4 sm:w-[640px] md:w-[900px] lg:w-[1320px] border-[#2a2a2a] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px] text-white">
        <div className="w-full sm:w-[600px] md:w-[860px] lg:w-[1220px] h-[55px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
            <span className="text-white font-mono text-[14px] uppercase tracking-wide">
              Utexo
            </span>
            <div className="hidden lg:flex items-center lg:gap-10 text-white/80">
              <span className="lg:text-[14px] tracking-wide uppercase font-mono hover:text-white transition-opacity">
                Why Utexo
              </span>
              <span className="lg:text-[14px] tracking-wide uppercase font-mono hover:text-white transition-opacity">
                Products
              </span>
              <span className="lg:text-[14px] tracking-wide uppercase font-mono hover:text-white transition-opacity">
                Features
              </span>
              <span className="lg:text-[14px] tracking-wide uppercase font-mono hover:text-white transition-opacity">
                FAQs
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://bridge.utexo.com"
              className="inline-flex items-center justify-center rounded-[10px] border border-neutral-700 bg-black px-4 py-[10px] text-[11px] font-mono uppercase leading-none tracking-wide text-white hover:bg-white hover:text-black sm:w-[120px] sm:h-[50px] lg:w-[144px] lg:h-[55px]"
            >
              request demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <DevHero />

      {/* TODO: Dev sections go here:
        - "WHAT IS DEV UTEXO?" text block
        - Feature grid cards (24/7 Availability, Non-Custodial, etc.)
        - Comparison section (Why Developers Choose…)
        - Pricing cards
        - Mini FAQ
        - Final CTA
      */}

      {/* Footer from your existing site is light themed.
         We'll eventually want a dark variant for /dev. 
         We'll just render the same Footer now so the page doesn't crash.
      */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
