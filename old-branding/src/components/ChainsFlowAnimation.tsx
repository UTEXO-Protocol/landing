'use client'

import BitcoinIcon from '@/vectors/BitcoinIcon'
import BitCometIcon from '@/vectors/BitCometIcon'
import GitcoinIcon from '@/vectors/GitcoinIcon'
import PolkadotIcon from '@/vectors/PolkadotIcon'
import RoundPolygonIcon from '@/vectors/RoundPolygonIcon'
import StarknetIcon from '@/vectors/StarknetIcon'
import SyncEraIcon from '@/vectors/SyncEraIcon'
import UtexoIcon from '@/vectors/UtexoIcon'
import React from 'react'
import SolanaIcon from '@/vectors/SolanaIcon'
import EthereumIcon from '@/vectors/EthereumIcon'
import {motion} from 'motion/react'
import {useBreakpointValue} from '@/lib/hooks/useBreakpointValue'

const icons = [
  ({className}: {className: string}) => <StarknetIcon className={className}/>,
  ({className}: {className: string}) => <SyncEraIcon className={className}/>,
  ({className}: {className: string}) => <RoundPolygonIcon className={className}/>,
  ({className}: {className: string}) => <SolanaIcon className={className}/>,
  ({className}: {className: string}) => <EthereumIcon className={className}/>,
  ({className}: {className: string}) => <GitcoinIcon className={className}/>,
  ({className}: {className: string}) => <PolkadotIcon className={className}/>,
  ({className}: {className: string}) => <BitCometIcon className={className}/>,
]

const dublicatedIcons = [...icons, ...icons]

export default function ChainsFlowAnimation() {
  const br = useBreakpointValue()

  const isSmallScrenn = br == "md" || br == "sm" || br == "default"

  return (
    <div className='min-w-[370px] lg:min-w-[571px] relative' style={{
    }}>
      <div className=' w-full overflow-hidden flex items-center absolute top-1/2 -translate-y-1/2'
        style={{
          // edge fade
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}>
        <div
          className="animate-marquee-right -translate-x-1/2 flex gap-3.5"
          style={{
            animationDuration: "9000ms"
          }}
        >
          {dublicatedIcons.map((Icon, index) => <div key={index} className='shrink-0'><Icon className={`${isSmallScrenn && "w-[33px]"}`}/></div>)}
        </div>
      </div>
      <div className='flex items-center justify-between '>
        <div className={`${isSmallScrenn ? 'w-[69px] h-[69px]' : 'w-[106px] h-[106px]'}`} />
        <motion.div
          className='z-10'
          animate={{scale: [1, 1.08, 1]}}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <UtexoIcon hideShadow className={`${isSmallScrenn ? 'w-[83px] h-[83px]' : 'w-32 h-32'}`} />
        </motion.div>

        <motion.div
          className='z-10'
          animate={{scale: [1, 1.08, 1]}}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 0.4 // happens AFTER Utexo
          }}
        >
          <BitcoinIcon className={`${isSmallScrenn ? 'w-[69px] h-[69px]' : 'w-[106px] h-[106px]'}`} />
        </motion.div>
      </div>
    </div>
  )
}
