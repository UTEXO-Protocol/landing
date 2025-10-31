// src/components/DevFAQ.tsx
import Image from "next/image";

export default function DevFAQ() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        {/* Top rhythm padding to match other Dev sections */}
        <div className="px-6 sm:px-8 lg:px-9 pt-12 lg:pt-16">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6">
            {/* Left label */}
            <div className="w-full sm:w-[120px] lg:w-[150px] shrink-0 pt-0 sm:pt-2">
              <span
                className="uppercase text-[14px] sm:text-[15px] lg:text-[16px] text-white/80"
                style={{
                  fontFamily: "'Roboto Mono', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: "130%",
                }}
              >
                FAQS
              </span>
            </div>

            {/* Two-column FAQ content */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14">
              {/* Q1 */}
              <div className="pr-0 sm:pr-8 lg:pr-12">
                <h3 className="font-sans text-[26px] leading-[1.15] mb-3">
                  What is UTEXO Cloud?
                </h3>
                <p className="text-[16px] text-white/70 leading-relaxed font-sans">
                  UTEXO Cloud is a non-custodial RGB and Lightning node
                  management platform that ensures uptime, security, and
                  seamless integration.
                </p>
              </div>

              {/* Q2 */}
              <div className="pr-0 sm:pr-8 lg:pr-12">
                <h3 className="font-sans text-[26px] leading-[1.15] mb-3">
                  Can I manage channels and monitor activity?
                </h3>
                <p className="text-[16px] text-white/70 leading-relaxed font-sans">
                  Yes. You can open, close, and monitor Lightning channels, plus
                  track RGB asset activity in real time.
                </p>
              </div>

              {/* Q3 */}
              <div className="pr-0 sm:pr-8 lg:pr-12">
                <h3 className="font-sans text-[26px] leading-[1.15] mb-3">
                  Is my data and funds secure?
                </h3>
                <p className="text-[16px] text-white/70 leading-relaxed font-sans">
                  Absolutely. UTEXO Cloud is fully non-custodial—your private
                  keys never leave your control.
                </p>
              </div>

              {/* Q4 */}
              <div className="pr-0 sm:pr-8 lg:pr-12">
                <h3 className="font-sans text-[26px] leading-[1.15] mb-3">
                  Can the platform scale with my business?
                </h3>
                <p className="text-[16px] text-white/70 leading-relaxed font-sans">
                  Yes. UTEXO Cloud is built for scalability, automatically
                  adapting to increased traffic and infrastructure needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider for section rhythm */}
        <div className="border-t border-[#2A2A2A] mt-12" />
      </div>
    </section>
  );
}
