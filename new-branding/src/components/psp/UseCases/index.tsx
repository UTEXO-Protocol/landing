import { Slider } from "@/components/common/Slider";
import { sliderItems } from "@/mocks/slider";
import "./index.scss";

export const UseCases = () => {
  return (
    <section className="psp-usecases">
      <div className="psp-usecases__bg" />
      <Slider items={sliderItems} />
    </section>
  );
};
