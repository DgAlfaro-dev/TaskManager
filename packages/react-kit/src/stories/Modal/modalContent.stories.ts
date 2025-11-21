import type { Meta, StoryObj } from '@storybook/react';
import { ExampleModal } from './ExampleModal';


const meta = {
  title: 'Components/Modal',
  component: ExampleModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
      },
  argTypes : {    
  }
};
