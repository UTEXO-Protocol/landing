"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cloudFeatures } from "@/mocks/cloud";
import "./index.scss";

export const CloudFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isTransitioning = useRef(false);
  const isLocked = useRef(false);

  const updateIndex = useCallback((newIndex: number) => {
    activeIndexRef.current = newIndex;
    setActiveIndex(newIndex);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isSectionInView = () => {
      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      return rect.top < viewportCenter && rect.bottom > viewportCenter;
    };

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;

      const inView = isSectionInView();

      // If not locked and section not in center zone — skip
      if (!isLocked.current && !inView) return;

      const idx = activeIndexRef.current;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      // Enter lock when section hits center zone
      if (!isLocked.current && inView) {
        // Scrolling down: lock and reset to first card
        if (goingDown && idx === 0) {
          isLocked.current = true;
        }
        // Scrolling up: lock if we still have cards to go back through
        if (goingUp && idx === cloudFeatures.length - 1) {
          isLocked.current = true;
        }
        // Not at the right boundary to start — let page scroll
        if (!isLocked.current) return;
      }

      // At boundaries while locked — unlock and let page scroll
      if (isLocked.current) {
        if ((goingUp && idx === 0) || (goingDown && idx === cloudFeatures.length - 1)) {
          isLocked.current = false;
          return;
        }
      }

      // Hold scroll and switch cards
      e.preventDefault();

      if (isTransitioning.current) return;
      isTransitioning.current = true;

      if (goingDown) {
        updateIndex(Math.min(cloudFeatures.length - 1, idx + 1));
      } else {
        updateIndex(Math.max(0, idx - 1));
      }

      setTimeout(() => {
        isTransitioning.current = false;
      }, 600);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [updateIndex]);

  return (
    <section className="cloud-features" ref={sectionRef}>
      <div className="cloud-features__layout">
        <div className="cloud-features__left">
          <h2 className="cloud-features__title">
            <span className="cloud-features__title-bold">
              BTC over Lightning was the start,
            </span>
            <br />
            Utexo is bringing USDT
          </h2>
          <p className="cloud-features__subtitle">
            Exchanges, digital banks, wallets can access for the first time both
            BTC and USDT over Lightning. Creating a new market for stablecoin
            payments and BTC/USDT trading over Lightning.
          </p>
        </div>

        <div className="cloud-features__right">
          <div className="cloud-features__cards">
            {cloudFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`cloud-features__card ${
                  index === activeIndex ? "cloud-features__card--active" : ""
                } ${
                  index < activeIndex ? "cloud-features__card--above" : ""
                } ${
                  index > activeIndex ? "cloud-features__card--below" : ""
                }`}
              >
                <div className="cloud-features__card-visual">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={540}
                    height={280}
                    className="cloud-features__card-visual-img"
                  />
                </div>
                <div className="cloud-features__card-info">
                  <h3 className="cloud-features__card-title">
                    {feature.title}
                  </h3>
                  <p className="cloud-features__card-description">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
