"use client";

import { Tags } from "@/components/common/Tags";
import { retailsWalletHeroTags } from "@/mocks/retailsWallets";

import "./index.scss";

export const RetailsWalletHero = () => {
  return (
    <section className="retails-wallet-hero">
      <video className="retails-wallet-hero__video" poster="/igaming/hero-image.png" autoPlay muted loop playsInline preload="metadata">
        <source src="/retails-wallets/retails-hero.webm" type="video/webm" />
        <source src="/retails-wallets/retails-hero.mp4" type="video/mp4" />
      </video>

      <div className="retails-wallet-hero__gradient" />
      <div className="retails-wallet-hero__gradient--bottom" />

      <div className="retails-wallet-hero__content">
        <div className="retails-wallet-hero__text">
          <h1 className="retails-wallet-hero__title">Private USDT payments, natively on Bitcoin</h1>
          <p className="retails-wallet-hero__description">Native BTC&lt;&gt;USDT swaps and private USDT transfers directly inside your wallet.</p>
        </div>
        <Tags tags={retailsWalletHeroTags} />
      </div>
    </section>
  );
};
