import { Meta, StoryObj } from '@storybook/react';

import '../../../styles/globals.scss';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Текст подсказки',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно элемента',
    },
    openDelay: {
      control: 'number',
      description: 'Задержка появления (мс)',
    },
    closedDelay: {
      control: 'number',
      description: 'Задержка исчезновения (мс)',
    },
    children: {
      control: 'text',
      description: 'Элемент, при наведении на который появляется тултип',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Это текст подсказки',
    children: 'Наведи на меня',
  },
  parameters: {
    docs: {
      storyDescription: 'Стандартное использование тултипа.',
    },
  },
};

export const Positions: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
      <Tooltip {...args} position="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip {...args} position="right">
        <button>Right</button>
      </Tooltip>
      <Tooltip {...args} position="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip {...args} position="left">
        <button>Left</button>
      </Tooltip>
    </div>
  ),
  args: {
    content: 'Подсказка в разных позициях',
  },
  parameters: {
    docs: {
      storyDescription: 'Тултип во всех возможных позициях.',
    },
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Появляется с задержкой',
    openDelay: 200,
    closedDelay: 200,
    children: 'Наведи и подожди',
  },
  parameters: {
    docs: {
      storyDescription: 'Тултип с задержкой появления 500мс.',
    },
  },
};

export const ComplexChildren: Story = {
  args: {
    content: 'Подсказка для сложного элемента',
    children: (
      <div style={{ padding: '10px', background: '#eee', borderRadius: '4px' }}>
        Элемент с тултипом
      </div>
    ),
  },
  parameters: {
    docs: {
      storyDescription: 'Тултип для сложного дочернего элемента.',
    },
  },
};

export const TextTrigger: Story = {
  args: {
    children: 'Простой текст',
  },
};

export const ButtonTrigger: Story = {
  args: {
    children: <button>Кнопка</button>,
  },
};
