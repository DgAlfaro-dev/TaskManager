import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '../../components/InputText';

const meta = {
  title: 'Components/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    value: "",
    error: ""
  },
  argTypes: {
    onChange: { table: { disable: true } },
  },
};
