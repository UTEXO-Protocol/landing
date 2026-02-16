import Image from "next/image";
import { pspHeroTags } from "@/mocks/psp";
import "./index.scss";

export const PspHero = () => {
  return (
    <section className="psp-hero">
      <Image
        src="/psp/hero-image.png"
        alt="USDT settlement powered by Bitcoin"
        width={1396}
        height={737}
        className="psp-hero__image"
        priority
      />

      <div className="psp-hero__gradient" />

      <div className="psp-hero__content">
        <div className="psp-hero__text">
          <h1 className="psp-hero__title">
            USDT settlement, powered by Bitcoin.
          </h1>
          <p className="psp-hero__description">
            Instant USDT transfers on Bitcoin with fixed costs and privacy by
            design.
          </p>
        </div>

        <div className="psp-hero__tags">
          {pspHeroTags.map((tag) => (
            <span key={tag} className="psp-hero__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
