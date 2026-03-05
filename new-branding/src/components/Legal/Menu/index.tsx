"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/lib/extractHeadingsForMd";

import "./index.scss";

const SCROLL_OFFSET = 140;
const SCROLL_MOBILE_OFFSET = 110;

export const LegalMenu = ({ headings }: { headings: Heading[] }) => {
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
    <nav className="legal-menu">
      <h3 className="legal-menu__badge">Table of contents</h3>
      <ul className="legal-menu__list">
        {headings.map(heading => (
          <li key={heading.id} className={`legal-menu__item ${heading.level === 3 ? "legal-menu__item--sublevel" : ""}`} data-level={heading.level}>
            <a href={`#${heading.id}`} onClick={e => handleClick(e, heading.id)} className="legal-menu__item__link">
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
