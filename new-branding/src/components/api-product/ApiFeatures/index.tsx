import Image from "next/image";
import { apiFeatureImages } from "@/mocks/api-product";
import "./index.scss";

const duplicated = [...apiFeatureImages, ...apiFeatureImages, ...apiFeatureImages, ...apiFeatureImages];

export const ApiFeatures = () => {
  return (
    <section className="api-features">
      <div className="api-features__header">
        <h2 className="api-features__title">
          <span className="api-features__title-accent">Global Bitcoin-based stablecoin</span>
          API for fast, high-volume transfers.
        </h2>
      </div>

      <div className="api-features__carousel">
        <div className="api-features__track">
          {duplicated.map((src, index) => (
            <article key={index} className="api-features__card">
              <Image src={src} alt={`Feature ${(index % apiFeatureImages.length) + 1}`} width={280} height={407} className="api-features__card-image" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
