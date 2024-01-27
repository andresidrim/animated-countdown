import { useEffect, useState } from 'react'
import { timeType } from '@/types/timeType'

const useFormatTime = (initialTime: timeType) => {
  const [time, setTime] = useState(initialTime)

  const formatTime = () => {
    setTime((prevState) => {
      if (prevState.hours > 23) {
        prevState.days += Math.floor(prevState.hours / 24)
        prevState.hours = prevState.hours % 24
      }
      if (prevState.minutes > 59) {
        prevState.hours += Math.floor(prevState.minutes / 60)
        prevState.minutes = prevState.minutes % 60
      }
      if (prevState.seconds > 59) {
        prevState.minutes += Math.floor(prevState.seconds / 60)
        prevState.seconds = prevState.seconds % 60
      }
      return {
        days: prevState.days > 999 ? 999 : prevState.days,
        hours: prevState.hours,
        minutes: prevState.minutes,
        seconds: prevState.seconds,
      }
    })
  }

  useEffect(() => {
    formatTime()
  }, [])

  return { time }
}

export default useFormatTime
