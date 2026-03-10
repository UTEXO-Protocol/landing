"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import "./index.scss";

const logos = [
  { name: "Tether", src: "/trustedBy/tether.svg", width: 140, height: 80 },
  { name: "Portal ventures", src: "/trustedBy/portal-ventures.svg", width: 140, height: 80 },
  { name: "Big brain", src: "/trustedBy/big-brain.png", width: 140, height: 80 },
  { name: "Arcanum Capital", src: "/trustedBy/arcanum.png", width: 120, height: 80 },
  { name: "Ethereal Ventures", src: "/trustedBy/ethereal-ventures.svg", width: 140, height: 80 },
  { name: "Franklin Templeton", src: "/trustedBy/franklinTempleton.webp", width: 140, height: 80 },
  { name: "Auros", src: "/trustedBy/auros.svg", width: 120, height: 80 },
  { name: "Maven11", src: "/trustedBy/maven11.svg", width: 140, height: 80 },
  { name: "Axia8", src: "/trustedBy/axia8.svg", width: 120, height: 80 },
  { name: "Flow Traders", src: "/trustedBy/flowTraders.svg", width: 160, height: 90 },
  { name: "Alchemy", src: "/trustedBy/alchemy.png", width: 140, height: 80 },
  { name: "Paper ventures", src: "/trustedBy/paper-ventures.png", width: 80, height: 80 },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export const TrustedBy = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const gap = 32;
    let setWidth = 0;
    for (let i = 0; i < logos.length; i++) {
      const child = track.children[i] as HTMLElement;
      if (child) {
        setWidth += child.offsetWidth + gap;
      }
    }

    track.style.setProperty("--scroll-width", `-${setWidth}px`);
  }, []);

  return (
    <section className="trusted-by">
      <h2 className="trusted-by__label">Backed By</h2>
      <div className="trusted-by__carousel">
        <div className="trusted-by__carousel-track" ref={trackRef}>
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="trusted-by__item">
              <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="trusted-by__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
