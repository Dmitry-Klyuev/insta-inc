import { Alert } from 'shared/ui/alert/Alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'], // Optional: Enables Storybook Docs
  argTypes: {
    type: {
      control: 'text',
      description: 'type of alert - success or error',
    },
    message: {
      control: 'text',
      description: 'message inside of the alert.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success!',
  },
  parameters: {
    docs: {
      storyDescription: 'Success Alert',
    },
  },
};
export const Error: Story = {
  args: {
    type: 'error',
    message: 'Error!',
  },
  parameters: {
    docs: {
      storyDescription: 'Error Alert',
    },
  },
};
