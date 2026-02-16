import Image from "next/image";
import Button from "./Button";

export default function DevPricing() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full sm:w-[640px] md:w-11/12
                      border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">

        {/* Header row: left label + right label */}
        <div className="flex items-center justify-between px-6 sm:px-8 lg:px-9 pt-10 lg:pt-14 pb-6">
          <span
            className="uppercase text-[12px] sm:text-[12px] lg:text-[16px] text-white"
            style={{
              fontFamily: "'Ingram Mono', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: "130%",
            }}
          >
            Pricing&nbsp;&nbsp;Plans
          </span>
          <span
            className="uppercase text-[12px] sm:text-[12px] lg:text-[16px] text-white/50"
            style={{
              fontFamily: "'Ingram Mono', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: "130%",
            }}
          >
            Utexo&nbsp;&nbsp;Clouds
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#2A2A2A]">
          {/* Starter */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#2A2A2A] p-6 sm:p-8 lg:p-10">
            <h3 className="text-[22px] font-sans mb-6">Starter</h3>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-[66px] leading-[110%] tracking-[-0.03em] font-sans">$35</span>
              <span className="text-[14px] opacity-50">/month</span>
            </div>

            <ul className="space-y-4 text-white/50 text-[16px]">
              <li>1 RGB Lightning Node (RLN),</li>
              <li>250,000 API calls</li>
              <li>Chat support</li>
            </ul>

            <div className="mt-8">
              <Button href="#start" variant="black" className="w-[180px]">start free trial</Button>
            </div>
          </div>

          {/* Growth */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#2A2A2A] p-6 sm:p-8 lg:p-10">
            <h3 className="text-[22px] font-sans mb-6">Growth</h3>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-[66px] leading-[110%] tracking-[-0.03em] font-sans">$99</span>
              <span className="text-[14px] opacity-50">/month</span>
            </div>

            <ul className="space-y-4 text-white/50 text-[16px]">
              <li>6 RGB Lightning Nodes (RLN),</li>
              <li>1,000,000 API calls</li>
              <li>Chat support</li>
            </ul>

            <div className="mt-8">
              <Button href="#start" variant="black" className="w-[180px]">start free trial</Button>
            </div>
          </div>

          {/* Scale */}
          <div className="p-6 sm:p-8 lg:p-10">
            <h3 className="text-[22px] font-sans mb-6">Scale</h3>

            <div className="mb-6">
              {/* “Custom” set to 66px per Figma */}
              <span className="block text-[66px] leading-[110%] tracking-[-0.03em] font-sans">Custom</span>
            </div>

            <ul className="space-y-4 text-white/50 text-[16px]">
              <li>Unlimited compute credits</li>
              <li>Enterprise SLA, and multi-user</li>
              <li>Support</li>
            </ul>

            <div className="mt-8">
              <Button href="#start" variant="black" className="w-[180px]">start free trial</Button>
            </div>
          </div>
        </div>

        {/* bottom divider to match the rest of the page rhythm */}
        <div className="border-t border-[#2A2A2A]" />
      </div>
    </section>
  );
}
