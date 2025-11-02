"use client";

import Image from "next/image";
import { useMemo } from "react";

interface InvestorMarqueeProps {
  logos: { src: string; alt: string }[];
  speedMs?: number; // lower = faster
}

export default function InvestorMarquee({
  logos,
  speedMs = 18000
}: InvestorMarqueeProps) {
  // duplicate for seamless scroll
  const loopLogos = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <div
      className="relative overflow-hidden w-full bg-transparent"
      style={{
        // edge fade
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        minHeight: "64px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        className="
          flex whitespace-nowrap will-change-transform animate-marquee
          [animation-play-state:running]
          hover:[animation-play-state:paused]
        "
        style={{
          animationDuration: `${speedMs}ms`,
          flexShrink: 0
        }}
      >
        {loopLogos.map((logo, idx) => (
          <div
            key={idx}
            className="
              flex items-center justify-center
              flex-shrink-0
              px-8 sm:px-10 lg:px-12
              group
            "
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              draggable={false}
              className="
                h-[28px] sm:h-[32px] lg:h-[36px]
                w-auto
                opacity-70
                transition-opacity duration-200
                group-hover:opacity-90
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
