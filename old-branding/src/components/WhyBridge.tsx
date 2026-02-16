import Button from "./Button";
import {OrbitingChains} from "./OrbitingChains";


export default function WhyBridge() {
  return (
     <section id="why-utexo" className="relative overflow-visible bg-[#D4D4D4]">
      <div className="mx-auto w-22/23 pl-5 sm:pl-8  sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r border-b py-15 lg:py-[151px]">
        <div className="flex flex-wrap xl:flex-nowrap gap-5 lg:gap-2 items-start sm:items-center">
            <div className="">
               <div className="uppercase tracking-tight text-black font-ingram mb-8 sm:mb-[46px]">
                  Why Utexo Bridge
                </div>
              <div className="flex gap-4 sm:gap-5 lg:gap-4">
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-[280px_280px] gap-4 sm:gap-5 lg:gap-18 mb-4 lg:mb-[42px]">
                    <div className="space-y-4 sm:space-y-4">
                      <h3 className="text-[26px] sm:text-[23px] lg:text-[26px] font-normal tracking-tighter leading-tight">
                        Only RGB-native USDT bridge
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                        between Bitcoin and other chains.
                      </p>
                    </div>

                    <div className="space-y-4 sm:space-y-4">
                      <h3 className="text-[26px] sm:text-[23px] lg:text-[26px] font-normal tracking-tighter leading-tight md:pr-2">
                        Lightning-fast & low-fee
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                        Via Lightning Network.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[280px_280px] gap-4 sm:gap-5 lg:gap-18 mb-4 lg:mb-[42px]">
                    <div className="space-y-4 sm:space-y-4">
                      <h3 className="text-[26px] sm:text-[23px] lg:text-[26px] font-normal tracking-tighter leading-tight">
                        Non-custodial design
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                      with minimal trust assumptions.
                      </p>
                    </div>

                    <div className="space-y-4 sm:space-y-4">
                      <h3 className="text-[26px] sm:text-[23px] lg:text-[26px] font-normal tracking-tighter leading-tight md:pr-2">
                        Stablecoin-first architecture
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                        powering payments and DeFi on Bitcoin.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[280px_280px] gap-4 sm:gap-5 lg:gap-18 mb-4 lg:mb-[42px]">
                    <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-4">
                      <h3 className="text-[26px] sm:text-[23px] lg:text-[26px] font-normal tracking-tighter leading-tight">
                        Privacy by default
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                        through RGB client-side validation.
                      </p>
                    </div>

                    <div className="hidden lg:block col-span-1">
                      <Button
                        href="https://bridge.utexo.com"
                        variant="black"
                        className="w-[120px] h-[48px] sm:w-[132px] sm:h-[52px] lg:w-[144px] lg:h-[55px]"
                      >
                        get started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OrbitingChains/>
        </div>
      </div>
    </section>
  );
}
