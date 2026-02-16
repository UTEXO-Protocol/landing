'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function DevNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false); // NEW

  return (
    <>
      {/* Dark header shell */}
      <nav className="py-4 sm:py-6 lg:py-[33px] mx-auto left-0 right-0 z-[70] bg-black w-full px-4 sm:w-[640px] md:w-11/12 border-[#2a2a2a] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="w-full sm:w-[600px] md:w-11/12 h-[55px] mx-auto flex items-center justify-between">
          {/* Left: logo + desktop links */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
            <Link href="/" target="" rel="noopener noreferrer">
              <Image
                src="/UtexoLogoFullWhite.svg"
                alt="UTEXO Logo"
                width={100.14}
                height={37}
                priority
                className="w-[100px] h-auto sm:w-[100px] sm:h-auto lg:w-[100.14px] lg:h-auto"
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center lg:gap-10">
              <a
                href="#why-utexo"
                className="lg:text-[14px] tracking-wide uppercase font-mono text-white/90 hover:text-white transition-opacity"
              >
                Why Utexo
              </a>

              {/* PRODUCTS with hover + click dropdown (desktop only) */}
              <div
                className="relative group"
                onMouseEnter={() => setDesktopProductsOpen(true)}
                onMouseLeave={() => setDesktopProductsOpen(false)}
              >
                {/* Trigger row: text link (scroll) + chevron button (dropdown) */}
                <div className="inline-flex items-center gap-2">
                  {/* Text still scrolls to DevProductSuite */}
                  <a
                    href="#DevProductSuite"
                    className="lg:text-[14px] tracking-wide uppercase font-mono text-white/90 hover:text-white"
                  >
                    PRODUCTS
                  </a>

                  {/* Chevron toggles dropdown on click (for iPad / touch) */}
                  <button
                    type="button"
                    onClick={() => setDesktopProductsOpen((v) => !v)}
                    aria-expanded={desktopProductsOpen}
                    aria-label="Toggle products menu"
                    className="inline-flex items-center text-white/90"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`
                        h-[14px] w-[18px] transition-transform duration-200
                        ${desktopProductsOpen ? 'rotate-180' : ''}
                      `}
                      aria-hidden="true"
                    >
                      <path
                        d="M6 15l6-6 6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dropdown */}
                <div
                  className={`
                    transition-all duration-150
                    absolute left-0 top-[calc(100%+6px)] z-[80]
                    ${desktopProductsOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-1'}
                  `}
                >
                  {/* hover buffer */}
                  <span className="absolute -top-3 left-0 right-0 h-3" aria-hidden />

                  <div
                    className="
                      w-36 rounded-[12px]
                      border border-white/10
                      bg-[rgba(20,20,20,0.75)] backdrop-blur-md
                      shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                      overflow-hidden
                    "
                  >
                    <div className="p-3 space-y-3">
                      {/* Bridge (Live) */}
                      <a
                        href="https://bridge.utexo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center justify-between
                          font-ingram text-sm text-white/90
                          pr-2 transition-all duration-200
                          hover:text-[#FFBE3C]/80 hover:tracking-[0.015em] hover:opacity-100
                        "
                      >
                        <span>Bridge</span>
                        {/* status stays subtle on dark */}
                        <span className="text-xs uppercase tracking-[0.05em] text-white/50 select-none">
                          Live
                        </span>
                      </a>

                      {/* Dev (Soon) */}
                      <Link
                        href="/dev"
                        target=""
                        rel="noopener noreferrer"
                        className="
                          flex items-center justify-between
                          font-ingram text-sm text-white/90
                          pr-2 transition-all duration-200
                          hover:text-[#FFBE3C]/80 hover:tracking-[0.015em] hover:opacity-100
                        "
                      >
                        <span>Dev</span>
                        <span className="text-xs uppercase tracking-[0.05em] text-white/50 select-none">
                          Soon
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#DevProductSuite"
                className="lg:text-[14px] tracking-wide uppercase font-ingram text-white/90 hover:text-white transition-opacity"
              >
                Features
              </a>
              <a
                href="#faqs"
                className="lg:text-[14px] tracking-wide uppercase font-ingram text-white/90 hover:text-white transition-opacity"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileProductsOpen(false);
              }}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <Button
              href="#DevCTA"
              variant="black"
              className="w-[100px] h-[45px] text-[11px] sm:w-[120px] sm:h-[50px] sm:text-[12px] lg:w-[144px] lg:h-[55px] rounded-[10px]"
            >
              get started
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed top-[80px] left-0 right-0 z-[60] bg-[#0B0B0B] border-b border-[#1C1C1C] animate-fadeIn"
        >
          <div className="flex flex-col py-4 px-8 space-y-4">
            <a
              href="#why-utexo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-ingram tracking-wide uppercase text-white/90 hover:text-white transition-opacity py-1"
            >
              Why Utexo
            </a>

            {/* Products collapsible (mobile) */}
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              aria-expanded={mobileProductsOpen}
              className="text-[14px] font-ingram tracking-wide uppercase flex items-center justify-between py-1 text-white/90"
            >
              <span>Products</span>
              <svg
                viewBox="0 0 24 24"
                className={`h-[16px] w-[18px] transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path
                  d="M6 14l6-6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {mobileProductsOpen && (
              <div className="ml-4 flex flex-col gap-3 pb-2">
                <a
                  href="https://bridge.utexo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-ingram uppercase text-white hover:text-[#FFBE3C]/80"
                >
                  Bridge <span className="text-white/50">· Live ↗</span>
                </a>
                <Link
                  href="/dev"
                  target=""
                  rel="noopener noreferrer"
                  className="text-[13px] font-ingram uppercase text-white hover:text-[#FFBE3C]/80"
                >
                  Dev <span className="text-white/50">· Soon</span>
                </Link>
              </div>
            )}

            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-ingram tracking-wide uppercase text-white/90 hover:text-white transition-opacity py-1"
            >
              Features
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-mono tracking-wide uppercase text-white/90 hover:text-white transition-opacity py-1"
            >
              FAQs
            </a>
          </div>
        </div>
      )}
    </>
  );
}
