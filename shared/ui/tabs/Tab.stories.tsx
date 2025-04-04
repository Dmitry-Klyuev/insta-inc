import { Alert } from 'shared/ui/alert/Alert';

import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from 'shared/ui/tabs/Tab';

const meta: Meta<typeof Tab> = {
  title: 'UI/Tab',
  component: Tab,
  tags: ['autodocs'], // Optional: Enables Storybook Docs
  argTypes: {
    title: {
      control: 'text',
      description: 'title inside the tab',
    },
    disabled: {
      control: 'boolean',
      description: 'disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Active: Story = {
  args: {
    title: 'active tab',
    disabled: false,
  },
  parameters: {
    docs: {
      storyDescription: 'Active tab',
    },
  },
};
export const Disabled: Story = {
  args: {
    title: 'disabled tab',
    disabled: true,
  },
  parameters: {
    docs: {
      storyDescription: 'Disabled tab',
    },
  },
};
