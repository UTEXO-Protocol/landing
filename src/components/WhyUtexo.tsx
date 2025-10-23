import Image from "next/image";
import Button from "./Button";

export default function WhyUtexo() {
  return (
    <section id="why-utexo" className="bg-[#D4D4D4] px-4 sm:px-0">
      <div className="w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] mx-auto border-[#C6C6C6] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6">
          <div className="w-full sm:w-[120px] lg:w-[150px] ml-0 sm:ml-4 lg:ml-[32px] shrink-0">
            <span className="text-[14px] sm:text-[15px] lg:text-[16px] uppercase tracking-tight text-black font-mono">Why Utexo</span>
          </div>

          <div className="flex-1">
            {/* Row 1 - Three Features in One Rectangle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-5 lg:mb-6">
              {/* Purpose-built */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal leading-tight">Purpose-built for stablecoins on Bitcoin</h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                  Most scaling layers weren&apos;t designed with stablecoins in mind. UTEXO is. We combine Bitcoin&apos;s security with lightning-fast, private, zero-fee settlement — with native USDT support.
                </p>
              </div>

              {/* Privacy & non-custodial */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal leading-tight">Privacy & non-custodial by design</h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                  Transactions are private via RGB, and you always control your own keys.
                </p>
              </div>

              {/* Seamless, instant settlement */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal leading-tight">Seamless, instant settlement</h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                  Trades and transfers settle instantly, with zero fees.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-5 lg:mb-6 mt-6 sm:mt-9 lg:mt-12">
              <div className="col-span-1 rounded-xl space-y-3 sm:space-y-4">
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal">Built on RGB + Lightning</h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                  We leverage the RGB protocol for confidential, non-custodial tokenization and Lightning Network for settlement.
                </p>
              </div>

              <div className="col-span-1 space-y-3 sm:space-y-4">
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-3 sm:mb-4">Yield on BTC & USDT</h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-snug">
                  Stake via LN & RGB to earn 3-5 %+ APY on your holdings. Plus non-custodial staking.
                </p>
              </div>

              <div className="col-span-1 flex md:pt-2 md:px-3 lg:px-4">
                <Button variant="black" className="w-[120px] h-[48px] sm:w-[132px] sm:h-[52px] lg:w-[144px] lg:h-[55px]">
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0 mt-6 sm:mt-9 lg:mt-12 border-t-[1px] border-[#C6C6C6] pt-6 sm:pt-8 lg:pt-0">
          <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <div className="shrink-0">
              <Image
                src="/tether_shield.png"
                alt="Shield"
                width={120}
                height={120}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[188px] lg:h-[188px]"
              />
            </div>
            
            <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] space-y-3 sm:space-y-4">
              <h3 className="text-[22px] sm:text-[25px] lg:text-[28px] font-normal leading-tight">Backed by Tether, Anchored in Bitcoin</h3>
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-black opacity-50 leading-snug">
                Tether is one of the many investors in Utexo recognizing our mission to bring native USDT adoption to Bitcoin&apos;s RGB & Lightning ecosystems.
              </p>
            </div>
          </div>

          <div className="relative overflow-visible h-[280px] w-full sm:h-[320px] sm:w-[300px] lg:h-[358px] lg:w-[343px] shrink-0">
            <Image
              src="/part.jpg"
              alt="Trading Background"
              fill
              className="object-cover"
            />
            
            <div className="hidden sm:block absolute top-1/2 ml-0 sm:ml-[-8px] lg:ml-[-10px] -translate-y-1/2 -left-6 sm:-left-7 lg:-left-8 z-20">
              <Image
                src="/side.png"
                alt="3D Side Element"
                width={65}
                height={85}
                className="w-[70px] h-[55px] sm:w-[78px] sm:h-[60px] lg:w-[85.8px] lg:h-[65.56px]"
              />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div className="text-white space-y-2">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-tight max-w-sm font-mono">
                  We enable native on-chain BTC/USDT trading pairs (already ~8 % of all CEX daily volume, ~$12B+).
                </p>
              </div>
              <div>
                <Button href="https://bridge.utexo.com"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}