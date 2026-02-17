import { Slider } from "@/components/common/Slider";
import { sliderItems } from "@/mocks/slider";
import "./index.scss";

export const Impact = () => {
  return (
    <section className="impact">
      <div className="impact__decoration" />

      <div className="impact__header">
        <div className="impact__header-title">
          <h2 className="impact__title">
            <span className="impact__title-accent">Transforming Finance</span> with Real-World Impact
          </h2>
        </div>
        <p className="impact__description">Beyond the blockchain hype. We deliver practical solutions that solve actual liquidity, speed, and settlement challenges for modern businesses.</p>
      </div>

      <div className="impact__slider-wrapper">
        <Slider items={sliderItems} />
      </div>
    </section>
  );
};
