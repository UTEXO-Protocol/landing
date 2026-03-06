"use client";

import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const CloudHero = () => {
  const goToCloud = () => {
    window.open("https://docs.utexo.com/getting-started/editor/cloud", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="cloud-hero">
      <video className="cloud-hero__video" autoPlay muted loop playsInline preload="auto" poster="/cloud/hero-image.png">
        <source src="/cloud/bitcoin-cloud.webm" type="video/webm" />
        <source src="/cloud/bitcoin-cloud.mp4" type="video/mp4" />
      </video>

      <div className="cloud-hero__gradient" />

      <div className="cloud-hero__content">
        <div className="cloud-hero__text">
          <h1 className="cloud-hero__title">One-Click Cloud</h1>
          <p className="cloud-hero__description">Fully managed Lightning Network infrastructure for native USDT settlement and enterprise-grade yield.</p>
        </div>
        <div className="cloud-hero__gradient--mobile" />
        <div className="cloud-hero__buttons">
          <Button variant="white" href="/contact-sales">
            TALK TO SALES
          </Button>
          <Button variant="white" onClick={goToCloud}>
            Explore Cloud
          </Button>
        </div>
      </div>
    </section>
  );
};
