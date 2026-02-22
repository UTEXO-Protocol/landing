import Image from "next/image";
import Link from "next/link";
import { ExpandIcon } from "@/app/static/images";
import { operatorsServices } from "@/mocks/home";
import "./index.scss";

export const Operators = () => {
  return (
    <section className="operators">
      <div className="operators__container">
        <div className="operators__content">
          <div className="operators__info">
            <h2 className="operators__title">
              <span className="operators__title-accent">Designed for operators</span> that move value at scale.
            </h2>
          </div>

          <div className="operators__services">
            {operatorsServices.map(service => (
              <article key={service.title} className="operators__service">
                <h3 className="operators__service-title">{service.title}</h3>
                {service.link ? (
                  <Link href={service.link} className="operators__service-link">
                    View More
                    <ExpandIcon className="operators__service-icon" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="operators__service-link operators__service-link--disabled" aria-disabled="true">
                    View More
                    <ExpandIcon className="operators__service-icon" aria-hidden="true" />
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <Image src="/common/decorator-coin.png" alt="" width={82} height={64} className="operators__coin--small" loading="lazy" />
        <div className="operators__decoration">
          <Image src="/api-product/coin-3d.png" alt="" width={300} height={300} className="operators__coin" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
