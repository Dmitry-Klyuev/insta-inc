import { Meta, StoryObj } from '@storybook/react';
import '../../../app/globals.css';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок над текстовым полем',
    },
    width: {
      control: 'text',
      description: 'Ширина текстового поля',
    },
    height: {
      control: 'text',
      description: 'Высота текстового поля',
    },
    placeholder: {
      control: 'text',
      description: 'Подсказка внутри поля',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключено ли поле',
    },
    error: {
      control: 'text',
      description: 'Текст ошибки под полем',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
    value: {
      control: 'text',
      description: 'Текущее значение поля',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения значения',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

// Стандартное состояние
export const Default: Story = {
  args: {
    placeholder: 'Введите ваш текст здесь...',
    width: '400px',
    height: '200px',
  },
  parameters: {
    docs: {
      storyDescription: 'Стандартное состояние текстового поля.',
    },
  },
};

export const Active: Story = {
  args: {
    title: 'Описание профиля',
    placeholder: 'Расскажите о себе...',
    width: '400px',
    height: '200px',
  },
  parameters: {
    docs: {
      storyDescription: 'Текстовое поле с заголовком.',
    },
  },
};

export const Error: Story = {
  args: {
    title: 'Комментарий',
    placeholder: 'Оставьте ваш комментарий',
    error: 'Тут будет ошибка',
    width: '400px',
    height: '200px',
  },
  parameters: {
    docs: {
      storyDescription: 'Текстовое поле с сообщением об ошибке.',
    },
  },
};

export const Disabled: Story = {
  args: {
    title: 'Неактивное поле',
    placeholder: 'Это поле отключено',
    disabled: true,
    value: 'Нельзя изменить',
    width: '400px',
    height: '200px',
  },
  parameters: {
    docs: {
      storyDescription: 'Отключенное текстовое поле.',
    },
  },
};
