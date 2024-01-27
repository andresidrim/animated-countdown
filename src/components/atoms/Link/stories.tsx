import { Meta, StoryObj } from '@storybook/react'
import Link from '.'

const meta: Meta = {
  title: 'Components/Atoms/Link',
  component: Link,
  args: {
    variant: 'facebook',
    lightThemeColor: undefined,
    darkThemeColor: undefined,
    linkTo: undefined,
  },

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {}
