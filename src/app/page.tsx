import ThemeProvider from '@/contexts/theme'
import Countdown from '@/components/templates/Countdown'

export default function Home() {
  return (
    <main>
      <ThemeProvider>
        <Countdown />
      </ThemeProvider>
    </main>
  )
}
