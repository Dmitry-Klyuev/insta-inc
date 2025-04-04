import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'], // Optional: Enables Storybook Docs
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'change on onChlick',
    },
    title: {
      control: 'text',
      description: 'title of the button',
    },
    variant: {
      control: 'text',
      description: 'variant of the button - Primary, Dark, Outlined or Link ',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Primary Button',
  },
  parameters: {
    docs: {
      storyDescription: 'Primary Button',
    },
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    title: 'Dark Button',
  },
  parameters: {
    docs: {
      storyDescription: 'Dark Button',
    },
  },
};
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Button',
  },
  parameters: {
    docs: {
      storyDescription: 'Outlined Button',
    },
  },
};
export const Link: Story = {
  args: {
    variant: 'link',
    title: 'Link Button',
  },
  parameters: {
    docs: {
      storyDescription: 'Link Button',
    },
  },
};
