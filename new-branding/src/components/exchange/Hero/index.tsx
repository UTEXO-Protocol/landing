"use client";

import { Tags } from "@/components/common/Tags";
import { exchangeHeroTags } from "@/mocks/exchange";

import "./index.scss";

export const ExchangeHero = () => {
  return (
    <section className="exchange-hero">
      <video className="exchange-hero__video" poster="/igaming/hero-image.png" autoPlay muted loop playsInline preload="auto">
        <source src="/igaming/igaming-video.webm" type="video/webm" />
        <source src="/igaming/igaming-video.mp4" type="video/mp4" />
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
