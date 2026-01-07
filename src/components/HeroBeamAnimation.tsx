"use client"

import React, {forwardRef, useRef} from "react"
import {AnimatedBeam} from "./AnimatedBeam";
import BitcoinIcon from "@/vectors/BitcoinIcon";
import UtexoIcon from "@/vectors/UtexoIcon";
import SolanaIcon from "@/vectors/SolanaIcon";
import PolygonIcon from "@/vectors/PolygonIcon";
import EthereumIcon from "@/vectors/EthereumIcon";
import TetherIcon from "@/vectors/TetherIcon";
import DollarIcon from "@/vectors/DollarIcon";
import {useBreakpointValue} from "@/lib/hooks/useBreakpointValue";


const Circle = forwardRef<
  HTMLDivElement,
  {className?: string; children?: React.ReactNode}
>(({className, children}, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex items-center justify-center rounded-full ${className ? className : ''}`}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function HeroBeamAnimation({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const ethRef = useRef<HTMLDivElement>(null)
  const polygonRef = useRef<HTMLDivElement>(null)
  const solanaRef = useRef<HTMLDivElement>(null)
  const tether1Ref = useRef<HTMLDivElement>(null)
  const tether2Ref = useRef<HTMLDivElement>(null)
  const utexoRef = useRef<HTMLDivElement>(null)
  const bitcoinRef = useRef<HTMLDivElement>(null)
  const dollarRef = useRef<HTMLDivElement>(null)

  const br = useBreakpointValue()

  const isSmallScreen = br == "sm" || br == "default"

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className ? className : ''}`}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between">
        <div className="flex">
          <div className="flex">
            <div className="flex flex-col justify-center gap-1.5">
              <Circle ref={ethRef} >
                <EthereumIcon className="size-7 md:size-auto" />
              </Circle>
              <Circle ref={polygonRef}>
                <PolygonIcon className="size-7 md:size-auto"   />
              </Circle>
              <Circle ref={solanaRef}>
                <SolanaIcon className="size-7 md:size-auto" />
              </Circle>
            </div>
            <div className="flex flex-col justify-center gap-3.5 md:gap-5 ml-[71px] md:ml-[133px]">
              <Circle ref={tether1Ref}>
                <DollarIcon className="size-5 md:size-auto" />
              </Circle>
              <Circle ref={dollarRef}>
                <TetherIcon className="size-5 md:size-auto"  />
              </Circle>
              <Circle ref={tether2Ref}>
                <DollarIcon className="size-5 md:size-auto"  />
              </Circle>
            </div>
          </div>

          <div className="flex ml-14 md:ml-25">
            <div className="flex flex-col justify-center">
              <Circle ref={utexoRef} className={isSmallScreen ? "size-[69px]" : "size-32"}>
                <UtexoIcon shadowSize={isSmallScreen ? "5px" : "10px"}/>
              </Circle>
            </div>
            <div className="ml-20 md:ml-[177px] flex flex-col justify-center">
              <Circle ref={bitcoinRef} className={isSmallScreen ? "size-[31px]" : "size-14.5"}>
                <BitcoinIcon />
              </Circle>
            </div>
          </div>
        </div>
      </div>

      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={ethRef}
        toRef={tether1Ref}
      />
      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={polygonRef}
        toRef={dollarRef}
      />
      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={solanaRef}
        toRef={tether2Ref}
      />

      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={tether1Ref}
        toRef={utexoRef}
      />
      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={dollarRef}
        toRef={utexoRef}
      />
      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={tether2Ref}
        toRef={utexoRef}
      />
      <AnimatedBeam
        pathWidth={isSmallScreen ? 0.54 : 1}
        containerRef={containerRef}
        fromRef={utexoRef}
        toRef={bitcoinRef}
      />
    </div>
  )
}