'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import Button from './Button';

import React from 'react'
import XIcon from '@/vectors/x';
import DiscordIcon from '@/vectors/d';

const Burger = ({
  onClick,
  mobileMenuOpen,
}: {
  onClick: () => void
  mobileMenuOpen: boolean
}) => {
  return (
    <button
      onClick={onClick}
      aria-expanded={mobileMenuOpen}
      aria-label="Toggle menu"
      className={`relative lg:hidden w-10 h-10 rounded-full flex items-center justify-center
        ${mobileMenuOpen ? 'bg-white' : 'bg-black'}`}
    >
      <span
        className={`
          absolute w-[13.42px] h-[1.75px] transition-transform duration-300 ease-in-out rounded-xs
          ${mobileMenuOpen
            ? 'rotate-45 bg-black'
            : '-translate-y-[5.3px] bg-white'}
        `}
      />

      <span
        className={`
          absolute w-[13.42px] h-[1.75px] transition-opacity duration-200 bg-white rounded-xs
          ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />

      <span
        className={`
          absolute w-[13.42px] h-[1.75px] transition-transform duration-300 ease-in-out rounded-xs
          ${mobileMenuOpen
            ? '-rotate-45 bg-black'
            : 'translate-y-[5.3px] bg-white'}
        `}
      />
    </button>
  )
}



export default function BridgeNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false); // NEW


  return (
    <>
      <nav className="py-4 sm:py-6 lg:py-[33px] mx-auto left-0 right-0 z-50 bg-[#D4D4D4] w-22/23 px-4 sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r">
        <div className="w-full sm:w-[600px] md:w-11/12 h-[55px] mx-auto flex items-center justify-between">
          {/* Left: logo + desktop links */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
            <Link href="/" target="" rel="noopener noreferrer">
              <Image
                src="/UtexoLogoFullBlack.svg"
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
                className="lg:text-[14px] tracking-wide uppercase font-ingram hover:opacity-70 transition-opacity"
              >
                Why Utexo
              </a>

              {/* PRODUCTS with hover dropdown (desktop only) */}
              <div
                className="relative group"
                onMouseEnter={() => setDesktopProductsOpen(true)}
                onMouseLeave={() => setDesktopProductsOpen(false)}
              >
                {/* Trigger row: text link (scroll) + chevron button (dropdown) */}
                <div className="inline-flex items-center gap-2">
                  {/* Text still scrolls to ProductSuite */}
                  <a
                    href="#ProductSuite"
                    className="lg:text-[14px] tracking-wide uppercase font-ingram"
                  >
                    PRODUCTS
                  </a>

                  {/* Chevron toggles dropdown on click (for iPad / touch) */}
                  <button
                    type="button"
                    onClick={() => setDesktopProductsOpen((v) => !v)}
                    aria-expanded={desktopProductsOpen}
                    aria-label="Toggle products menu"
                    className="inline-flex items-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`
                        h-[14px] w-[18px] transition-transform duration-200
                        ${desktopProductsOpen ? "rotate-180" : ""}
                        group-hover:rotate-180
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
                    absolute left-0 top-[calc(100%+6px)] z-[60]
                    ${desktopProductsOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"}
                  `}
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
                          font-ingram text-sm text-white/90
                          pr-2 transition-all duration-200
                          hover:text-[#FFBE3C] hover:tracking-[0.015em] hover:opacity-100
                        "
                      >
                        <span>Bridge</span>
                        <span className="text-xs uppercase tracking-[0.05em] text-white/50 select-none">
                          Live↗
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
                          hover:text-[#FFBE3C] hover:tracking-[0.015em] hover:opacity-100
                        "
                      >
                        <span>Dev</span>
                        <span className="text-xs uppercase tracking-[0.05em] text-white/50">
                          Soon
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              <a
                href="./#features"
                className="lg:text-[14px] tracking-wide uppercase font-ingram hover:opacity-70 transition-opacity"
              >
                Features
              </a>
              <a
                href="./#faqs"
                className="lg:text-[14px] tracking-wide uppercase font-ingram hover:opacity-70 transition-opacity"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <Burger
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileProductsOpen(false);
              }}
              mobileMenuOpen={mobileMenuOpen}
            />

            <Button
              href="#newsletter"
              variant="black"
              className="hidden lg:flex w-[100px] h-[45px] text-[11px] sm:w-[120px] sm:h-[50px] sm:text-[12px] lg:w-[144px] lg:h-[55px] rounded-[10px]"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-black animate-fadeIn p-5 m-4 rounded-[10px] overflow-y-scroll"
        >
          <div className='mb-9 flex justify-between'>
            <Image
              src="/UtexoLogoFullWhite.svg"
              alt="UTEXO Logo"
              width={100.14}
              height={37}
              priority
              className="w-[100px] h-auto sm:w-[100px] sm:h-auto lg:w-[100.14px] lg:h-auto"
            />
            <Burger
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileProductsOpen(false);
              }}
              mobileMenuOpen={mobileMenuOpen}
            />
          </div>
          <div className="flex flex-col mb-4 tracking-tighter">
            <a
              href="#why-utexo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[40px] hover:opacity-70 transition-opacity text-white"
            >
              Why Utexo
            </a>

            {/* Products collapsible (mobile) */}
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              aria-expanded={mobileProductsOpen}
              className="text-[40px] flex items-center justify-between text-white"
            >
              <span>Products</span>
              <svg
                viewBox="0 0 24 24"
                className={`h-[24px] w-[32px] transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
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
                  className="text-[40px] text-white transition-all duration-150
                          hover:text-[#FFBE3C]/80 hover:brightness-90 "
                >
                  Bridge <span className="text-black/50">· Live ↗</span>
                </a>
                <Link
                  href="/dev"
                  target=""
                  rel="noopener noreferrer"
                  className="text-[40px] text-white transition-all duration-150
                          hover:text-[#FFBE3C]/80 hover:brightness-90"
                >
                  Dev <span className="text-black/50">· Soon</span>

                </Link>
              </div>
            )}

            <Link
              href="./"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[40px] hover:opacity-70 transition-opacity  text-white"
            >
              Features
            </Link>
            <Link
              href="./#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[40px] hover:opacity-70 transition-opacity  text-white"
            >
              FAQs
            </Link>
          </div>
          <Button
            href="#newsletter"
            variant="white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>

          <div className="px-4 sm:px0 text-white">
            <div className="relative w-full ">

              <div className="w-full sm:w-[500px] mx-auto py-13 sm:py-4">
                <div className="flex justify-center">
                  <Image
                    src="/UtexoLogo.webp"
                    alt="Utexo Logo"
                    width={372}
                    height={372}
                    className="w-60 h-auto drop-shadow-2xl/35"
                  />
                </div>

                <div className="flex justify-center gap-4 sm:gap-5 lg:gap-6 mb-5">
                  <a
                    href="https://x.com/utexocom"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Utexo on X"
                  >
                    <XIcon className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-2 stroke-white fill-none" />
                  </a>
                  <a
                    href="https://discord.gg/utexo"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Utexo on Discord"
                  >
                    <DiscordIcon className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-1 " />
                  </a>
                </div>

                <div className="flex flex-wrap flex-col items-center gap-2">
                  <a
                    href="#"
                    className="text-[12px] uppercase hover:opacity-70 transition-opacity cursor-not-allowed"
                    style={{
                      fontFamily: "'Roboto Mono', sans-serif",
                      fontWeight: 400,
                      fontStyle: 'normal',
                      letterSpacing: '-0.03em',
                      lineHeight: '130%'
                    }}
                  >Contact support</a>

                  <p

                    className="text-[12px] uppercase hover:opacity-70 transition-opacity cursor-not-allowed text-center"
                    style={{
                      fontFamily: "'Ingram Mono', sans-serif",
                      fontWeight: 400,
                      fontStyle: 'normal',
                      letterSpacing: '-0.03em',
                      lineHeight: '130%'
                    }}
                  >more coming soon</p>
                  <a
                    href="#"
                    className="text-[12px] uppercase hover:opacity-70 transition-opacity cursor-not-allowed"
                    style={{
                      fontFamily: "'Roboto Mono', sans-serif",
                      fontWeight: 400,
                      fontStyle: 'normal',
                      letterSpacing: '-0.03em',
                      lineHeight: '130%'
                    }}
                  >Privacy policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
