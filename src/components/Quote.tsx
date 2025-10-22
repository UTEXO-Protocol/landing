'use client';
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

interface QuoteData {
  quote: string;
  logo: string;
  logoAlt: string;
}

export default function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes: QuoteData[] = [
    {
      quote: "Tether to launch USDT on RGB, expanding native Bitcoin stablecoin support RGB protocol enables tokenized USDT and NFTs on Bitcoin First RGB bridge brings USDT from Ethereum to Bitcoin via Lightning",
      logo: "/BM.png",
      logoAlt: "Bitcoin Magazine"
    },
    {
      quote: "By bringing USDT to RGB, Tether is helping to unlock a new frontier for money on Bitcoin.",
      logo: "/BM.png",
      logoAlt: "tether."
    },
    {
      quote: "Bitcoin deserves a stablecoin that feels truly native, lightweight, private, and scalable.",
      logo: "/BM.png",
      logoAlt: "Paolo A."
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#D4D4D4] px-4 sm:px-0">
      <div className="relative w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] min-h-[280px] sm:min-h-[320px] lg:h-[358px] border-[1px] border-[#C6C6C6] bg-[#E2E2E2] mx-auto flex items-center overflow-hidden">
        <div className="w-full sm:w-[600px] md:w-[850px] lg:w-[1094px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">
            <div className="w-full sm:w-[400px] md:w-[600px] lg:w-[788px]">
              <blockquote 
                key={currentIndex}
                className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-normal animate-fadeIn" 
                style={{ fontFamily: "'PP Mori', sans-serif" }}
              >
                &quot;{quotes[currentIndex].quote}&quot;
              </blockquote>
            </div>

            <div className="flex items-center justify-center">
              {quotes[currentIndex].logoAlt === "Bitcoin Magazine" ? (
                <Image
                  key={`logo-${currentIndex}`}
                  src="/BM.png"
                  alt="Bitcoin Magazine"
                  width={200}
                  height={80}
                  className="w-[100px] h-[24px] sm:w-[120px] sm:h-[28px] lg:w-[144px] lg:h-[33.67px] animate-fadeIn"
                />
              ) : (
                <div 
                  key={`text-${currentIndex}`}
                  className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold animate-fadeIn" 
                  style={{ fontFamily: "'PP Mori', sans-serif" }}
                >
                  {quotes[currentIndex].logoAlt}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-0 absolute bottom-0 right-0">
          <Button 
            onClick={handlePrevious}
            variant="black"
            iconOnly={true}
            iconRotation="rotate-180 w-4 sm:w-4.5 lg:w-5"
            iconSize={{ width: 20, height: 20 }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] border-r border-gray-700"
          />
          <Button 
            onClick={handleNext}
            variant="black"
            iconOnly={true}
            iconSize={{ width: 20, height: 20 }}
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[78px] lg:h-[78px] border-l border-gray-700"
          />
        </div>
      </div>
    </section>
  );
}

