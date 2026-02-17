'use client'

import { useEffect, useState } from 'react'

type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl'

export function useBreakpointValue(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('default')

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setBreakpoint('xl')
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        setBreakpoint('lg')
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setBreakpoint('md')
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setBreakpoint('sm')
      } else {
        setBreakpoint('default')
      }
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return breakpoint
}
