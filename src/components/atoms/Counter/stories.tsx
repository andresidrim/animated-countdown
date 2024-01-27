import { Meta, StoryObj } from '@storybook/react'
import Counter from '.'
import { CounterProps } from './types'

const meta: Meta<CounterProps> = {
  title: 'Components/Atoms/Counter',
  component: Counter,
  args: {
    children: 8,
    variant: 'days',
    lightThemeBackgroundColor: undefined,
    lightThemeDescriptionColor: undefined,
    lightThemeTextColor: undefined,
    darkThemeBackgroundColor: undefined,
    darkThemeDescriptionColor: undefined,
    darkThemeTextColor: undefined,
  },

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<CounterProps>

export const Default: Story = {}
