import { HTMLAttributes } from 'react'

export type ThemeSwitchProps = {
  backgroundColorLight?: string
  dotColorLight?: string
  backgroundColorDark?: string
  dotColorDark?: string
} & HTMLAttributes<HTMLButtonElement>
