// src/components/DevWhy.tsx
export default function DevWhy() {
  return (
    <section className="bg-black text-white relative">
      <div className="mx-auto w-full sm:w-[640px] md:w-[900px] lg:w-[1320px]
                      border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px] border-b">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-10 py-12 lg:py-24">
          <div className="lg:col-span-2">
            <h2 className="font-sans font-medium text-[44px] leading-[1.02] sm:text-[52px] lg:text-[60px] lg:leading-[1.02] tracking-[-0.01em] pl-10">
              Why <br className="hidden sm:block" />
              Developers <br className="hidden sm:block" />
              Choose Dev <br className="hidden sm:block" />
              Utexo
            </h2>
          </div>

          <div className="lg:col-span-3 relative pr-20">
            <div className="grid grid-cols-3 items-end pb-4">
              <div className="text-[16px] opacity-0 select-none"></div>
              <div className="text-[20px] font-sans font-medium">Run Yourself</div>
              <div className="text-[20px] font-sans font-medium">Dev Utexo</div>
            </div>

            {[
              { label: "Setup Time", self: "Days–Weeks", dev: "Minutes" },
              { label: "Maintenance", self: "Full DevOps", dev: "Fully Managed" },
              { label: "Security", self: "Manual configuration", dev: "Built-in non-custodial model" },
              { label: "Scalability", self: "Limited", dev: "On-demand horizontal scaling" },
              { label: "Uptime", self: "Unreliable", dev: "24/7 monitored" },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 py-5 lg:py-6 border-t border-[#2A2A2A] ${i === 0 ? "mt-2" : ""}`}>
                <div className="text-[16px] text-white/50">{row.label}</div>
                <div className="text-[16px]">{row.self}</div>
                <div className="text-[16px]">{row.dev}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
