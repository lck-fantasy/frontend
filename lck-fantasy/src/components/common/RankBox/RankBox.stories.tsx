import type { Meta, StoryObj } from '@storybook/react'

import ListBox from './RankBox'

const meta = {
  title: 'Example/ListBox',
  component: ListBox,
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'title',
    url: '#',
  },
}
