"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import "./index.scss";

const logos = [
  { name: "Tether", src: "/trustedBy/tether.svg" },
  { name: "Portal ventures", src: "/trustedBy/portal-ventures.svg" },
  { name: "Big brain", src: "/trustedBy/big-brain.png" },
  { name: "Arcanum Captal", src: "/trustedBy/arcanum.png" },
  { name: "Ethereal Ventures", src: "/trustedBy/ethereal-ventures.svg" },
  { name: "Franklin Templenton", src: "/trustedBy/franklinTempleton.svg" },
  { name: "Auros", src: "/trustedBy/auros.svg" },
  { name: "Maven11", src: "/trustedBy/maven11.svg" },
  { name: "Axia8", src: "/trustedBy/axia8.svg" },
  { name: "Alchemy", src: "/trustedBy/alchemy.png" },
  { name: "Paper ventures", src: "/trustedBy/paper-ventures.png" },
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
              <Image src={logo.src} alt={logo.name} width={150} height={70} className="trusted-by__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
