'use client'

import { cn } from '@/services/utils/className'
import { useContext } from 'react'
import { themeContext } from '@/contexts/theme'
import { ThemeSwitchProps } from './types'

const ThemeSwitch = ({
  backgroundColorLight = '#000',
  dotColorLight = '#fff',
  backgroundColorDark = '#fff',
  dotColorDark = '#000',
  ...props
}: ThemeSwitchProps) => {
  const { handleThemeChange, theme } = useContext(themeContext)

  return (
    <>
      <div
        style={{
          backgroundColor:
            theme === 'light' ? backgroundColorLight : backgroundColorDark,
        }}
        className={cn(
          'transition-color relative z-20 flex h-8 w-20 items-center rounded-3xl duration-300 ease-in-out',
          theme === 'light'
            ? ' transition-color duration-300 ease-in-out'
            : 'transition-color duration-300 ease-in-out',
        )}
      >
        <button
          aria-label="Theme Switch Button"
          onClick={handleThemeChange}
          style={{
            backgroundColor: theme === 'light' ? dotColorLight : dotColorDark,
          }}
          className={cn(
            'absolute z-30 mx-2 flex h-4 w-4 rounded-full transition-all duration-300 ease-in-out',
            theme === 'light'
              ? 'translate-x-[48px] bg-white transition-all duration-300 ease-in-out'
              : 'translate-x-0 transition-all duration-300 ease-in-out',
          )}
          {...props}
        />
      </div>
      <div className="absolute flex h-8 w-20 translate-y-[6px] rounded-3xl bg-black opacity-70" />
    </>
  )
}

export default ThemeSwitch
