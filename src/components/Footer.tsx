import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bg-[#D4D4D4] px-4 sm:px-0">
      <div className="relative w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] pb-12 sm:pb-20 lg:pb-[120px] mx-auto border-l-0 sm:border-l-[1px] border-[#C6C6C6] border-r-0 sm:border-r-[1px] border-[#C6C6C6] ">
      
      <div className="hidden lg:block absolute lg:bottom-[-100px] lg:right-[20px]">
          <Image
            src="/end0.png"
            alt="3D Element"
            width={200}
            height={200}
            className="lg:w-[180px] lg:h-[250px] rotate-330"
          />
        </div>
        <div className="w-full sm:w-[500px] lg:w-[611px] mx-auto py-6 sm:py-8 lg:py-0">
        <div className="flex justify-center gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-7 lg:mb-8">
          <a href="https://x.com/utexocom" className="hover:opacity-70 transition-opacity">
            <Image src="/x.png" alt="X (Twitter)" width={24} height={24} className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" />
          </a>
          <a href="https://discord.gg/hmVJNEJH2P" className="hover:opacity-70 transition-opacity">
            <Image src="/d.png" alt="Discord" width={24} height={24} className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" />
          </a>
{/*          <a href="#" className="hover:opacity-70 transition-opacity">
            <Image src="/t.png" alt="Telegram" width={24} height={24} className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" />
          </a>*/}
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-9 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/*<a 
            href="#" 
            className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase hover:opacity-70 transition-opacity cursor-not-allowed"
            style={{ 
              fontFamily: "'Roboto Mono', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.03em',
              lineHeight: '130%'
            }}
          >Contact support</a>*/}

          <p 
             
            className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase hover:opacity-70 transition-opacity cursor-not-allowed text-center"
            style={{ 
              fontFamily: "'Roboto Mono', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.03em',
              lineHeight: '130%'
            }}
          >more coming soon</p>
{/*          <a 
            href="#" 
            className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase hover:opacity-70 transition-opacity cursor-not-allowed"
            style={{ 
              fontFamily: "'Roboto Mono', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.03em',
              lineHeight: '130%'
            }}
          >Privacy policy</a>*/}
        </div>

        <div className="text-center max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
          <p 
            className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#959595] uppercase"
            style={{ 
              fontFamily: "'Roboto Mono', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.03em',
              lineHeight: '130%'
            }}
          >
            © Utexo 2025. All rights reserved.
          </p>
        </div> 

        {/* 3D Element */}

        </div>
      </div>
    </footer>
  );
}

