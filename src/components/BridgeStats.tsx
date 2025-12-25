import React from 'react';
import Image from "next/image";

const stats = [
    { value: "8+", label: "chains supported" },
    { value: "<$0.01", label: "average fee" },
    { value: "<1", label: "second settlement" },
    { value: "$XX", label: "USDT bridged" }
  ];

const duplicatedStats = [...stats, ...stats, ...stats];

const BridgeStats = () => {
  return (
    <section className=" overflow-visible bg-[#D4D4D4]">
      <div className="relative mx-auto w-22/23 sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r border-b">
          <div className="hidden lg:block absolute pointer-events-none -bottom-44 left-42 z-10 animate-floatOrb">
            <Image
              src="/first.webp"
              alt="3D Element"
              width={350}
              height={350}
              className="w-36 lg:w-64 h-auto"
            />
          </div>
          
          <div
            className="hidden lg:block absolute pointer-events-none -top-18 -right-7.5 z-10 animate-floatRing"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.40))" }}
          >
            <Image
                src="/Group39.webp"
                alt="3D Coin Element"
                width={150}
                height={150}
                className="w-20 sm:w-28 lg:w-32 h-auto"
              />
          </div>

          <div className="w-full overflow-hidden">
            <div className="relative">
              <div className="flex animate-slide">
                {duplicatedStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`not-last:border-r border-[#C6C6C6] shrink-0 w-[350px] lg:w-[451px] pl-7.5 lg:pl-[60px] py-6 lg:py-10 ${index % 2 != 0 ? "bg-[#E2E2E2]" : ''}`}
                  >
                    <div className="leading-14 lg:leading-22 tracking-tighter text-[70px] lg:text-[100px] font-medium">
                      {stat.value}
                    </div>
                    <div className="text-lg opacity-50 tracking-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default BridgeStats;
