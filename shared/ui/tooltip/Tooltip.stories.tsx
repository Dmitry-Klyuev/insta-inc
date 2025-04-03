import { Meta, StoryObj } from '@storybook/react';
import '../../../app/globals.css';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Текст подсказки',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно элемента',
    },
    delay: {
      control: 'number',
      description: 'Задержка появления/исчезновения (мс)',
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
    text: 'Это текст подсказки',
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
    text: 'Подсказка в разных позициях',
  },
  parameters: {
    docs: {
      storyDescription: 'Тултип во всех возможных позициях.',
    },
  },
};

export const WithDelay: Story = {
  args: {
    text: 'Появляется с задержкой',
    delay: 200,
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
    text: 'Подсказка для сложного элемента',
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
