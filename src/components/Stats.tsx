'use client';

import { useEffect, useRef, useState } from 'react';
import InvestorMarquee from './InvestorMarquee';

export default function Stats() {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Logos that will scroll
  const investorLogos = [
    { src: '/investors/tether_logo_icon_black.png', alt: 'Tether' },
    { src: '/investors/planB_Logo.png', alt: 'Plan B' },
    { src: '/investors/Fulgur_Ventures_Logo.png', alt: 'Fulgur Ventures' },
    { src: '/investors/big_brain_holdings_logo.png', alt: 'Big Brain Holdings' },
    { src: '/investors/hypersphere_ventures_logo.png', alt: 'Hypersphere Ventures' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (prefersReduced) {
        setCount(300);
        return;
      }
      const start = 0;
      const end = 300;        // target: 300B
      const duration = 2000;  // 2s
      const t0 = performance.now();

      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        setCount(start + (end - start) * eased);
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    // Start when visible
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    io.observe(containerRef.current);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative bg-[#D4D4D4] px-4 sm:px-0 ">
      <div className="pb-10 sm:pb-5 w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] border-l-0 sm:border-l-[1px] border-[#C6C6C6] border-r-0 sm:border-r-[1px] mx-auto px-0 sm:px-6 lg:px-0 pt-6 sm:pt-8 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">

        {/* flex wrapper: marquee left, stat right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">

          {/* LEFT: investor marquee, vertically centered vs stat */}
          <div className="w-full lg:flex-1 lg:max-w-[60%] flex items-center">
            {/*<InvestorMarquee logos={investorLogos} speedMs={18000} />*/}
          </div>

          {/* RIGHT: animated stat block */}
          <div className="w-full lg:w-auto flex flex-col text-center sm:text-right lg:text-right pr-0 sm:pr-4 lg:pr-[32px]">
            <div
              ref={containerRef}
              className="text-[60px] sm:text-[90px] lg:text-[130px] font-medium leading-tight sm:leading-[70px] lg:leading-[82px] tracking-[-0.03em] text-black mb-2 font-sans"
              style={{ fontWeight: 500 }}
              aria-label="$300B+"
            >
              ${Math.round(count)}B+
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-[12px] mt-4 sm:pt-3 lg:pt-4 px-3 text-left sm:text-left lg:text-left text-black opacity-50 tracking-wider">
              In stablecoin issuance
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
