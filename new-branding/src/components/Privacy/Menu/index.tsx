"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/lib/extractHeadingsForMd";

import "./index.scss";

const SCROLL_OFFSET = 110;

export const PrivacyMenu = ({ headings }: { headings: Heading[] }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-140px 0px -60% 0px",
      },
    );

    const elements = headings.map(h => document.getElementById(h.id)).filter((el): el is HTMLElement => el !== null);

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="privacy-menu">
      <h3 className="privacy-menu__badge">Table of contents</h3>
      <ul className="privacy-menu__list">
        {headings.map(heading => (
          <li
            key={heading.id}
            className={`privacy-menu__item ${heading.level === 3 ? "privacy-menu__item--sublevel" : ""} ${activeId === heading.id ? "privacy-menu__item--active" : ""}`}
            data-level={heading.level}
          >
            <a href={`#${heading.id}`} onClick={e => handleClick(e, heading.id)} className="privacy-menu__item__link">
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
