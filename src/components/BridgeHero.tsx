import Button from "./Button";
import {HeroBeamAnimation} from "./HeroBeamAnimation";

export default function BridgeHero() {
  return (
    <section className="relative overflow-visible bg-[#D4D4D4]">

      <div className="mx-auto w-22/23 pb-10 px-4 md:pb-0 sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r border-b">

        <div className="relative overflow-visible lg:h-[740px] pt-6 lg:pt-0">

          <div className="relative z-10 flex h-full flex-col items-center text-center justify-center ">


            <h1 className="font-sans font-medium tracking-[-0.04em]
                           text-[40px] sm:text-[56px] lg:text-[80px]
                           leading-[1.05] lg:leading-[82px] lg:px-24 max-w-[1040px]">
              Safe and secure cross-chain ecosystem
            </h1>

            <p className="mt-5 max-w-[720px] text-[17px] leading-relaxed font-sans">
              Bridging to bitcoin, enabling non-custodial,
              <br />
              lightning speed, private transactions by design.
            </p>


            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button variant="black" href="#DevCTA" className="w-[180px] h-[48px] text-[12px]">
                LAUNCH BRIDGE
              </Button>
            </div>


            <HeroBeamAnimation className="pt-[63px] md:pb-8 lg:pb-0"/>
          </div>
        </div>
      </div>
    </section>
  );
}
