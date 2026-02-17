import React from 'react'

export default function BridgeRoadmap() {
  return (
    <section className="relative bg-[#D4D4D4]">
      <div className="mx-auto w-22/23 sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r border-b pl-5 lg:pl-[60px]  p-[60px]">
        <div className="text-[14px] uppercase tracking-tight font-ingram mb-[31px] sm:mb-[78px]">
          Roadmap
        </div>

        <div className='relative flex flex-col md:flex-row justify-between gap-5 md-gap-0'>
          
          {/* Dashed connectors */}
          <div className='hidden md:block h-px absolute top-[49px] left-0 right-0 border border-[#C6C6C6] border-dashed'/>
          <div className='md:hidden block w-px h-auto absolute top-0 left-[12px] bottom-0 border border-[#C6C6C6] border-dashed'/>

          <div className=' grid grid-cols-[25px_auto] gap-[15px] md:gap-5 md:grid-cols-1 max-w-[300px]'>
            <div className='z-10 w-[25px] h-[25px] md:w-[98px] md:h-[98px] bg-black rounded-full' />
            <div>
              <div className='leading-tight text-[24px] md:text-[32px] font-medium mb-1.5 md:mb1'>Now</div>
              <div className='text-sm md:text-[20px]'>Current bridge launched</div>
            </div>
          </div>

          <div className=' grid grid-cols-[25px_auto] gap-[15px] md:gap-5 md:grid-cols-1 max-w-[300px]'>
            <div className='z-10 w-[25px] h-[25px] md:w-[98px] md:h-[98px] bg-black rounded-full' />
            <div>
              <div className='leading-tight text-[24px] md:text-[32px] font-medium mb-1.5 md:mb1'>Next</div>
              <div className='text-sm md:text-[20px]'>Expanding into USDT chains</div>
            </div>
          </div>

          <div className='bg-[#D4D4D4] z-10 grid grid-cols-[25px_auto] gap-[15px] md:gap-5 md:grid-cols-1 max-w-[300px]'>
            <div className='w-[25px] h-[25px] md:w-[98px] md:h-[98px] bg-black rounded-full' />
            <div>
              <div className='leading-tight text-[24px] md:text-[32px] font-medium mb-1.5 md:mb1'>Later</div>
              <div className='text-sm md:text-[20px]'>Expanding into USDT chain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
