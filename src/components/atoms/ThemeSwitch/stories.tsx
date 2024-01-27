import { Meta, StoryObj } from '@storybook/react'
import ThemeSwitch from '.'
import ThemeProvider from '@/contexts/theme'

const meta: Meta = {
  title: 'Components/Atoms/ThemeSwitch',
  component: ThemeSwitch,

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeSwitch />
    </ThemeProvider>
  ),
}
