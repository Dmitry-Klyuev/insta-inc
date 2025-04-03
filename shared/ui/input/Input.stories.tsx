import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/input/Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'], // Optional: Enables Storybook Docs
  argTypes: {
    label: {
      control: 'text',
      description: 'label of the input',
    },
    type: {
      control: 'text',
      description: 'type of the input - text, password, email, search',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder of the input',
    },
    error: {
      control: 'boolean',
      description: 'error parameter',
    },
    disabled: {
      control: 'boolean',
      description: 'disabled parameter',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    label: 'text input',
    placeholder: 'put your text here',
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Text Input',
    },
  },
};

export const Passord: Story = {
  args: {
    type: 'password',
    label: 'password input',
    placeholder: 'put your password here',
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Passoword Input',
    },
  },
};
export const Email: Story = {
  args: {
    type: 'email',
    label: 'email input',
    placeholder: 'put your email here',
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Email Input',
    },
  },
};
export const Search: Story = {
  args: {
    type: 'search',
    label: 'search input',
    placeholder: 'you want to search?',
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Search Input',
    },
  },
};
export const Error: Story = {
  args: {
    type: 'text',
    label: 'text input with error',
    placeholder: 'Example of an input with an error',
    error: true,
    disabled: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Text Input with error',
    },
  },
};
export const Disabled: Story = {
  args: {
    type: 'text',
    label: 'text input disabled',
    placeholder: 'Example of a disabled input',
    error: false,
    disabled: true,
  },
  parameters: {
    docs: {
      storyDescription: 'Text Input Disabled',
    },
  },
};
