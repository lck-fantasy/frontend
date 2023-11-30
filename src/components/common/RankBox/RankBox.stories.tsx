import type { Meta, StoryObj } from '@storybook/react'

import RankBox from './RankBox'

const meta = {
  title: 'Example/ListBox',
  component: RankBox,
} satisfies Meta<typeof RankBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'title',
    subTitle: '#',
    url: 'sdf',
    children: <div>STORY</div>,
  },
}
