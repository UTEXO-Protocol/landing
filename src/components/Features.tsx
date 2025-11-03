export default function Features() {
  return (
    <section id="features" className="bg-[#D4D4D4] px-4 sm:px-0">
      <div className="w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] mx-auto py-12 sm:pt-18 lg:pt-24 border border-[#C6C6C6] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 pl-0 sm:pl-6 lg:pl-[42px]">
          {/* Left Column - FEATURES Label */}
          <div className="w-full sm:w-[120px] lg:w-[150px] shrink-0 pt-0 sm:pt-2">
            <span className="text-[14px] sm:text-[15px] lg:text-[16px] uppercase tracking-tight text-black font-ingram">Features</span>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 ml-0 sm:ml-8 lg:ml-[64px]">
            {/* Header Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 pb-6 sm:pb-7 lg:pb-8 border-b border-[#C6C6C6]">
               <div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>USDT & BTC support</h3>
              </div>
                {/*<h2 className="text-[22px] sm:text-[24px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>USDT & BTC support</h2>*/}
             <div className="items-center flex">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  Real USDT natively on Bitcoin.
                </p>
              </div>              
              {/*<p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]">Real USDT natively on Bitcoin.</p>*/}
            </div>

            {/* Feature 1 - Private & non-custodial */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 py-6 sm:py-7 lg:py-8 border-b border-[#C6C6C6]">
              <div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>Private & non-custodial</h3>
              </div>
              <div className="items-center flex">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  RGB ensures confidentiality of fully private transactions.
                </p>
              </div>
            </div>

            {/* Feature 2 - Zero-fee, instant settlement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 py-6 sm:py-7 lg:py-8 border-b border-[#C6C6C6]">
              <div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>Zero-fee, instant settlement</h3>
              </div>
              <div className="items-center flex">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  Send or trade in under a second, with no fees.
                </p>
              </div>
            </div>

            {/* Feature 3 - Secure & scalable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 py-6 sm:py-7 lg:py-8 border-b border-[#C6C6C6]">
              <div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>Secure & scalable</h3>
              </div>
              <div className="items-center flex">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  Built on Bitcoin, inherits security model. Scales with Lightning and rollups to 100,000+ tx/sec.
                </p>
              </div>
            </div>

            {/* Feature 4 - Staking yield */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 py-6 sm:py-7 lg:py-8 border-b border-[#C6C6C6]">
              <div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>Staking yield</h3>
              </div>
              <div className="items-center flex">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  Earn 3-5 %+ APY on BTC & 10%+ on USDT via LN & RGB.
                </p>
              </div>
            </div>

            {/* Feature 5 - Developer friendly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 lg:gap-16 py-6 sm:py-7 lg:py-8 border-b-0  border-[#C6C6C6]">
              <div>
                <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal" style={{ fontFamily: "'PP Mori', sans-serif" }}>Developer friendly</h3>
              </div>
              <div className="items-center flex">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight pr-0 sm:pr-12 lg:pr-[72px]" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                  Open SDKs/APIs for seamless wallet/ app integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

