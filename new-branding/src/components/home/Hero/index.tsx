import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <video className="hero__video" autoPlay muted loop playsInline>
          <source src="/home/utexo-hero.webm" type="video/webm" />
          <source src="/home/utexo-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero__overlay" />
        <div className="hero__gradient" />

        <div className="hero__content">
          <h1 className="hero__title">Bitcoin&apos;s private stablecoin backbone</h1>
          <div className="hero__info">
            <p className="hero__description">Settle value on Bitcoin with fixed costs and private execution.</p>
            <Button variant="white" href="/api-product">
              EXPLORE API
            </Button>
          </div>
        </div>
      </div>
      <div className="hero__info__mobile">
        <p className="hero__description">Settle value on Bitcoin with fixed costs and private execution.</p>
        <Button variant="white" href="/api-product">
          EXPLORE API
        </Button>
      </div>
    </section>
  );
};
