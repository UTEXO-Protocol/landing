import Image from "next/image";
import { infrastructureTags, infrastructureServices } from "@/mocks/api-product";
import "./index.scss";

export const Infrastructure = () => {
  return (
    <section className="infrastructure">
      <ul className="infrastructure__tags">
        {infrastructureTags.map(tag => (
          <li key={tag.label} className="infrastructure__tag">
            <Image src={tag.icon} alt="" width={44} height={44} className="infrastructure__tag-icon" loading="lazy" />
            <span className="infrastructure__tag-label">{tag.label}</span>
          </li>
        ))}
      </ul>

      <div className="infrastructure__container">
        <div className="infrastructure__content">
          <div className="infrastructure__info">
            <h2 className="infrastructure__title">
              <span className="infrastructure__title-accent">Best-in-class stablecoins</span> settlement Infrastructure
            </h2>
          </div>

          <div className="infrastructure__services">
            {infrastructureServices.map(service => (
              <article key={service.title} className="infrastructure__service">
                <h3 className="infrastructure__service-title">{service.title}</h3>
                <p className="infrastructure__service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="infrastructure__decoration">
          <Image src="/api-product/coin-3d.png" alt="" width={300} height={300} className="infrastructure__coin" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
