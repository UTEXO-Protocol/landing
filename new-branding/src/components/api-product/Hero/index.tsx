"use client";

import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const ApiHero = () => {
  const goToDocs = () => {
    window.open("https://docs.utexo.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="api-hero">
      <video className="api-hero__video" poster="/api-product/hero-image.png" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true">
        <source src="/api-product/bitcoin-api.webm" type="video/webm" />
        <source src="/api-product/bitcoin-api.mp4" type="video/mp4" />
      </video>

      <div className="api-hero__gradient" aria-hidden="true" />

      <div className="api-hero__content">
        <div className="api-hero__info">
          <h1 className="api-hero__title">Your gateway to native USDT on Bitcoin.</h1>

          <div className="api-hero__description">
            <p className="api-hero__description-text">One API to move USDT instantly with fixed costs and confidential execution.</p>
            <p className="api-hero__description-detail">Powered by Lightning and RGB.</p>
          </div>
        </div>

        <div className="api-hero__actions">
          <Button variant="white" href="/contact-sales">
            Talk to Sales
          </Button>
          <Button variant="white" onClick={goToDocs}>
            Explore API
          </Button>
        </div>
      </div>
    </section>
  );
};
