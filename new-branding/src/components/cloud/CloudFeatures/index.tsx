"use client";

import Image from "next/image";
import { cloudFeatures } from "@/mocks/cloud";
import "./index.scss";

export const CloudFeatures = () => {
  return (
    <section className="cloud-features">
      <div className="cloud-features__layout">
        <div className="cloud-features__left">
          <h2 className="cloud-features__title">
            Lightning started with BTC. <span className="cloud-features__title-bold">Now it’s USDT turn.</span>
          </h2>
          <p className="cloud-features__subtitle">
            For the first time, exchanges, liquidity providers, neobanks, and wallets can access native BTC&lt;&gt;USDT liquidity on Lightning.
            <br />
            Settle large-scale payments and execute HFT instantly, with configurable fees and private execution.
          </p>
        </div>

        <div className="cloud-features__right">
          <div className="cloud-features__cards">
            {cloudFeatures.map((feature, index) => (
              <article key={feature.title} className={`cloud-features__card`}>
                <div className="cloud-features__card__visual">
                  <Image src={feature.image} alt={feature.title} width={540} height={280} className="cloud-features__card__visual-img" />
                </div>
                <div className="cloud-features__card__info">
                  <h3 className="cloud-features__card__title">{feature.title}</h3>
                  <p className="cloud-features__card__description">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
