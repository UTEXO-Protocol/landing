"use client";

import { Tags } from "@/components/common/Tags";
import { exchangeHeroTags } from "@/mocks/exchange";
import { useReducedMotionVideo } from "@/lib/hooks/useReduceMotion";

import "./index.scss";

export const ExchangeHero = () => {
  const videoRef = useReducedMotionVideo();

  return (
    <section className="exchange-hero">
      <video className="exchange-hero__video" poster="/exchanges/exchanges-hero.png" autoPlay muted loop playsInline preload="metadata" webkit-playsinline="true" ref={videoRef}>
        <source src="/exchanges/exchanges-hero.webm" type="video/webm" />
        <source src="/exchanges/exchanges-hero.webm" type="video/mp4" />
      </video>

      <div className="exchange-hero__gradient" />
      <div className="exchange-hero__gradient--bottom" />

      <div className="exchange-hero__content">
        <div className="exchange-hero__text">
          <h1 className="exchange-hero__title">Settle as fast as your order books</h1>
          <p className="exchange-hero__description">Settle USDT on Lightning with predictable costs and reduce capital fragmentation for high-frequency traders.</p>
        </div>
        <Tags tags={exchangeHeroTags} />
      </div>
    </section>
  );
};
