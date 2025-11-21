import type { Meta, StoryObj } from '@storybook/react';

import { CustomAvatar } from '../../components/CustomAvatar';

const meta = {
  title: 'Components/Avatar',
  component: CustomAvatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    name: 'Remy Sharp',
    srcImage:
      'https://images.unsplash.com/photo-1702482858444-81b00ec28c27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  argTypes: {},
};
