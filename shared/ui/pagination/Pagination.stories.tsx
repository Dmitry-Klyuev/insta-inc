import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

import '../../../app/globals.scss';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: '#0D0D0D', height: '100vh', padding: '20px' }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    totalCount: {
      control: 'number',
      description: 'Общее количество страниц',
    },
    siblingCount: {
      control: 'number',
      description:
        'Минимальное количество кнопок страницы, отображаемые с каждой стороны кнопки текущей страницы',
    },
    currentPage: {
      control: 'number',
      description: 'Текущая активная страница',
    },
    pageSize: {
      control: 'number',
      description: 'Объем данных, отображаемых на одной странице',
    },
    onPageChange: {
      action: 'changed',
      description: 'Обработчик изменения значения',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
  },
  parameters: {
    docs: {
      storyDescription: 'Первоначальное состояние',
    },
  },
};

export const WithMultiplePages: Story = {
  args: {
    totalCount: 200,
    siblingCount: 1,
    currentPage: 5,
    pageSize: 20,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
  },
  parameters: {
    docs: {
      storyDescription: 'С большим количеством страниц',
    },
  },
};

export const AtEnd: Story = {
  args: {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 10,
    pageSize: 10,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
  },
  parameters: {
    docs: {
      storyDescription: 'С текущей страницей в конце',
    },
  },
};

export const AtStart: Story = {
  args: {
    totalCount: 100,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
  },
  parameters: {
    docs: {
      storyDescription: 'С текущей страницей на первой',
    },
  },
};
