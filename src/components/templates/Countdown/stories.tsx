import { Meta, StoryObj } from '@storybook/react'
import Countdown from '.'
import { CountdownProps } from './types'
import ThemeProvider from '@/contexts/theme'

const meta: Meta<CountdownProps> = {
  title: 'Components/Templates/Countdown',
  component: Countdown,
  args: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<CountdownProps>

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <Countdown />
    </ThemeProvider>
  ),
}
