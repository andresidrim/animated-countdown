import { HTMLAttributes } from 'react'
import { HTMLMotionProps } from 'framer-motion'

export type CounterProps = {
  children: number
  variant: 'days' | 'hours' | 'minutes' | 'seconds'
  lightThemeBackgroundColor?: string
  lightThemeTextColor?: string
  lightThemeDescriptionColor?: string
  darkThemeBackgroundColor?: string
  darkThemeTextColor?: string
  darkThemeDescriptionColor?: string
} & HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'>
