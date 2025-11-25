// src/components/DevProductSuite.tsx
import Image from "next/image";
import Button from "./Button";

export default function DevProductSuite() {
  return (
    <section id="DevProductSuite" className="bg-black text-white">
      <div className="mx-auto w-full sm:w-[640px] md:w-11/12
                      border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px] border-b-0 sm:border-b-[1px]">
        {/* give the right column a bit more width for headline + 2 CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.07fr] gap-4 sm:gap-5 lg:gap-6">
          {/* Cards (left, 2 cols on lg) */}
          <div className="col-span-1 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {[
              {
                icon: "/Time-Clock-Circle-Icon.svg",
                title: "24/7 Availability",
                copy: "Production-ready execution layer for Bitcoin, Lightning, and RGB exposed through a single API.",
              },
              {
                icon: "/Check-Shield-Icon.svg",
                title: "Non-Custodial Security",
                copy: "Users keep full control of their keys and RGB state. Utexo manages routing, not custody.",
              },
              {
                icon: "/Expand-Diagonali-Icon.svg",
                title: "Scalable & Automated",
                copy: "Built for high throughput without the overhead of running nodes or maintaining infrastructure.",
              },
              {
                icon: "/Cog-Icon.svg",
                title: "API & SDK Integration",
                copy: "Connect easily via REST API or our client SDKs.",
              },
            ].map((c, i) => (
              <div key={i} className="flex flex-col border border-white/10 p-6 sm:p-7 lg:p-8">
                <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                  <Image src={c.icon} alt="" width={28} height={28} className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-3 font-sans">
                  {c.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white/50 leading-relaxed font-sans">
                  {c.copy}
                </p>
              </div>
            ))}
          </div>

          {/* Copy block (right) */}
          <div className="col-span-1 flex flex-col justify-between relative p-6 sm:p-8 lg:p-9">
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              <h2 className="text-[40px] sm:text-[48px] lg:text-8xl leading-tight sm:leading-[50px] lg:leading-[90%] tracking-[-0.03em] font-sans">
                Dev Utexo — execution layer<wbr /> as an API.
              </h2>
               <p className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] text-white leading-snug" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Launch private stablecoin payments on Bitcoin with a single API call. Utexo abstracts Bitcoin, Lightning, RGB, and statechain infrastructure so you can focus on your product while users retain non-custodial control of their funds.
              </p>

              {/* two CTAs, same width; wrap on small screens */}
              <div className="mt-2 flex flex-col sm:flex-row gap-3">
                <Button href="https://bridge.utexo.com" variant="black" className="!w-44">
                  Get Access
                </Button>
                <Button href="#api-docs" variant="black" className="!w-44">
                  View Docs
                </Button>
              </div>
            </div>

            {/* Single 3D element for Dev page (Group51.png) */}
            <div
              className="hidden lg:block absolute pointer-events-none animate-floatRing left-20 -bottom-16 z-60"
              style={{  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.40))" }}
            >
              <Image
                src="/Group51.webp"
                alt=""
                width={220}
                height={220}
                className="lg:w-[160px] lg:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
