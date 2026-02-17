import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const ApiHero = () => {
  return (
    <section className="api-hero">
      <video className="api-hero__video" poster="/api-product/hero-poster.png" autoPlay muted loop playsInline>
        <source src="/api-product/bitcoin-api.webm" type="video/webm" />
        <source src="/api-product/bitcoin-api.mp4" type="video/mp4" />
      </video>

      <div className="api-hero__gradient" />

      <div className="api-hero__content">
        <div className="api-hero__text">
          <h1 className="api-hero__title">The Bitcoin Settlement Layer</h1>
          <div className="api-hero__description">
            <span className="api-hero__description-line">Your gateway to USDT on Bitcoin.</span>
            <br />
            <br />
            <span className="api-hero__description-detail">One API to move stablecoins with near-instant settlement, fixed costs, and private execution—built on Bitcoin.</span>
          </div>
        </div>
        <div className="api-hero__buttons">
          <Button variant="white" href="/contact">
            TALK TO SALES
          </Button>
          <Button variant="white" href="/docs">
            EXPLORE API
          </Button>
        </div>
      </div>
    </section>
  );
};
