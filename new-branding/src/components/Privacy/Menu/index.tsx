"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/lib/extractHeadingsForMd";

import "./index.scss";

const SCROLL_OFFSET = 140;
const SCROLL_MOBILE_OFFSET = 110;

export const PrivacyMenu = ({ headings }: { headings: Heading[] }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const isMobile = window.innerWidth < 600;
      const offset = isMobile ? SCROLL_MOBILE_OFFSET : SCROLL_OFFSET;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

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
          <li key={heading.id} className={`privacy-menu__item ${heading.level === 3 ? "privacy-menu__item--sublevel" : ""}`} data-level={heading.level}>
            <a href={`#${heading.id}`} onClick={e => handleClick(e, heading.id)} className="privacy-menu__item__link">
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
