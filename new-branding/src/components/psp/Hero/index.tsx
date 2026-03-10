import { pspHeroTags } from "@/mocks/psp";
import "./index.scss";
import { Tags } from "@/components/common/Tags";

export const PspHero = () => {
  return (
    <section className="psp-hero">
      <video className="psp-hero__video" poster="/psp/hero-image.webp" autoPlay muted loop playsInline preload="metadata">
        <source src="/psp/USDT-bitcoin-rails.webm" type="video/webm" />
        <source src="/psp/USDT-bitcoin-rails.mp4" type="video/mp4" />
      </video>

      <div className="psp-hero__gradient" />
      <div className="psp-hero__gradient--bottom" />

      <div className="psp-hero__content">
        <div className="psp-hero__text">
          <h1 className="psp-hero__title">Real-time USDT settlement, powered by Bitcoin.</h1>
          <p className="psp-hero__description">Instant USDT transfer on the most resilient open network. Boost your margins with predictable costs and consistent performance.</p>
        </div>

        <Tags tags={pspHeroTags} />
      </div>
    </section>
  );
};
