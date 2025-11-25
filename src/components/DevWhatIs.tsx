// src/components/DevWhatIs.tsx
export default function DevWhatIs() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full px-4 sm:w-[640px] md:w-11/12
                      border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px] border-b">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-10 py-10 lg:pt-12 lg:pb-14">
          {/* Label (col 1) */}
          <div className="lg:col-span-1">
            <span className="font-ingram uppercase tracking-[0.20em] text-[12px] text-white/70">
              What is Dev Utexo?
            </span>
          </div>

          {/* Spacer (col 2) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Copy (cols 3–4) */}
          <div className="lg:col-span-3 space-y-8">
            <p className="font-sans font-medium text-[28px] leading-[1.25] sm:text-[32px] lg:text-[40px] lg:leading-[1.22]">
              Dev Utexo is the SDK and REST API that connects your application to Utexo’s execution layer for native stablecoins and RGB assets on Bitcoin.
            </p>

            <p className="font-sans font-medium text-[28px] leading-[1.25] sm:text-[32px] lg:text-[40px] lg:leading-[1.22]">
              It abstracts Bitcoin nodes, Lightning liquidity, RGB state, and statechain updates so you can offer private USDT transfers and other RGB assets without operating any infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
