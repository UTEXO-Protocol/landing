import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <video className="hero__video" poster="/hero/utexo-hero-poster.png" autoPlay muted loop playsInline>
        <source src="/home/utexo-hero.webm" type="video/webm" />
        <source src="/home/utexo-hero.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />
      <div className="hero__gradient" />

      <div className="hero__content">
        <h1 className="hero__title">Bitcoin&apos;s private stablecoin backbone</h1>
        <div className="hero__text-block">
          <p className="hero__description">APIs for payment operators and high-frequency traders that need instant settlement and fixed transaction costs.</p>
          <Button variant="white" href="/api-product">
            EXPLORE API
          </Button>
        </div>
      </div>
    </section>
  );
};
