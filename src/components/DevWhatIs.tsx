// src/components/DevWhatIs.tsx
export default function DevWhatIs() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full px-4 sm:w-[640px] md:w-[900px] lg:w-[1320px]
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
              Dev Utexo is a full-stack infrastructure platform that makes it easy to use RGB — from nodes
              and indexers to APIs and liquidity services.
            </p>

            <p className="font-sans font-medium text-[28px] leading-[1.25] sm:text-[32px] lg:text-[40px] lg:leading-[1.22]">
              Host, monitor, and scale your RGB stack on secure cloud infrastructure with built-in automation,
              observability, and non-custodial signing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
