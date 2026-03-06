"use client";

import { Button } from "../CommonButton";

import "./index.scss";

export const CloudInfo = () => {
  const goToCloud = () => {
    window.open("https://docs.utexo.com/getting-started/editor/cloud", "_blank", "noopener,noreferrer");
  };

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
        <video className="cloud-info__video" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true" poster="/cloud/hero-image.webp">
          <source src="/cloud/bitcoin-cloud.webm" type="video/webm" />
          <source src="/cloud/bitcoin-cloud.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
