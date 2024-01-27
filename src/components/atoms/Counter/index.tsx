'use client'

import { cn } from '@/services/utils/className'
import { CounterProps } from './types'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '@/contexts/theme'
import { motion, useAnimation } from 'framer-motion'

const Counter = ({
  children,
  variant = 'days',
  lightThemeBackgroundColor = '#aaa',
  lightThemeTextColor = '#333',
  lightThemeDescriptionColor = '#111',
  darkThemeBackgroundColor = '#333',
  darkThemeTextColor = '#777',
  darkThemeDescriptionColor = '#eee',
  ...props
}: CounterProps) => {
  const { theme } = useTheme()

  const [topNum, setTopNum] = useState<number>(children)
  const [topNumFlip, setTopNumFlip] = useState<number>(children)
  const [bottomNum, setBottomNum] = useState<number>(children)
  const [bottomNumFlip, setBottomNumFlip] = useState<number>(children)

  const topControls = useAnimation()
  const bottomControls = useAnimation()

  useEffect(() => {
    if (topNum !== children) {
      topControls.set({
        rotateX: 0,
      })

      topControls.start({
        transformOrigin: 'bottom',
        rotateX: 90,
        transition: { duration: 0.25 },
      })

      bottomControls.set({ rotateX: 90 })

      bottomControls.start({
        transformOrigin: 'top',
        rotateX: 0,
        transition: { duration: 0.25, delay: 0.25 },
      })
    }
  }, [children, topControls, bottomControls, topNum])

  const handleTop = useCallback(() => {
    setTopNum(children)
  }, [children])

  const handleTopFlip = useCallback(() => {
    setTopNumFlip(children)
  }, [children])

  const handleBottom = useCallback(() => {
    setBottomNum(children)
  }, [children])

  const handleBottomFlip = useCallback(() => {
    setBottomNumFlip(children)
  }, [children])

  return (
    <div className="relative flex flex-col" {...props}>
      <div className="relative z-50 flex h-14 w-16 flex-col md:h-28 md:w-32">
        <motion.div
          style={{
            backgroundColor:
              theme === 'light'
                ? lightThemeBackgroundColor
                : darkThemeBackgroundColor,
            color: theme === 'light' ? lightThemeTextColor : darkThemeTextColor,
          }}
          className={cn(
            'absolute top-0 z-30 flex h-[50%] w-full justify-center overflow-hidden rounded-md font-bold leading-none transition-colors duration-300 ease-in-out ',
            children > 99
              ? 'text-2xl md:pt-[22.5px] md:text-6xl'
              : 'pt-2 text-3xl md:pt-[17px] md:text-7xl',
          )}
          animate={topControls}
          onAnimationStart={handleTop}
          onAnimationComplete={handleTopFlip}
        >
          {topNumFlip > 9 ? topNumFlip : '0' + topNumFlip}
        </motion.div>
        <div
          style={{
            backgroundColor:
              theme === 'light'
                ? lightThemeBackgroundColor
                : darkThemeBackgroundColor,
            color: theme === 'light' ? lightThemeTextColor : darkThemeTextColor,
          }}
          className={cn(
            'relative flex h-[50%] w-full justify-center overflow-hidden rounded-md font-bold leading-none transition-colors duration-300 ease-in-out',
            children > 99
              ? 'text-2xl md:pt-[22.5px] md:text-6xl'
              : 'pt-2 text-3xl md:pt-[17px] md:text-7xl',
          )}
        >
          <div className="absolute bottom-0 z-[100] flex h-[2px] w-full bg-black bg-opacity-50" />
          <div className="absolute top-0 z-50 flex h-[57px] w-full justify-center overflow-hidden rounded-md bg-black bg-opacity-40" />
          {topNum > 9 ? topNum : '0' + topNum}
        </div>
        <motion.div
          style={{
            backgroundColor:
              theme === 'light'
                ? lightThemeBackgroundColor
                : darkThemeBackgroundColor,
            color: theme === 'light' ? lightThemeTextColor : darkThemeTextColor,
          }}
          className={cn(
            'absolute bottom-0 z-50 flex h-[50%] w-full items-end justify-center overflow-hidden rounded-md font-bold leading-none transition-colors duration-300 ease-in-out',
            children > 99
              ? 'text-2xl md:pb-[28.5px] md:text-6xl'
              : 'pb-3 text-3xl md:pb-[23px] md:text-7xl',
          )}
          animate={bottomControls}
          onAnimationStart={handleBottomFlip}
          onAnimationComplete={handleBottom}
        >
          {bottomNumFlip > 9 ? bottomNumFlip : '0' + bottomNumFlip}
        </motion.div>
        <div
          style={{
            backgroundColor:
              theme === 'light'
                ? lightThemeBackgroundColor
                : darkThemeBackgroundColor,
            color: theme === 'light' ? lightThemeTextColor : darkThemeTextColor,
          }}
          className={cn(
            'relative flex h-[50%] w-full items-end justify-center overflow-hidden rounded-md font-bold leading-none transition-colors duration-300 ease-in-out',
            children > 99
              ? 'text-2xl md:pb-[28.5px] md:text-6xl'
              : 'pb-3 text-3xl md:pb-[23px] md:text-7xl',
          )}
        >
          {bottomNum > 9 ? bottomNum : '0' + bottomNum}
        </div>
      </div>
      <div className="-z-50 flex h-4 w-16 -translate-y-2 rounded-md bg-black bg-opacity-60 md:h-6 md:w-32" />
      <span
        style={{
          color:
            theme === 'light'
              ? lightThemeDescriptionColor
              : darkThemeDescriptionColor,
        }}
        className="flex w-16 justify-center text-xs font-bold transition-colors duration-300 ease-in-out md:w-32 md:text-base md:font-semibold"
      >
        {variant.toUpperCase()}
      </span>
    </div>
  )
}

export default Counter
