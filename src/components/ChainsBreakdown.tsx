import Image from 'next/image'
import React from 'react'

const chains = [
  {id: 1, label: 'USDT liquidity on RGB'},
  {id: 2, label: 'Settlement layer'},
  {id: 3, label: 'USDT liquidity on RGB'},
  {id: 4, label: 'Settlement layer'},
  {id: 5, label: 'Settlement layer'},
  {id: 6, label: 'USDT liquidity on RGB'},
  {id: 7, label: 'Settlement layer'},
  {id: 8, label: 'USDT liquidity on RGB'},
]

type ChainCardProps = {
  label: string
}

const ChainCard = ({label}: ChainCardProps) => {
  return (
    <div className="bg-[#D4D4D4] relative flex flex-col justify-between p-5 lg:p-8 min-w-[325px] md:min-w-auto h-[184px] md:h-[245px]">

      <Image src="/chain-icon.svg" alt="Bridge" width={28} height={28} className="w-6 h-6" />


      <p className="text-[20px] font-medium tracking-tighter">
        {label}
      </p>
    </div>
  )
}

export default function ChainsBreakdown() {
  return (
    <section className="relative bg-[#D4D4D4]">
      <div className="mx-auto w-22/23 sm:w-[640px] md:w-11/12 border-[#C6C6C6] border-l border-r border-b ">

        <h2 className="tracking-tighter mb-6 lg:mb:10 text-[40px] lg:text-[66px] font-medium px-5 lg:px-10">
          Chains Breakdown
        </h2>

        <div className="gap-px grid grid-cols-[repeat(8,auto)] md:grid-cols-2 lg:grid-cols-4 overflow-scroll bg-[#C6C6C6] border-t border-[#C6C6C6]">
          {chains.map(chain => (
            <ChainCard
              key={chain.id}
              label={chain.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
