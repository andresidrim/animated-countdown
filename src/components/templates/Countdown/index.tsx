'use client'

import { Counter, Link, ThemeSwitch } from '@/components/atoms'
import LightTheme from 'public/images/backgroundLight.png'
import DarkTheme from 'public/images/backgroundDark.jpg'
import Image from 'next/image'
import { cn } from '@/services/utils/className'
import { useTheme } from '@/contexts/theme'
import useFormatTime from '@/hooks/useFormatTime'
import useCountdownTimer from '@/hooks/useCountdownTimer'
import { CountdownProps } from './types'

const Countdown = () => {
  const { theme } = useTheme()

  const initialTime: CountdownProps = {
    days: 24,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const { time: formattedTime } = useFormatTime(initialTime)
  const { time, hasFinished } = useCountdownTimer(formattedTime)

  return (
    <div className="relative flex min-h-[100vh] flex-col items-center justify-center">
      <div className="absolute left-0 top-0 flex px-10 py-8">
        <ThemeSwitch
          backgroundColorDark="#deb792"
          dotColorLight="#deb792"
          backgroundColorLight="#2e1945"
          dotColorDark="#2e1945"
        />
      </div>
      <Image
        src={LightTheme}
        alt="Light Theme Background"
        fill
        objectFit="cover"
        className={cn(
          '-z-50 transition-opacity duration-300 ease-in-out',
          theme === 'light'
            ? 'opacity-100 transition-opacity duration-300 ease-in-out'
            : 'opacity-0 transition-opacity duration-300 ease-in-out',
        )}
      />
      <Image
        src={DarkTheme}
        alt="Dark Theme Background"
        fill
        objectFit="cover"
        className={cn(
          '-z-50 transition-opacity duration-300 ease-in-out',
          theme === 'light'
            ? 'opacity-0 transition-opacity duration-300 ease-in-out'
            : 'opacity-100 transition-opacity duration-300 ease-in-out',
        )}
      />
      <div className="flex -translate-y-[50%] flex-col items-center justify-center gap-20">
        <h1
          style={{
            color: !hasFinished
              ? theme === 'light'
                ? '#2e1945'
                : '#deb792'
              : theme === 'light'
                ? '#1f8f00'
                : '#0ddb71',
          }}
          className="whitespace-pre-line text-center text-3xl font-bold transition-colors duration-300 ease-in-out md:whitespace-normal"
        >
          {!hasFinished ? "WE'RE LAUNCHING\nSOON" : 'LAUNCH\nSUCCESSFUL'}
        </h1>
        <div className="flex flex-row gap-5 md:gap-8">
          <Counter
            variant="days"
            lightThemeBackgroundColor="#deb792"
            darkThemeTextColor="#deb792"
            darkThemeDescriptionColor="#deb792"
            lightThemeTextColor="#2e1945"
            lightThemeDescriptionColor="#2e1945"
            darkThemeBackgroundColor="#2e1945"
          >
            {time.days}
          </Counter>
          <Counter
            variant="hours"
            lightThemeBackgroundColor="#deb792"
            darkThemeTextColor="#deb792"
            darkThemeDescriptionColor="#deb792"
            lightThemeTextColor="#2e1945"
            lightThemeDescriptionColor="#2e1945"
            darkThemeBackgroundColor="#2e1945"
          >
            {time.hours}
          </Counter>
          <Counter
            variant="minutes"
            lightThemeBackgroundColor="#deb792"
            darkThemeTextColor="#deb792"
            darkThemeDescriptionColor="#deb792"
            lightThemeTextColor="#2e1945"
            lightThemeDescriptionColor="#2e1945"
            darkThemeBackgroundColor="#2e1945"
          >
            {time.minutes}
          </Counter>
          <Counter
            variant="seconds"
            lightThemeBackgroundColor="#deb792"
            darkThemeTextColor="#deb792"
            darkThemeDescriptionColor="#deb792"
            lightThemeTextColor="#2e1945"
            lightThemeDescriptionColor="#2e1945"
            darkThemeBackgroundColor="#2e1945"
          >
            {time.seconds}
          </Counter>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-row items-center justify-center gap-8 py-10">
        <Link linkTo="https://www.facebook.com" variant="facebook" />
        <Link linkTo="https://www.pinterest.com" variant="pinterest" />
        <Link linkTo="https://www.instagram.com" variant="instagram" />
      </div>
    </div>
  )
}

export default Countdown
