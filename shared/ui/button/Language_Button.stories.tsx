import { LanguageButton } from 'shared/ui/button/Language_Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LanguageButton> = {
  title: 'UI/LanguageButton',
  component: LanguageButton,
  tags: ['autodocs'], // Optional: Enables Storybook Docs
  argTypes: {
    variant: {
      control: 'text',
      description: 'choose language',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageButton>;

export const English: Story = {
  args: {
    variant: 'english',
  },
  parameters: {
    docs: {
      storyDescription: 'English language',
    },
  },
};

export const Russian: Story = {
  args: {
    variant: 'russian',
  },
  parameters: {
    docs: {
      storyDescription: 'Russian language',
    },
  },
};
