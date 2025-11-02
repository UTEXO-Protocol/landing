'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <>
      <nav className="py-4 sm:py-6 lg:py-[33px] mx-auto left-0 right-0 z-50 bg-[#D4D4D4] w-full px-4 sm:w-[640px] md:w-[900px] lg:w-[1320px] border-[#C6C6C6] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="w-full sm:w-[600px] md:w-[860px] lg:w-[1220px] h-[55px] mx-auto flex items-center justify-between">
          {/* Left: logo + desktop links */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
            <Image
              src="/UtexoLogoFullBlack.svg"
              alt="UTEXO Logo"
              width={100.14}
              height={37}
              priority
              className="w-[100px] h-auto sm:w-[100px] sm:h-auto lg:w-[100.14px] lg:h-auto"
            />

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center lg:gap-10">
              <a
                href="#why-utexo"
                className="lg:text-[14px] tracking-wide uppercase font-mono hover:opacity-70 transition-opacity"
              >
                Why Utexo
              </a>

              {/* PRODUCTS with hover dropdown (desktop only) */}
              <div className="relative group">
                {/* Trigger */}
                <a
                  href="#ProductSuite"
                  className="lg:text-[14px] tracking-wide uppercase font-mono inline-flex items-center gap-2"
                >
                  PRODUCTS
                  {/* wide chevron, rotates up on hover/open */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[18px] transition-transform duration-200 group-hover:rotate-180"
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
                </a>

                {/* Dropdown */}
                <div
                  className="
                    invisible opacity-0 translate-y-1
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                    focus-within:visible focus-within:opacity-100 focus-within:translate-y-0
                    transition-all duration-150
                    absolute left-0 top-[calc(100%+6px)] z-[60]
                  "
                >
                  {/* hover buffer */}
                  <span className="absolute -top-3 left-0 right-0 h-3" aria-hidden />

                  <div
                    className="
                      w-36 rounded-[12px]
                      border border-[#BFBFBF]/[.44]
                      bg-[rgba(2,1,1,0.60)] backdrop-blur-md
                      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
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
                          font-mono text-sm text-white/90
                          pr-2 transition-all duration-200
                          hover:text-[#FFBE3C] hover:tracking-[0.015em] hover:opacity-100
                        "
                      >
                        <span>Bridge</span>
                        <span className="text-xs uppercase tracking-[0.05em] text-white/50 select-none">
                          Live↗
                        </span>
                      </a>

                      {/* Dev (Soon) – disabled, stays muted */}
                      <div
                        className="
                          flex items-center justify-between
                          font-ingram text-sm text-white/50
                          cursor-not-allowed select-none pr-2
                        "
                        title="Coming soon"
                        aria-disabled="true"
                      >
                        <span>SDK</span>
                        <span className="text-xs uppercase tracking-[0.05em] text-white/50">Soon</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#features"
                className="lg:text-[14px] tracking-wide uppercase font-ingram hover:opacity-70 transition-opacity"
              >
                Features
              </a>
              <a
                href="#faqs"
                className="lg:text-[14px] tracking-wide uppercase font-ingram hover:opacity-70 transition-opacity"
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
              <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <Button
              href="https://bridge.utexo.com"
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
          className="lg:hidden fixed top-[80px] left-0 right-0 z-40 bg-[#D4D4D4] border-b border-[#C6C6C6] animate-fadeIn"
        >
          <div className="flex flex-col py-4 px-8 space-y-4">
            <a
              href="#why-utexo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-ingram tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              Why Utexo
            </a>

            {/* Products collapsible (mobile) */}
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              aria-expanded={mobileProductsOpen}
              className="text-[14px] font-ingram tracking-wide uppercase flex items-center justify-between py-1"
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
{/*                <a
                  href="#ProductSuite"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[13px] font-mono uppercase text-black/70 hover:text-black"
                >
                  Overview
                </a>*/}
                <a
                  href="https://bridge.utexo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-ingram uppercase text-black hover:opacity-80"
                >
                  Bridge <span className="text-black/50">· Live ↗</span>
                </a>
                <span className="text-[13px] font-ingram uppercase text-black/40">
                  Dev <span className="text-black/40">· Soon</span>
                </span>
              </div>
            )}

            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-ingram tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              Features
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-ingram tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              FAQs
            </a>
          </div>
        </div>
      )}
    </>
  );
}
