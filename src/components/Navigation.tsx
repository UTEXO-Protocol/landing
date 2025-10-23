'use client';
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-4 sm:py-6 lg:py-[33px] mx-auto left-0 right-0 z-50 bg-[#D4D4D4] w-full px-4 sm:w-[640px] md:w-[900px] lg:w-[1320px] border-[#C6C6C6] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="w-full sm:w-[600px] md:w-[860px] lg:w-[1220px] h-[55px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
            <Image
              src="/Group 3.png"
              alt="UTEXO Logo"
              width={100.14}
              height={37}
              priority
              className="w-[70px] h-[26px] sm:w-[85px] sm:h-[31px] lg:w-[100.14px] lg:h-[37px]"
            />
            <div className="hidden lg:flex items-center lg:gap-10">
              <a href="#why-utexo" className="lg:text-[14px] tracking-wide uppercase font-mono hover:opacity-70 transition-opacity">
                Why Utexo
              </a>
              <a href="#insights" className="lg:text-[14px] tracking-wide uppercase font-mono hover:opacity-70 transition-opacity">
                Insights
              </a>
              <a href="#features" className="lg:text-[14px] tracking-wide uppercase font-mono hover:opacity-70 transition-opacity">
                Features
              </a>
              <a href="#faqs" className="lg:text-[14px] tracking-wide uppercase font-mono hover:opacity-70 transition-opacity">
                FAQs
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            
            <Button href="https://bridge.utexo.com" variant="black" className="w-[100px] h-[45px] text-[11px] sm:w-[120px] sm:h-[50px] sm:text-[12px] lg:w-[144px] lg:h-[55px] rounded-[10px]">
              get started
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[80px] left-0 right-0 z-40 bg-[#D4D4D4] border-b border-[#C6C6C6] animate-fadeIn">
          <div className="flex flex-col py-4 px-8 space-y-4">
            <a 
              href="#why-utexo" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-mono tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              Why Utexo
            </a>
            <a 
              href="#insights" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-mono tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              Insights
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-mono tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              Features
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-mono tracking-wide uppercase hover:opacity-70 transition-opacity py-1"
            >
              FAQs
            </a>
          </div>
        </div>
      )}
    </>
  );
}

