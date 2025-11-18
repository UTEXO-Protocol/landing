'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";

interface QuoteData {
  quote: string;
  logo?: string;
  logoAlt: string;
  subtitle?: string; 
  source?: string;
}

export default function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // stop autoplay after user interaction

  const quotes: QuoteData[] = [
    {
      quote: "Tether to launch USDT on RGB, expanding native Bitcoin stablecoin support RGB protocol enables tokenized USDT and NFTs on Bitcoin First RGB bridge brings USDT from Ethereum to Bitcoin via Lightning",
      logo: "/BM.png",
      logoAlt: "Bitcoin Magazine",
      source: "https://bitcoinmagazine.com/news/first-rgb-bridge-brings-usdt-from-ethereum-to-bitcoin-via-lightning"
    },
    {
      quote: "By bringing USDT to RGB, Tether is helping to unlock a new frontier for money on Bitcoin.",
      logo: "/tether_logo_icon_black.png",
      logoAlt: "Tether",
      source: "https://tether.io/news/tether-to-launch-usdt-on-rgb-expanding-native-bitcoin-stablecoin-support"
    },
    {
      quote: "Bitcoin deserves a stablecoin that feels truly native, lightweight, private, and scalable.",
      logoAlt: "Paolo A.",
      subtitle: "CEO of Tether",
      source: "https://tether.io/news/tether-to-launch-usdt-on-rgb-expanding-native-bitcoin-stablecoin-support"
    }
  ];

  // AUTOPLAY: rotate quotes every 8 seconds until user interacts
  useEffect(() => {
    if (isPaused) return; // stop autoplay after first manual click

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 8000); // 8s, tweak if you want

    return () => clearInterval(interval);
  }, [isPaused, quotes.length]);

  const handlePrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#D4D4D4] px-4 sm:px-0">
      <div className="relative w-full sm:w-[640px] md:w-11/12 min-h-[280px] sm:min-h-[320px] lg:h-[358px] border-[1px] border-[#C6C6C6] bg-[#E2E2E2] mx-auto flex items-center overflow-hidden">
        <div className="w-full sm:w-[600px] md:w-[850px] lg:w-[1094px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">

            {/* Quote text */}
            <div className="w-full sm:w-[400px] md:w-[600px] lg:w-[788px]">
              <blockquote 
                key={currentIndex}
                className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-normal animate-fadeIn" 
                style={{ fontFamily: "'PP Mori', sans-serif" }}
              >
                &quot;{quotes[currentIndex].quote}&quot;
              </blockquote>
            </div>

            {/* Logo / Author */}
            <div className="flex items-center justify-center">
              {quotes[currentIndex].logo ? (
                // If we have a logo (e.g. Bitcoin Magazine / Tether)
                quotes[currentIndex].source ? (
                  <a
                    href={quotes[currentIndex].source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fadeIn hover:opacity-80 transition-opacity"
                  >
                    <Image
                      key={`logo-${currentIndex}`}
                      src={quotes[currentIndex].logo as string}
                      alt={quotes[currentIndex].logoAlt}
                      width={200}
                      height={80}
                      className="w-[100px] h-auto sm:w-[120px] lg:w-[144px]"
                      priority={false}
                    />
                  </a>
                ) : (
                  <Image
                    key={`logo-${currentIndex}`}
                    src={quotes[currentIndex].logo as string}
                    alt={quotes[currentIndex].logoAlt}
                    width={200}
                    height={80}
                    className="w-[100px] h-auto sm:w-[120px] lg:w-[144px] animate-fadeIn"
                    priority={false}
                  />
                )
              ) : (
                // No logo → text source (e.g. Paolo A.)
                <div key={`text-${currentIndex}`} className="text-center animate-fadeIn">
                  {quotes[currentIndex].source ? (
                    <a
                      href={quotes[currentIndex].source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div
                        className="text-xl md:text-[40px] font-bold group-hover:underline"
                        style={{ fontFamily: "'PP Mori', sans-serif" }}
                      >
                        {quotes[currentIndex].logoAlt}
                      </div>
                      {quotes[currentIndex].subtitle && (
                        <div className="text-black/50 text-sm sm:text-base mt-1 group-hover:text-black/70 transition-colors">
                          {quotes[currentIndex].subtitle}
                        </div>
                      )}
                    </a>
                  ) : (
                    <>
                      <div
                        className="text-xl md:text-[40px] font-bold"
                        style={{ fontFamily: "'PP Mori', sans-serif" }}
                      >
                        {quotes[currentIndex].logoAlt}
                      </div>
                      {quotes[currentIndex].subtitle && (
                        <div className="text-black/50 text-sm sm:text-base mt-1">
                          {quotes[currentIndex].subtitle}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-0 absolute bottom-0 right-0">
          <Button 
            onClick={handlePrevious}
            variant="black"
            glare={false}
            iconOnly={true}
            iconRotation="rotate-180 w-4 sm:w-4.5 lg:w-5"
            iconSize={{ width: 20, height: 20 }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] border-r border-gray-700"
          />
          <Button 
            onClick={handleNext}
            variant="black"
            glare={false}
            iconOnly={true}
            iconSize={{ width: 20, height: 20 }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] border-l border-gray-700"
          />
        </div>
      </div>
    </section>
  );
}
