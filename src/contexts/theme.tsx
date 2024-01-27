'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type themeProviderProps = {
  children: ReactNode
}

type themeContextData = {
  theme: 'light' | 'dark'
  handleThemeChange: () => void
}

export const themeContext = createContext({} as themeContextData)

const ThemeProvider = ({ children }: themeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <themeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext<themeContextData>(themeContext)

  if (context === undefined)
    throw new Error('useTheme has to be used inside a ThemeProvider')

  return context
}

export default ThemeProvider
