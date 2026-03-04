import Image from "next/image";
import { apiFeature } from "@/mocks/api-product";
import "./index.scss";

const duplicated = [...apiFeature, ...apiFeature, ...apiFeature, ...apiFeature];

export const ApiFeatures = () => {
  return (
    <section className="api-features">
      <div className="api-features__wrapper">
        <div className="api-features__header">
          <h2 className="api-features__title">
            <span className="api-features__title-accent">Move stablecoins like you move money.</span>
            Instantly. Privately.Predictably.
          </h2>
        </div>

        <div className="api-features__carousel">
          <div className="api-features__track">
            {duplicated.map((feature, index) => (
              <article key={index} className="api-features__card">
                <p className="api-features__card-text">{feature.text}</p>
                <Image src={feature.image} alt={feature.alt} width={280} height={407} className="api-features__card-image" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
