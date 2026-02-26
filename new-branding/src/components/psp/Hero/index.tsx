import { pspHeroTags } from "@/mocks/psp";
import "./index.scss";

export const PspHero = () => {
  return (
    <section className="psp-hero">
      <video className="psp-hero__video" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true">
        <source src="/psp/USDT-bitcoin-rails.mp4" type="video/mp4" />
        <source src="/psp/USDT-bitcoin-rails.webm" type="video/webm" />
      </video>

      <div className="psp-hero__gradient" />
      <div className="psp-hero__gradient--bottom" />

      <div className="psp-hero__content">
        <div className="psp-hero__text">
          <h1 className="psp-hero__title">Real-time USDT settlement, powered by Bitcoin.</h1>
          <p className="psp-hero__description">Instant USDT transfer on the most resilient open network. Boost your margins with predictable costs and consistent performance.</p>
        </div>

        <div className="psp-hero__tags">
          {pspHeroTags.map(tag => (
            <span key={tag} className="psp-hero__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
