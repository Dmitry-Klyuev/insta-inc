import { Meta, StoryObj } from '@storybook/react';
import '../../../app/globals.css';

import { ReCaptcha } from './ReCaptcha';

const meta: Meta<typeof ReCaptcha> = {
  title: 'UI/ReCaptcha',
  component: ReCaptcha,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stateCheckbox: {
      control: 'text',
      description: 'Статус для ReCapture',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReCaptcha>;

// Стандартное состояние
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      storyDescription: 'Стандартное состояние ReCaptcha',
    },
  },
};

export const Checked: Story = {
  args: {
    stateCheckbox: 'checked',
  },
  parameters: {
    docs: {
      storyDescription: 'Состояние ReCaptcha с отмеченным чекбоксом',
    },
  },
};

export const Error: Story = {
  args: {
    stateCheckbox: 'error',
  },
  parameters: {
    docs: {
      storyDescription: 'Состояние ReCaptcha поле с сообщением об ошибке.',
    },
  },
};

export const Loading: Story = {
  args: {
    stateCheckbox: 'loading',
  },
  parameters: {
    docs: {
      storyDescription: 'Состояние ReCaptcha с загрузкой.',
    },
  },
};
export const Expired: Story = {
  args: {
    stateCheckbox: 'expired',
  },
  parameters: {
    docs: {
      storyDescription: 'Состояние ReCaptcha с истекшим сроком.',
    },
  },
};
