"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Colors } from "../Downloads/Colors";
import { Fonts } from "../Downloads/Fonts";
import { Avatar } from "../Downloads/Avatar";
import { BrandingLogos } from "../Downloads/Logo";
import { Assets } from "../Downloads/Assets";
import "./index.scss";

interface BrandKit {
  id: string;
  title: string;
  description: React.ReactNode;
  content: React.ReactNode;
}

const brandKits: BrandKit[] = [
  {
    id: "logo",
    title: "Logo",
    description: (
      <>
        The Utexo logo is built on a "Squircle" (square-circle) hybrid geometry, which in design psychology represents a balance between <strong>stability</strong> and <strong>innovation</strong>.
      </>
    ),
    content: <BrandingLogos />,
  },
  {
    id: "avatar",
    title: "Avatar",
    description: "Use the icon only for avatars and photo profiles. For all other applications, use the logotype.",
    content: <Avatar />,
  },
  {
    id: "color",
    title: "Color",
    description:
      "Our visual identity relies on a versatile neutral base to ensure clarity and professional longevity. By anchoring the brand in muted tones, we create the necessary space for our signature green to exist in isometric or photography elements.",
    content: <Colors />,
  },
  {
    id: "typography",
    title: "Typography",
    description: (
      <>
        The typographic system is a dialogue between <strong>Sophisticated Design</strong> and <strong>Technical Precision</strong>. By pairing a high-end geometric sans with a rigid monospace, the
        brand communicates its dual nature: a premium user experience built on top of rock-solid code.
      </>
    ),
    content: <Fonts />,
  },
  {
    id: "graphic-assets",
    title: "Graphic Assets",
    description:
      "While these assets can be used as standalone focal points to emphasize specific ideas, the best practice is to incorporate them directly into the isometric scenes or on top of real life photography.",
    content: <Assets />,
  },
];

export const BrandKitContent = () => {
  const [activeId, setActiveId] = useState<string>(brandKits[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    brandKits.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-100px 0px -55% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    const offset = 130;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="brand-kit-content">
      <nav className="brand-kit-content__nav">
        <ul className="brand-kit-content__nav-list">
          {brandKits.map(({ id, title }) => (
            <li key={id} className="brand-kit-content__nav-item">
              <button className={`brand-kit-content__nav-btn ${activeId === id ? "brand-kit-content__nav-btn--active" : ""}`} onClick={() => scrollTo(id)}>
                <Image src="/common/arrow-right.svg" className="brand-kit-content__nav-indicator" alt="arrow" width={18} height={24} />
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="brand-kit-content__sections">
        {brandKits.map(({ id, title, description, content }) => (
          <div
            key={id}
            id={id}
            ref={el => {
              sectionRefs.current[id] = el;
            }}
            className="brand-kit-content__section"
          >
            <div className="brand-kit-content__section-header">
              <h3 className="brand-kit-content__section-title">{title}</h3>
              <p className="brand-kit-content__section-description">{description}</p>
            </div>

            <div className="brand-kit-content__section-content">{content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
