// src/components/DevFinalCTA.tsx
import Image from "next/image";
import Button from "./Button";

export default function DevFinalCTA() {
  return (
    <section className="bg-black text-white relative z-10">
      <div className="mx-auto w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="relative px-6 sm:px-8 lg:px-9 py-16 lg:py-24">
          {/* Deco (bottom-left), mimic Dev ProductSuite usage */}
          <div
            className="hidden lg:block  absolute pointer-events-none left-20 -bottom-20"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.40))" }}
          >
            <Image
              src="/Group51.webp"
              alt=""
              width={220}
              height={220}
              className="lg:w-[200px] lg:h-auto"
            />
          </div>

          <div className="max-w-[980px] mx-auto text-center">
            <div
              className="mb-4 uppercase text-[12px] text-white/50"
              style={{
                fontFamily: "'Roboto Mono', sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: "130%",
              }}
            >
              BUILD. &nbsp;SCALE. &nbsp;CONNECT.
            </div>

            {/* Headline matches proportions from your screenshot */}
            <h2 className="font-sans text-[40px] sm:text-[64px] lg:text-[96px] leading-[1.02] tracking-[-0.02em] mb-6">
              Ready to build on RGB?
            </h2>

            <p className="text-[15px] lg:text-[16px] text-white/40 mb-10 max-w-[780px] mx-auto">
              Join the developers scaling the Bitcoin economy with Dev Utexo.
            </p>

            {/* Two CTAs (replacing newsletter input), equal width */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="#request-demo" variant="black" className="!w-48">
                request demo
              </Button>
              <Button href="#talk-to-sales" variant="black" className="!w-48">
                talk to sales
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A]" />
      </div>
    </section>
  );
}
