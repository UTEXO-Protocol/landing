import Image from "next/image";
import { pspFeatures } from "@/mocks/psp";
import "./index.scss";

export const PspFeatures = () => {
  return (
    <section className="psp-features">
      <div className="psp-features__grid">
        {pspFeatures.map((feature) => (
          <article key={feature.title} className="psp-features__card">
            <div className="psp-features__card-icon">
              <Image
                src={feature.icon}
                alt=""
                width={24}
                height={24}
                className="psp-features__card-icon-img"
              />
            </div>
            <div className="psp-features__card-text">
              <h3 className="psp-features__card-title">{feature.title}</h3>
              <p className="psp-features__card-description">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
