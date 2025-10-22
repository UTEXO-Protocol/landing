import Image from "next/image";
import Button from "./Button";

export default function ProductSuite() {
  return (
    <section className="max-w-[1320px] mx-auto text-white relative overflow-visible px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-0">
      <div className="w-full sm:w-[640px] md:w-[900px]  bg-black lg:w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0">
            
            <div className="flex flex-col border border-white/10 p-6 sm:p-8 lg:p-[42px]">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/one.png" alt="DEX" width={24} height={24} className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>DEX (Bitcoin-native)</h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[rgba(255,255,255,1)] opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Trade BTC vs USDT instantly on-chain.
              </p>
            </div>

            <div className="flex flex-col border border-white/10 p-6 sm:p-8 lg:p-[42px]">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/two.png" alt="Bridge" width={24} height={24} className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>Cross-chain Bridge</h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[rgba(255,255,255,1)] opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Atomic swaps to/from Ethereum / new/other chains.
              </p>
            </div>

            <div className="flex flex-col border border-white/10 p-6 sm:p-8 lg:p-[42px]">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/three.png" alt="Developer Stack" width={24} height={24} className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>Developer Stack</h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[rgba(255,255,255,1)] opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                RPCs, SDKs, modular integrations.
              </p>
            </div>

            <div className="flex flex-col border border-white/10 p-6 sm:p-8 lg:p-[42px]">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/fore.png" alt="Staking" width={24} height={24} className="w-5 sm:w-5.5 lg:w-6 h-5 sm:h-5.5 lg:h-6" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>Staking / Yield</h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[rgba(255,255,255,1)] opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Earn the highest yield %+ APY on BTC & USDT.
              </p>
            </div>
          </div>

          {/* Right side - Product Suite Content */}
          <div className="col-span-1 lg:col-span-1 flex flex-col justify-between relative p-6 sm:p-8 lg:p-[42px]">
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-medium leading-tight" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Product Suite
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[rgba(255,255,255,1)] opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                UTEXO is scaling Bitcoin&apos;s Lightning and RGB network with a full-stack suite designed for stablecoin adoption and liquidity. Our infrastructure powers instant, private, and low-fee transactions while preserving Bitcoin&apos;s security model.
              </p>
                <Button />
            </div>

            <div className="hidden lg:block absolute lg:bottom-[-90px] lg:right-[20px] pointer-events-none">
              <Image
                src="/last.png"
                alt="3D Element"
                width={120}
                height={120}
                className="lg:w-[185.4px] lg:h-[232px]"
              />
            </div>
            <div className="hidden lg:block absolute lg:bottom-[50px] lg:right-[140px] pointer-events-none">
              <Image
                src="/first.png"
                alt="3D Element"
                width={150}
                height={150}
                className="lg:w-[230px] lg:h-[280px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

