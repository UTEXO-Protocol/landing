"use client";

import { Tags } from "@/components/common/Tags";
import { igamingHeroTags } from "@/mocks/igaming";
import { useReducedMotionVideo } from "@/lib/hooks/useReduceMotion";
import "./index.scss";

export const IGamingHero = () => {
  const videoRef = useReducedMotionVideo();

  return (
    <section className="igaming-hero">
      <video className="igaming-hero__video" poster="/igaming/hero-image.png" autoPlay muted loop playsInline preload="metadata" webkit-playsinline="true" ref={videoRef}>
        <source src="/igaming/igaming-video.webm" type="video/webm" />
        <source src="/igaming/igaming-video.mp4" type="video/mp4" />
      </video>

      <div className="igaming-hero__gradient" />
      <div className="igaming-hero__gradient--bottom" />

      <div className="igaming-hero__content">
        <div className="igaming-hero__text">
          <h1 className="igaming-hero__title">Predictable USDT settlement without volatility.</h1>
          <p className="igaming-hero__description">Maintain margin stability and consistent performance during high-frequency payouts.</p>
        </div>
        <Tags tags={igamingHeroTags} />
      </div>
    </section>
  );
};
