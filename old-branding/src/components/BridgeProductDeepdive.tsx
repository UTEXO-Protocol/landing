import Image from "next/image";
import Button from "./Button";

export default function BridgeProductDeepdive() {
  return (
    <section
      className="w-full mx-auto text-white relative overflow-hidden lg:overflow-visible py-0 sm:py-0 lg:py-0"
    >
      <div className="w-22/23 sm:w-[640px] md:w-11/12 bg-black mx-auto">
        {/* Keep your original 3-col grid; left spans 2 on lg (≈2:1 look) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 md:gap-6">

          {/* LEFT (copy + 3D) */}
          <div className="order-1 col-span-1 flex flex-col justify-between relative pt-14 px-4 pb-11.5 md:px-15 md:pt-15">
            <div className="space-y-5 sm:space-y-7 lg:space-y-8">
              {/* Match DevProductSuite scale */}
              <h2 className="text-4xl sm:text-[48px] md:text-6xl lg:text-7xl leading-tight sm:leading-[50px] lg:leading-[95%]">
                Product deepdive
              </h2>
              <p
                className="text-[14px] sm:text-[15px] lg:text-[16px] text-white leading-snug"
              >
                Utexo is scaling Bitcoin&apos;s Lightning and RGB network with a full-stack suite designed for stablecoin adoption and liquidity. Our infrastructure powers instant, private, and low-fee transactions while preserving Bitcoin&apos;s security model.
              </p>
              <div className="mt-6">
                <Button href="https://bridge.utexo.com" />
              </div>
            </div>

            <div className="absolute top-[380px] right-[17px] md:top-auto md:right-auto md:bottom-[143px] md:left-[90px] pointer-events-none" aria-hidden="true">
              <Image
                src="/Group42.webp"
                alt="Background"
                width={120}
                height={120}
                className="lg:w-[100px] lg:h-auto"
              />
            </div>

            <div className="absolute top-[600px] md:top-auto -right-30 md:right-auto md:-bottom-[135px] md:left-40 pointer-events-none animate-floatOrb z-20">
              <Image
                src="/first.webp"
                alt="3D Element"
                width={240}
                height={240}
                className="lg:w-[230px] lg:h-auto"
              />
            </div>
          </div>

          {/* RIGHT (cards) */}
          <div className="order-last col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {/* Card 1 */}
            <div className="flex flex-col border border-white/10 p-5 md:p-6 lg:p-7.5">
              <div className="w-[78px] h-[78px] mb-4 sm:mb-24 lg:mb-[168px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                {/* 28px icon to match DevProductSuite */}
                <Image src="/multichain.svg" alt="DEX" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[26px] sm:text-[23px] lg:text-[26px]  mb-2 sm:mb-1 tracking-tighter">
               Multi-chain support
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed leading-tight" >
                Trade BTC ↔ USDT instantly onchain
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col border border-white/10 p-5 md:p-6 lg:p-7.5">
              <div className="w-[78px] h-[78px] mb-4 sm:mb-24 lg:mb-[168px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/bitcoin.svg" alt="Bridge" width={28} height={28} className="w-5 h-5" />
              </div>

              <h3
                className="text-[26px] sm:text-[23px] lg:text-[26px]  mb-2 sm:mb-1 tracking-tighter leading-tight"
                
              >
                  <a
                  href="https://bridge.utexo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-white/90 hover:text-white transition-colors duration-200"
                >
                  Bitcoin focused
                  <span
                    className="ml-1 opacity-0 translate-x-[-2px] group-hover:translate-x-[2px] group-hover:opacity-70 transition-all duration-300 ease-out"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </h3>

              <p
                className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed"
                
              >
                Atomic swaps to/from Ethereum /
                <br/>
                Tron/ other chains
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col border border-white/10 p-5 md:p-6 lg:p-7.5">
              <div className="w-[78px] h-[78px] mb-4 sm:mb-24 lg:mb-[168px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/label.svg" alt="Developer Stack" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[26px] sm:text-[23px] lg:text-[26px]  mb-2 sm:mb-1 tracking-tighter leading-tight">
                  <a
                  href="/dev"
                  target="_self"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-white/90 hover:text-white transition-colors duration-200"
                >
                  Optimized throughput and low fees
                  <span
                    className="ml-1 opacity-0 translate-x-[-2px] group-hover:translate-x-[2px] group-hover:opacity-70 transition-all duration-300 ease-out"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </h3>
                <p
                  className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed"
                  
                >
                  RPC, SDKs, modular integrations
                </p>

            </div>

            {/* Card 4 */}
            <div className="flex flex-col border border-white/10 p-5 md:p-6 lg:p-7.5">
              <div className="w-[78px] h-[78px] mb-4 sm:mb-24 lg:mb-[168px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/compound.svg" alt="Staking" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[26px] sm:text-[23px] lg:text-[26px]  mb-2 sm:mb-1 tracking-tighter leading-tight">
                Trusteless architecture
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed">
                Earn the highest yield %+ APY on BTC & USDT 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
