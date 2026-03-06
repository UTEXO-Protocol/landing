"use client"

import SolanaIcon from "@/vectors/SolanaIcon"
import {OrbitingCircles} from "./OrbitingCircles"
import EthereumIcon from "@/vectors/EthereumIcon"
import TronIcon from "@/vectors/TronIcon"
import PolygonIcon from "@/vectors/PolygonIcon"
import UtexoIcon from "@/vectors/UtexoIcon"
import BitcoinIcon from "@/vectors/BitcoinIcon"
import {useBreakpointValue} from "@/lib/hooks/useBreakpointValue"



export function OrbitingChains() {
  const br = useBreakpointValue()

  const predicate = br != "lg" && br != "xl"
  
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles
        radius={predicate ?  170 : 224}
        iconSize={predicate ? 40 : 52}
        circleProps={{
          strokeDasharray: '4 4',
        }}
      >
        <EthereumIcon />
        <SolanaIcon />
        <TronIcon />
        <PolygonIcon />
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={54}
        radius={predicate ? 108 : 142}
        reverse
        speed={2}
        circleProps={{
          strokeDasharray: '4 4',
          fill: '#E2E2E2'
        }}>
       {!predicate && <UtexoIcon />}
      </OrbitingCircles>
      <BitcoinIcon className={`${predicate ? "w-[60px] h-[60px]" : "w-[90px] h-[90px]"} z-10`} />
    </div>
  )
}