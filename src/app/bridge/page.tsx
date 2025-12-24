import BridgeHero from '@/components/BridgeHero'
import BridgeNavigation from '@/components/BridgeNavigation'
import BridgeStats from '@/components/BridgeStats'
import React from 'react'

export default function BridgePage() {
  return (
    <div className="min-h-screen bg-[#D4D4D4] text-black">
      <BridgeNavigation/>
      <BridgeHero/>
      <BridgeStats/>
    </div>
  )
}
