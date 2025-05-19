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
    label: {
      control: 'text',
      description: 'Текст рядом с чекбоксом',
    },
    disabled: {
      control: 'boolean',
      description: 'Блокирует взаимодействие с чекбоксом',
    },
    onChange: {
      action: 'changed',
      description: 'Callback при изменении состояния',
    },
    checkboxSize: {
      control: 'number',
      description: 'Задается размер самого чекбокс',
    },
    valueFontSize: {
      control: 'number',
      description: 'Размер текста метки рядом с чекбоксом',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
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
    label: 'Active Checkbox',
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
    label: 'Disabled Checkbox',
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
