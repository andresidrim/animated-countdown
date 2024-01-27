import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './react-slick.css'
import Providers from './providers'
import { cn } from '@/services/utils/className'
import Favicon from '@/components/Favicon'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Animated Countdown',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Favicon />
      <body className={cn(inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
