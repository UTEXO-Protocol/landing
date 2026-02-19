import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const CloudHero = () => {
  return (
    <section className="cloud-hero">
      <video className="cloud-hero__video" autoPlay muted loop playsInline>
        <source src="/cloud/bitcoin-cloud.webm" type="video/webm" />
        <source src="/cloud/bitcoin-cloud.mp4" type="video/mp4" />
      </video>

      <div className="cloud-hero__gradient" />

      <div className="cloud-hero__content">
        <div className="cloud-hero__text">
          <h1 className="cloud-hero__title">Cloud</h1>
          <p className="cloud-hero__description">Managed Lightning infrastructure for running stablecoin payments and trading at scale, with built-in yield and zero operational overhead.</p>
        </div>
        <div className="cloud-hero__gradient--mobile" />
        <div className="cloud-hero__buttons">
          <Button variant="white" href="/api-product">
            TALK TO SALES
          </Button>
          <Button variant="white" href="/api-product">
            LOG IN
          </Button>
        </div>
      </div>
    </section>
  );
};
