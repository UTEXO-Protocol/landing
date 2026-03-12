"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
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

export const additionalNavigation: NavigationItem[] = [new NavigationItem("Contact", "/contact-sales")];

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navigation() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
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

  // Focus trap and Escape key
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const menuEl = mobileMenuRef.current;
    const closeBtn = menuEl.querySelector<HTMLElement>(".mobile-menu__close");
    if (closeBtn) closeBtn.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusableEls = menuEl.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

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
              <Button variant="white" href="https://docs.utexo.com/" external={true}>
                Get Started
              </Button>
            </div>

            <button ref={toggleButtonRef} className="header__mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
              <Image src="/heading/menu-grid.svg" alt="" width={28} height={28} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-menu__overlay" onClick={closeMobileMenu} />
        <div className="mobile-menu__content" ref={mobileMenuRef} role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu__header">
            <Link href="/" className="mobile-menu__logo" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/heading/UtexoLogo.svg" alt="UTEXO Logo" width={120} height={37} />
            </Link>
            <button className="mobile-menu__close" onClick={closeMobileMenu} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="#D4D4D4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu__nav">
            {navigation.map(group => (
              <div key={group.title} className="mobile-menu__group">
                <div className="mobile-menu__group-title">{group.title}</div>
                {group.submenu.map(item => (
                  <a key={item.title} href={item.link} className="mobile-menu__item">
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
              <Button variant="white" href="https://docs.utexo.com/" external={true}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
