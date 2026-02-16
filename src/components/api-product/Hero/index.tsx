import Image from "next/image";
import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const ApiHero = () => {
  return (
    <section className="api-hero">
      <Image
        src="/api-product/hero-bg.png"
        alt="The Bitcoin Settlement Layer"
        width={1110}
        height={624}
        className="api-hero__image"
        priority
      />

      <div className="api-hero__gradient" />

      <div className="api-hero__content">
        <div className="api-hero__text">
          <h1 className="api-hero__title">The Bitcoin Settlement Layer</h1>
          <div className="api-hero__description">
            <span className="api-hero__description-line">
              Your gateway to USDT on Bitcoin.
            </span>
            <br /><br /> <br />
            <span className="api-hero__description-detail">
              One API to move stablecoins with near-instant settlement, fixed costs, and private execution—built on Bitcoin.
            </span>
          </div>
        </div>
        <div className="api-hero__buttons">
          <Button variant="white" href="/contact">TALK TO SALES</Button>
          <Button variant="white" href="/docs">EXPLORE API</Button>
        </div>
      </div>
    </section>
  );
};
