import { HTMLAttributes } from 'react'

export type LinkProps = {
  variant: 'facebook' | 'pinterest' | 'instagram'
  lightThemeColor?: string
  darkThemeColor?: string
  linkTo: string
} & HTMLAttributes<HTMLAnchorElement>
