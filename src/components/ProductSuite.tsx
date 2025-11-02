import Image from "next/image";
import Button from "./Button";

const titleLink =
  "inline-flex items-center gap-1 text-white/90 hover:text-[#FFBE3C] transition-[color,letter-spacing] duration-200 underline underline-offset-4 decoration-white/10 hover:decoration-[#FFBE3C]/60 hover:tracking-[0.015em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE3C]/40 rounded-sm";

export default function ProductSuite() {
  return (
    <section
      id="ProductSuite"
      className="max-w-[1320px] mx-auto text-white relative overflow-visible px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-0"
    >
      <div className="w-full sm:w-[640px] md:w-[900px] bg-black lg:w-[1320px] mx-auto">
        {/* Keep your original 3-col grid; left spans 2 on lg (≈2:1 look) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          
          {/* RIGHT (copy + 3D). First on mobile, second on desktop. */}
          <div className="order-first lg:order-last col-span-1 flex flex-col justify-between relative p-6 sm:p-8 lg:p-9">
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {/* Match DevProductSuite scale */}
              <h2 className="text-[40px] sm:text-[48px] lg:text-[80px] leading-tight sm:leading-[50px] lg:leading-[90%] tracking-[-0.03em] font-sans">
                Product Suite
              </h2>
              <p
                className="text-[14px] sm:text-[15px] lg:text-[16px] text-white leading-snug"
                style={{ fontFamily: "'PP Mori', sans-serif" }}
              >
                Utexo is scaling Bitcoin&apos;s Lightning and RGB network with a full-stack suite designed for stablecoin adoption and liquidity. Our infrastructure powers instant, private, and low-fee transactions while preserving Bitcoin&apos;s security model.
              </p>
              <div className="mt-6">
                <Button href="https://bridge.utexo.com" />
              </div>
            </div>

            {/* 3D: EXACTLY your original anchors (unchanged) */}
            <div
              className="hidden lg:block absolute lg:bottom-[-90px] lg:right-[20px] pointer-events-none animate-floatRing"
              style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))" }}
            >
              <Image
                src="/last.webp"
                alt="3D Coin Element"
                width={150}
                height={150}
                className="lg:w-[185.4px] lg:h-[232px]"
              />
            </div>

            <div className="hidden lg:block absolute lg:bottom-[200px] lg:right-[70px] pointer-events-none" aria-hidden="true">
              <Image
                src="/Group42.png"
                alt="Background"
                width={120}
                height={120}
                className="lg:w-[100px] lg:h-auto"
              />
            </div>

            <div className="hidden lg:block absolute lg:bottom-[50px] lg:right-[160px] pointer-events-none animate-floatOrb">
              <Image
                src="/first.webp"
                alt="3D Element"
                width={240}
                height={240}
                className="lg:w-[230px] lg:h-auto"
              />
            </div>
          </div>

          {/* Mobile decorative bits — unchanged */}
          <div className="lg:hidden relative mt-10 mb-15 pointer-events-none">
            <Image
              src="/Group42.png"
              alt=""
              width={140}
              height={140}
              className="w-[100px] h-auto absolute right-10 bottom-15"
              sizes="(max-width:1023px) 140px, 0"
            />
            <Image
              src="/first.webp"
              alt=""
              width={180}
              height={220}
              className="w-[180px] h-auto absolute -top-20 right-30 animate-floatRing"
              sizes="(max-width:1023px) 180px, 0"
            />
          </div>

          {/* LEFT (cards). Second on mobile, first on desktop (span 2 cols). */}
          <div className="order-2 lg:order-1 col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {/* Card 1 */}
            <div className="flex flex-col border border-white/10 p-6 sm:p-7 lg:p-8">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                {/* 28px icon to match DevProductSuite */}
                <Image src="/one.png" alt="DEX" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3 font-sans">
                DEX (Bitcoin-native)
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Trade BTC vs USDT instantly on-chain.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col border border-white/10 p-6 sm:p-7 lg:p-8">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/two.png" alt="Bridge" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                <a
                  href="https://bridge.utexo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-white/90 hover:text-white transition-colors duration-200"
                >
                  Cross-chain Bridge
                  <span
                    className="ml-1 opacity-0 translate-x-[-2px] group-hover:translate-x-[2px] group-hover:opacity-70 transition-all duration-300 ease-out px-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Atomic swaps to/from Ethereum / new/other chains.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col border border-white/10 p-6 sm:p-7 lg:p-8">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/three.png" alt="Developer Stack" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  <a
                  href="https://thunderstack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-white/90 hover:text-white transition-colors duration-200"
                >
                  Developer Stack
                  <span
                    className="ml-1 opacity-0 translate-x-[-2px] group-hover:translate-x-[2px] group-hover:opacity-70 transition-all duration-300 ease-out"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                RPCs, SDKs, modular integrations.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col border border-white/10 p-6 sm:p-7 lg:p-8">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] mb-16 sm:mb-24 lg:mb-[131px] bg-[#1A1A1A] border-white/10 flex items-center justify-center">
                <Image src="/fore.png" alt="Staking" width={28} height={28} className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal mb-2 sm:mb-2.5 lg:mb-3" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Staking / Yield
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white opacity-50 leading-relaxed" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                Earn the highest yield %+ APY on BTC & USDT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
