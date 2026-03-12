"use client";

import { Tags } from "@/components/common/Tags";
import { custodiansHeroTags } from "@/mocks/custodians";
import { useReducedMotionVideo } from "@/lib/hooks/useReduceMotion";

import "./index.scss";

export const CustodiansHero = () => {
  const videoRef = useReducedMotionVideo();

  return (
    <section className="custodians-hero">
      <video className="custodians-hero__video" poster="/custodians/custodains-hero.jpg" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true" ref={videoRef}>
        <source src="/custodians/custodains-hero.webm" type="video/webm" />
        <source src="/custodians/custodains-hero.mp4" type="video/mp4" />
      </video>

      <div className="custodians-hero__gradient" />
      <div className="custodians-hero__gradient--bottom" />

      <div className="custodians-hero__content">
        <div className="custodians-hero__text">
          <h1 className="custodians-hero__title">A multi-asset revenue engine for institutional custody</h1>
          <p className="custodians-hero__description">Evolve beyond BTC-only custody. Offer compliant USDT settlement and native yield on BTC and USDT over Lightning.</p>
        </div>
        <Tags tags={custodiansHeroTags} />
      </div>
    </section>
  );
};
