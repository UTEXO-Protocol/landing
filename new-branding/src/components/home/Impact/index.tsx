import { Slider } from "@/components/common/Slider";
import { sliderItems } from "@/mocks/slider";
import "./index.scss";

export const Impact = () => {
  return (
    <section className="impact">
      <div className="impact__decoration" />

      <div className="impact__header">
        <div className="impact__header-title">
          <h2 className="impact__title">Meet Our Partners</h2>
        </div>
        <p className="impact__description">Leading payment operators use Utexo to protect their margins, improve customer experience and protect sensitive data.</p>
      </div>

      <div className="impact__slider-wrapper">
        <Slider items={sliderItems} />
      </div>
    </section>
  );
};
