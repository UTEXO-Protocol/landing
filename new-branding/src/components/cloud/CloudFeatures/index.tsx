"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cloudFeatures } from "@/mocks/cloud";
import "./index.scss";

export const CloudFeatures = () => {
  return (
    <section className="cloud-features">
      <div className="cloud-features__layout">
        <div className="cloud-features__left">
          <h2 className="cloud-features__title">
            <span className="cloud-features__title-bold">BTC over Lightning was the start,</span>
            <br />
            Utexo is bringing USDT
          </h2>
          <p className="cloud-features__subtitle">
            Exchanges, digital banks, wallets can access for the first time both BTC and USDT over Lightning. Creating a new market for stablecoin payments and BTC/USDT trading over Lightning.
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
