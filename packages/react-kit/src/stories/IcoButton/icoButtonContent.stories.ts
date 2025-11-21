import type { Meta, StoryObj } from '@storybook/react';

import { ExampleIcoButton } from './ExampleIcoButton';

const meta = {
  title: 'Components/IcoButton',
  component: ExampleIcoButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleIcoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    icon: 'IconAudio',
    disabled: false,
    type: "success" 
  },
  argTypes: {
    handleAdd: { table: { disable: true } },
    type: {
      control: { type: 'select' },
    },
  },
};
