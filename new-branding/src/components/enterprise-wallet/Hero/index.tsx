"use client";

import { Tags } from "@/components/common/Tags";
import { enterpiseWalletsHeroTags } from "@/mocks/enterprise-wallets";
import { useReducedMotionVideo } from "@/lib/hooks/useReduceMotion";

import "./index.scss";

export const EnterpriseWalletsHero = () => {
  const videoRef = useReducedMotionVideo();

  return (
    <section className="enterprise-wallet-hero">
      <video className="enterprise-wallet-hero__video" poster="/enterprise-wallet/enterprise-hero.png" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true" ref={videoRef}>
        <source src="/enterprise-wallet/enterprise-hero.webm" type="video/webm" />
        <source src="/enterprise-wallet/enterprise-hero.mp4" type="video/mp4" />
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
