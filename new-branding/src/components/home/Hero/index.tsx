"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) videoRef.current.pause();
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) videoRef.current?.pause();
      else videoRef.current?.play();
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <video ref={videoRef} className="hero__video" poster="/home/hero-image.png" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true">
          <source src="/home/utexo-hero.webm" type="video/webm" />
          <source src="/home/utexo-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero__gradient" />

        <div className="hero__content">
          <div className="hero__info">
            <h1 className="hero__title">Move USDT Instantly and Privately on Bitcoin</h1>
            <p className="hero__description">Products for USDT payments with configurable fees.</p>
            <Button variant="white" href="/api-product">
              EXPLORE API
            </Button>
          </div>
        </div>
      </div>
      <div className="hero__info__mobile">
        <p className="hero__title" role="presentation" aria-hidden="true">Move USDT Instantly and Privately on Bitcoin</p>
        <p className="hero__description">Products for USDT payments with configurable fees.</p>
        <Button variant="white" href="/api-product">
          EXPLORE API
        </Button>
      </div>
    </section>
  );
};
