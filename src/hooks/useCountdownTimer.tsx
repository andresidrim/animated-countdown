import { useEffect, useState } from 'react'
import { CountdownProps } from '@/components/templates/Countdown/types'

const useCountdownTimer = (initialTime: CountdownProps) => {
  const [time, setTime] = useState(initialTime)
  const [hasFinished, setHasFinished] = useState(false)

  useEffect(() => {
    if (
      time.days === 0 &&
      time.hours === 0 &&
      time.minutes === 0 &&
      time.seconds === 0
    ) {
      setHasFinished(true)
      return
    }
    const timer = setInterval(() => {
      setTime((prevState) => {
        if (prevState.seconds) {
          prevState.seconds--
        } else if (prevState.minutes) {
          prevState.minutes--
          prevState.seconds = 59
        } else if (prevState.hours) {
          prevState.hours--
          prevState.minutes = 59
          prevState.seconds = 59
        } else if (prevState.days) {
          prevState.days--
          prevState.hours = 23
          prevState.minutes = 59
          prevState.seconds = 59
        }
        return {
          days: prevState.days,
          hours: prevState.hours,
          minutes: prevState.minutes,
          seconds: prevState.seconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [time])

  return { time, hasFinished }
}

export default useCountdownTimer
