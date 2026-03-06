"use client";

import { useEffect, useState, useRef } from "react";
import { Heading } from "@/lib/extractHeadingsForMd";

import "./index.scss";

export const LegalMenu = ({ headings }: { headings: Heading[] }) => {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const getStickyOffset = () => {
    const stickyHeader = document.querySelector<HTMLElement>("header, [data-sticky], .header");

    if (stickyHeader) {
      const { position } = getComputedStyle(stickyHeader);

      if (position === "sticky" || position === "fixed") {
        return Number(stickyHeader.offsetHeight) + 16;
      }
    }

    const isMobile = window.innerWidth < 600;

    return isMobile ? 140 : 170;
  };

  useEffect(() => {
    observerRef.current?.disconnect();

    const buildObserver = () => {
      observerRef.current?.disconnect();

      const offset = getStickyOffset();

      observerRef.current = new IntersectionObserver(
        entries => {
          const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible.length > 0) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -55% 0px`,
          threshold: 0,
        },
      );

      headings.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observerRef.current!.observe(el);
      });
    };

    buildObserver();

    window.addEventListener("resize", buildObserver);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("resize", buildObserver);
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offset = getStickyOffset();
      console.log(offset);
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <nav className="legal-menu">
      <h3 className="legal-menu__badge">Table of contents</h3>
      <ul className="legal-menu__list">
        {headings.map(heading => (
          <li
            key={heading.id}
            className={["legal-menu__item", heading.level === 3 ? "legal-menu__item--sublevel" : "", activeId === heading.id ? "legal-menu__item--active" : ""].filter(Boolean).join(" ")}
            data-level={heading.level}
          >
            <a href={`#${heading.id}`} onClick={e => handleClick(e, heading.id)} className="legal-menu__item__link">
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
