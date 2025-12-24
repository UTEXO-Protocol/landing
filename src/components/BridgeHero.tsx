import Image from "next/image";
import Button from "./Button";

export default function BridgeHero() {
  return (
    <section className="relative overflow-visible bg-[#D4D4D4]">
      {/* rails like the landing page */}
      <div className="mx-auto w-22/23 pb-10 px-4 md:pb-0 sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r border-b">
        {/* hero height tracks landing proportions */}
        <div className="relative overflow-visible lg:h-[740px]">
          {/* content sits higher (not fully centered) */}
          <div className="relative z-10 flex h-full flex-col items-center text-center justify-center ">

            {/* headline – Mori / font-sans */}
            <h1 className="font-sans font-medium tracking-[-0.03em]
                           text-[40px] sm:text-[56px] lg:text-[80px]
                           leading-[1.05] lg:leading-[82px] lg:px-24 max-w-[1040px]">
              Safe and secure cross-chain ecosystem
            </h1>

            <p className="mt-5 max-w-[720px] text-[17px] leading-relaxed font-sans">
              Bridging to bitcoin, enabling non-custodial, 
              <br/>
              lightning speed, private transactions by design.
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="black" href="#DevCTA" className="w-[180px] h-[48px] text-[12px]">
                LAUNCH BRIDGE
              </Button>
            </div>

            <div className="mt-[63px] md:px-0 px-4">
              <Image 
                src='/hero-banner.webp' 
                alt="banner" 
                width={1631} 
                height={401}
                className="w-[682px]"
              />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
