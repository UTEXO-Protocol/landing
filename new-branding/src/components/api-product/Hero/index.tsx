"use client";

import { Button } from "@/components/common/CommonButton";
import { useReducedMotionVideo } from "@/lib/hooks/useReduceMotion";

import "./index.scss";

export const ApiHero = () => {
  const videoRef = useReducedMotionVideo();

  return (
    <section className="api-hero">
      <video ref={videoRef} className="api-hero__video" poster="/api-product/hero-image.webp" autoPlay muted loop playsInline preload="auto">
        <source src="/api-product/bitcoin-api.webm" type="video/webm" />
        <source src="/api-product/bitcoin-api.mp4" type="video/mp4" />
      </video>

      <div className="api-hero__gradient" aria-hidden="true" />

      <div className="api-hero__content">
        <div className="api-hero__info">
          <h1 className="api-hero__title">Your gateway to native USDT on Bitcoin.</h1>

          <div className="api-hero__description">
            <p className="api-hero__description-text">One API to move USDT instantly with configurable costs and confidential execution.</p>
            <p className="api-hero__description-detail">Powered by Lightning and RGB.</p>
          </div>
        </div>

        <div className="api-hero__actions">
          <Button variant="white" href="/contact-sales">
            Talk to Sales
          </Button>
          <Button variant="white" href="https://docs.utexo.com/" external={true}>
            Explore API
          </Button>
        </div>
      </div>
    </section>
  );
};
