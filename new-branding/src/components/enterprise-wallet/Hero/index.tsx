"use client";

import { Tags } from "@/components/common/Tags";
import { enterpiseWalletsHeroTags } from "@/mocks/enterprise-wallets";

import "./index.scss";

export const EnterpriseWalletsHero = () => {
  return (
    <section className="enterprise-wallet-hero">
      <video className="enterprise-wallet-hero__video" poster="/igaming/hero-image.png" autoPlay muted loop playsInline preload="auto">
        <source src="/igaming/igaming-video.webm" type="video/webm" />
        <source src="/igaming/igaming-video.mp4" type="video/mp4" />
      </video>

      <div className="enterprise-wallet-hero__gradient" />
      <div className="enterprise-wallet-hero__gradient--bottom" />

      <div className="enterprise-wallet-hero__content">
        <div className="enterprise-wallet-hero__text">
          <h1 className="enterprise-wallet-hero__title">Native USDT payments and settlement on Bitcoin</h1>

          <p className="enterprise-wallet-hero__description">Enable Lightning-native BTC&lt;&gt;USDT settlement and yield without leaving your wallet.</p>
        </div>
        <Tags tags={enterpiseWalletsHeroTags} />
      </div>
    </section>
  );
};
