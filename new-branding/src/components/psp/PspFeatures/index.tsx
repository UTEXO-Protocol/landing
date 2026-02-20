import Image from "next/image";
import { pspFeatures } from "@/mocks/psp";
import "./index.scss";

export const PspFeatures = () => {
  return (
    <section className="psp-features">
      <div className="psp-features__grid">
        {pspFeatures.map(feature => (
          <article key={feature.title} className="psp-features__card">
            <div className="psp-features__card-icon">
              <Image src={feature.icon} alt={feature.title} width={27} height={27} className="psp-features__card-icon-img" />
            </div>
            <div className="psp-features__card-text">
              <h3 className="psp-features__card-title">{feature.title}</h3>
              <p className="psp-features__card-description">{feature.description}</p>
            </div>
          </article>
        ))}
        <div className="psp-features__decoration">
          <p className="psp-features__decoration__title">Grow</p>
          <Image alt="cube decorator" src="/psp/cube-decoration.svg" width={100} height={70} className="psp-features__decoration__image" />
        </div>
      </div>
    </section>
  );
};
