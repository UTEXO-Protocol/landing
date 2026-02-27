import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <video className="hero__video" poster="/home/hero-image.png" autoPlay muted loop playsInline preload="auto" webkit-playsinline="true">
          <source src="/home/utexo-hero.webm" type="video/webm" />
          <source src="/home/utexo-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero__gradient" />

        <div className="hero__content">
          <div className="hero__info">
            <h1 className="hero__title">Bitcoin&apos;s private stablecoin backbone</h1>
            <p className="hero__description">A single API to settle value on Bitcoin. Fixed costs. Private execution.</p>
            <Button variant="white" href="/api-product">
              EXPLORE API
            </Button>
          </div>
        </div>
      </div>
      <div className="hero__info__mobile">
        <h1 className="hero__title">Bitcoin&apos;s private stablecoin backbone</h1>
        <p className="hero__description">A single API to settle value on Bitcoin. Fixed costs. Private execution.</p>
        <Button variant="white" href="/api-product">
          EXPLORE API
        </Button>
      </div>
    </section>
  );
};
