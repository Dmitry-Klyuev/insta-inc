import { Scrollbar } from './Scrollbar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Scrollbar',
  component: Scrollbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Scrollbar>;

export default meta;
type Story = StoryObj<typeof Scrollbar>;

export const VerticalScroll: Story = {
  args: {
    children: (
      <div style={{ width: '600px', height: '400px' }}>
        {[...Array(50)].map((_, i) => (
          <p key={i}>Block {i + 1} - Scroll me!</p>
        ))}
      </div>
    ),
  },
};

export const HorizontalScroll: Story = {
  args: {
    children: (
      <div style={{ width: '1000px', height: '70px', whiteSpace: 'nowrap' }}>
        {[...Array(40)].map((_, i) => (
          <p key={i} style={{ display: 'inline-block', width: '100px' }}>
            Block {i + 1}
          </p>
        ))}
      </div>
    ),
  },
};
