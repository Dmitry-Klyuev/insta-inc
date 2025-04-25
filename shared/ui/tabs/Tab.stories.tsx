import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from 'shared/ui/tabs/Tab';

const mockTabs = [
  {
    label: 'Tab 1',
    content: <p>This is the content for Tab 1</p>,
  },
  {
    label: 'Tab 2',
    content: <p>This is the content for Tab 2</p>,
  },
  {
    label: 'Disabled Tab',
    content: <p>This tab is disabled</p>,
    disabled: true,
  },
];

const meta: Meta<typeof Tab> = {
  title: 'UI/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    tabs: mockTabs,
  },
  parameters: {
    docs: {
      storyDescription: 'Default tab set with a disabled tab.',
    },
  },
};
