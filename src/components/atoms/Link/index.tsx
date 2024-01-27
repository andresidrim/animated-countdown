import { cn } from '@/services/utils/className'
import { LinkProps } from './types'
import { FaFacebookSquare, FaPinterest, FaInstagram } from 'react-icons/fa'
import { useTheme } from '@/contexts/theme'

const Link = ({
  variant,
  lightThemeColor = '#000',
  darkThemeColor = '#fff',
  linkTo,
  className,
  ...props
}: LinkProps) => {
  const { theme } = useTheme()

  const handleIcons = () => {
    switch (variant) {
      case 'facebook':
        return <FaFacebookSquare size={32} />
      case 'pinterest':
        return <FaPinterest size={32} />
      case 'instagram':
        return <FaInstagram size={32} />
    }
  }

  return (
    <a
      href={linkTo}
      aria-label="Social Media Link"
      style={{
        color: theme === 'light' ? lightThemeColor : darkThemeColor,
        outlineColor: theme === 'light' ? lightThemeColor : darkThemeColor,
      }}
      className={cn(
        'flex w-fit text-white opacity-60 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-4 active:scale-90',
        className,
      )}
      {...props}
    >
      {handleIcons()}
    </a>
  )
}

export default Link
