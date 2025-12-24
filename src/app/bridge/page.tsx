import {Footer} from '@/components'
import BridgeHero from '@/components/BridgeHero'
import BridgeNavigation from '@/components/BridgeNavigation'
import BridgeProductDeepdive from '@/components/BridgeProductDeepdive'
import BridgeStats from '@/components/BridgeStats'
import SupportedChains from '@/components/SupportedChains'
import WhyBridge from '@/components/WhyBridge'
import React from 'react'

export default function BridgePage() {
  return (
    <div className="min-h-screen bg-[#D4D4D4] text-black">
      <BridgeNavigation/>
      <BridgeHero/>
      <BridgeStats/>
      <WhyBridge/>
      <BridgeProductDeepdive/>
      <SupportedChains/>
    </div>
  )
}
