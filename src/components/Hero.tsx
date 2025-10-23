import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-visible px-4 sm:px-0">
      <div className="pb-16 sm:pb-24 lg:pb-32 mx-auto w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] border-[#C6C6C6] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="relative bg-[#1a2e1a] overflow-visible h-[400px] sm:h-[550px] lg:h-[740px] mx-auto">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/background.jpeg"
              alt="Background"
              width={1320}
              height={740}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* 3D Element - Bottom Center */}
          <div className="absolute bottom-[-30px] sm:bottom-[-65px] lg:!-bottom-14 right-10 -translate-x-1/2 md:right-1/3 md:-translate-x-1/2 z-20">
            <Image
              src="/Group 39.png"
              alt="3D Element Bottom Center"
              width={150}
              height={150}
              className="w-20 sm:w-28 lg:w-32 h-auto"
            />
          </div>
          
          {/* 3D Element - Bottom Large Ring */}
          <div className="absolute bottom-12 left-36 lg:bottom-[0px] lg:left-[560px] z-30 lg:w-[240px] lg:h-[310px]">
            <Image
              src="/first.png"
              alt="3D Element Bottom"
              width={350}
              height={350}
              className="w-36 lg:w-80 h-auto"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-[120px] py-8 sm:py-12 lg:py-[80px]">
            <div className="w-full max-w-[760px]">
              <h1 
                className="text-[36px] sm:text-[56px] lg:text-[80px] font-medium leading-tight sm:leading-[60px] lg:leading-[82px] tracking-[-0.03em] text-white mb-6 sm:mb-7 lg:mb-8 h-auto lg:h-[164px] font-sans"
              >
                Bitcoin&apos;s private<br />
                stablecoin backbone
              </h1>

              <Button  href="https://bridge.utexo.com" className="mt-0 sm:mt-12 lg:mt-[350px]">
                get started
              </Button>
            </div>
          </div>
          
          {/* Text Overlay */}
          <div className="hidden sm:block absolute bottom-8 sm:bottom-12 lg:bottom-[80px] right-4 sm:right-6 lg:right-[30px] max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] z-10">
            <p className="text-white text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
              Native USDT & BTC, instant zero-fee settlements, lightning fast, private & non-custodial payments. Backed by Tether, settled on Bitcoin natively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

