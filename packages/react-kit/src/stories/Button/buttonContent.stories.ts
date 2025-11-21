import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from '../../components/Button';

const meta = {
  title: 'Components/Button',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    disabled: false,
    label: "Add"
  },
  argTypes : {
    onClick: { table: { disable: true } },
    type: {
      control: { type: 'select' },
    },
  }
};
