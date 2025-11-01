// src/components/DevHero.tsx
import Image from "next/image";
import Button from "./Button";

export default function DevHero() {
  return (
    <section className="relative overflow-visible bg-black text-white">
      {/* rails like the landing page */}
      <div className="mx-auto w-full px-4 sm:w-[640px] md:w-[900px] lg:w-[1320px]
                      border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]
                      border-t border-b">
        {/* hero height tracks landing proportions */}
        <div className="relative overflow-visible h-[400px] sm:h-[550px] lg:h-[740px]">
          {/* content sits higher (not fully centered) */}
          <div className="relative z-10 flex h-full flex-col items-center text-center
                          justify-center ">
            {/* kicker */}
            <p className="font-ingram uppercase tracking-[0.20em] text-[10px] text-white/60 mb-3">
              Build. Scale. Connect.
            </p>

            {/* headline – Mori / font-sans */}
            <h1 className="font-sans font-medium tracking-[-0.03em]
                           text-[36px] sm:text-[56px] lg:text-[80px]
                           leading-[1.05] lg:leading-[82px] lg:px-24 max-w-[1040px]">
              The Infrastructure<wbr/> Cloud 
              for RGB and<wbr/> Lightning Network.
            </h1>

            {/* subhead – Mori / font-sans */}
            <p className="mt-5 max-w-[720px] text-[14px] leading-relaxed text-white/70 font-sans">
              Simplify deployment and management of RGB and Lightning with
              enterprise-grade reliability and zero DevOps overhead.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="black" href="#request-demo" className="w-[180px] h-[48px] text-[12px]">
                request demo
              </Button>
              <Button variant="black" href="#docs" className="w-[160px] h-[48px] text-[12px]">
                view docs
              </Button>
            </div>
          </div>

          {/* 3D ring — big asset (/last.png), position like Figma */}
          <div className="pointer-events-none absolute z-0 hidden lg:block lg:-bottom-20 lg:left-52 animate-floatOrb">
            <Image src="/last.webp" alt="" width={260} height={260} className="w-[200px] h-auto" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
