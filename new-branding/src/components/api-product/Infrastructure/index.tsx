import Image from "next/image";
import { infrastructureTags, infrastructureServices } from "@/mocks/api-product";
import "./index.scss";

export const Infrastructure = () => {
  return (
    <section className="infrastructure">
      <div className="infrastructure__tags">
        {infrastructureTags.map((tag) => (
          <div key={tag.label} className="infrastructure__tag">
            <Image
              src={tag.icon}
              alt={tag.label}
              width={32}
              height={32}
              className="infrastructure__tag-icon"
            />
            <span className="infrastructure__tag-label">{tag.label}</span>
          </div>
        ))}
      </div>

      <div className="infrastructure__body">
        <div className="infrastructure__content">
          <div className="infrastructure__left">
            <h2 className="infrastructure__title">
              <span className="infrastructure__title-accent">Best-in-class stablecoins</span>
              settlement Infrastructure
            </h2>
          </div>

          <div className="infrastructure__right">
            {infrastructureServices.map((service) => (
              <div key={service.title} className="infrastructure__service">
                <h3 className="infrastructure__service-title">{service.title}</h3>
                <p className="infrastructure__service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/api-product/coin-3d.png"
          alt="3D Coin"
          width={300}
          height={300}
          className="infrastructure__coin"
        />
      </div>
    </section>
  );
};
