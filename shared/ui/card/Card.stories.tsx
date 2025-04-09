import { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

import '../../../app/globals.css';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: '#0D0D0D', height: '100vh', padding: '20px' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: {
      control: 'text',
      description: 'Стилизация элемента',
    },
    children: {
      control: 'text',
      description: 'Children',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  parameters: {
    docs: {
      storyDescription: 'Первоначальное состояние',
    },
  },
};
