"use client";

import { useRef, useEffect } from "react";
import { Button } from "../CommonButton";

import "./index.scss";

export const CloudInfo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const goToCloud = () => {
    window.open("https://docs.utexo.com/getting-started/editor/cloud", "_blank", "noopener,noreferrer");
  };

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
    <section className="cloud-info">
      <div className="cloud-info__content">
        <div className="cloud-info__text">
          <h2 className="cloud-info__title">Cloud</h2>
          <p className="cloud-info__description">Managed Lightning infrastructure for running stablecoin payments and trading at scale, with built-in yield and zero operational overhead.</p>
        </div>
        <div className="cloud-info__buttons">
          <Button href="/contact-sales">talk to sales</Button>
          <Button variant="grey" onClick={goToCloud}>
            explore cloud
          </Button>
        </div>
      </div>
      <div className="cloud-info__video-wrapper">
        <video ref={videoRef} className="cloud-info__video" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true" poster="/cloud/hero-image.png">
          <source src="/cloud/bitcoin-cloud.webm" type="video/webm" />
          <source src="/cloud/bitcoin-cloud.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
