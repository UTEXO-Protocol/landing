import Image from 'next/image'
import React from 'react'
import ChainsFlowAnimation from './ChainsFlowAnimation'

export default function SupportedChains() {
  return (
    <section className="relative bg-[#D4D4D4] overflow-hidden">
      <div className="mx-auto w-22/23  px-5 lg:px-15 xl:px-[122px]  sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r py-15 lg:py-[276px] ">
        <div className="hidden lg:block absolute lg:bottom-15 lg:-left-20 animate-floatOrb">
          <Image
            src="/end0.svg"
            alt="3D Element"
            width={200}
            height={200}
            className="w-44 h-auto lg:w-80 lg:h-auto"
          />
        </div>
        <div className="hidden lg:block absolute lg:top-40 lg:-right-10 animate-floatOrb">
          <Image
            src="/Group51.webp"
            alt="3D Element"
            width={169}
            height={130}
            className="w-[169px] h-auto"
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-5 lg:gap-[10%] items-center'>
          <div className='max-w-[485px]'>
            <div className='font-ingram text-[14px] tracking-tight'>SUPPORTED CHAINS</div>
            <h2 className='text-4xl  mt-6 tracking-tighter'>
              Part of a growing ecosystem powering wallets, CEXs, LSPs & protocols
            </h2>
          </div>
          <ChainsFlowAnimation />
        </div>
      </div>
    </section>
  )
}
