import { Sidebar } from './Sidebar'; // путь до твоего компонента

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // опционально — чтобы лучше видеть сайдбар
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      storyDescription:
        'Sidebar with top, middle, and bottom navigation sections.',
    },
  },
};
