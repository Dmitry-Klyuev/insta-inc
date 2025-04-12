import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст метки рядом с чекбоксом',
    },
    disabled: {
      control: 'boolean',
      description: 'Блокирует взаимодействие с чекбоксом',
    },
    onChange: {
      action: 'changed',
      description: 'Callback при изменении состояния',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    value: 'Default Checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'Стандартное состояние чекбокс',
      },
    },
  },
};
export const DefaultWithoutValue: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Стандартное состояние чекбокс',
      },
    },
  },
};

export const Active: Story = {
  args: {
    value: 'Active Checkbox',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Активное состояние чекбокса (выбран)',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled Checkbox',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Заблокированное состояние с чекбоксом',
      },
    },
  },
};
