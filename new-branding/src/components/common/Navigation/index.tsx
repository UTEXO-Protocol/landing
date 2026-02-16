"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/CommonButton";
import { NavMenu, navigation } from "./Menu";
import "./index.scss";

export class NavigationItem {
  constructor(
    public title: string,
    public link: string = "",
    public icon?: string,
    public submenu?: NavigationItem[],
  ) {}
}

export const additionalNavigation: NavigationItem[] = [new NavigationItem("Docs", "/docs", "/common/linkVector.svg"), new NavigationItem("Contact", "/contact")];

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {isSticky && <div className="header__spacer" />}
      <header className={`header ${isSticky ? "header--sticky" : ""}`}>
        <div className="header__card">
          <div className="header__inner">
            <div className="header__left">
              <Link href="/" className="header__logo">
                <Image src="/heading/UtexoLogo.svg" alt="UTEXO Logo" width={159} height={49} priority />
              </Link>
              <NavMenu />
            </div>

            <div className="header__right">
              <nav className="header__links">
                {additionalNavigation.map(item => (
                  <a key={item.title} href={item.link} className="header__link">
                    <span>
                      {item.title}
                      {item.icon && <Image src={item.icon} alt={item.title} width={16} height={16} />}
                    </span>
                  </a>
                ))}
              </nav>
              <Button variant="white">Get Started</Button>
            </div>

            <button
              className="header__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Image src="/heading/menu-grid.svg" alt="Menu" width={28} height={28} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__overlay" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
            <Link href="/" className="mobile-menu__logo" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/heading/UtexoLogo.svg" alt="UTEXO Logo" width={120} height={37} />
            </Link>
            <button className="mobile-menu__close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#D4D4D4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu__nav">
            {navigation.map(group => (
              <div key={group.title} className="mobile-menu__group">
                <div className="mobile-menu__group-title">{group.title}</div>
                {group.submenu.map(item => (
                  <a key={item.title} href={item.link} className="mobile-menu__item" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="mobile-menu__item-icon">
                      <Image src={item.icon} alt={item.title} width={20} height={20} />
                    </span>
                    <span className="mobile-menu__item-text">
                      <span className="mobile-menu__item-title">{item.title}</span>
                      <span className="mobile-menu__item-description">{item.description}</span>
                    </span>
                  </a>
                ))}
              </div>
            ))}

            <div className="mobile-menu__divider" />

            {additionalNavigation.map(item => (
              <a key={item.title} href={item.link} className="mobile-menu__extra-link" onClick={() => setIsMobileMenuOpen(false)}>
                {item.title}
                {item.icon && <Image src={item.icon} alt={item.title} width={16} height={16} />}
              </a>
            ))}

            <div className="mobile-menu__cta">
              <Button variant="white" href="/contact">Get Started</Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
