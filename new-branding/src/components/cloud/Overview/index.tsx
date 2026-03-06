"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cloudOverviewFeatures } from "@/mocks/cloud";
import { AnimatedText } from "./AnimatedText";
import "./index.scss";

const text = "Run Lightning and RGB without managing nodes. Control execution without operating the stack.";
const GROUP_SIZE = 3;

export const Overview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cloud-overview" ref={sectionRef}>
      <div className="cloud-overview__inner">
        <p className="cloud-overview__text">
          <AnimatedText text={text} groupSize={GROUP_SIZE} visible={visible} />
        </p>

        <ul className="cloud-overview__features">
          {cloudOverviewFeatures.map(feature => (
            <li key={feature.text} className="cloud-overview__feature">
              <Image src={feature.icon} alt="" width={24} height={24} className="cloud-overview__feature__icon" />
              <span className="cloud-overview__feature__text">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
