import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const ApiHero = () => {
  return (
    <section className="api-hero">
      <video className="api-hero__video" autoPlay muted loop playsInline>
        <source src="/api-product/bitcoin-api.webm" type="video/webm" />
        <source src="/api-product/bitcoin-api.mp4" type="video/mp4" />
      </video>

      <div className="api-hero__gradient" aria-hidden="true" />

      <div className="api-hero__content">
        <div className="api-hero__info">
          <h1 className="api-hero__title">Your gateway to USDT on Bitcoin.</h1>

          <div className="api-hero__description">
            <p className="api-hero__description-text">One API to move stablecoins with real-time settlement, fixed costs and confidential execution.</p>
            <p className="api-hero__description-detail">Powered by Lightning Network and RGB.</p>
          </div>
        </div>

        <div className="api-hero__actions">
          <Button variant="white" href="/contact">
            Talk to Sales
          </Button>
          <Button variant="white" href="/docs">
            Explore API
          </Button>
        </div>
      </div>
    </section>
  );
};
