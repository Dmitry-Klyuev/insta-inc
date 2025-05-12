import { Meta, StoryObj } from '@storybook/react';

import '../../../styles/globals.scss';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Текст заголовка/логотипа в хедере',
    },
    isAuth: {
      control: 'boolean',
      description: 'Состояние авторизации пользователя',
    },
    // Добавлено новое поле для управления количеством уведомлений
    notificationCount: {
      control: {
        type: 'number',
        min: 0,
        max: 999,
        step: 1,
      },
      description: 'Количество непрочитанных уведомлений',
    },
    onLogin: {
      action: 'Login clicked',
      description: 'Коллбэк при клике на кнопку входа',
    },
    onSignup: {
      action: 'Signup clicked',
      description: 'Коллбэк при клике на кнопку регистрации',
    },
  },
  args: {
    title: 'Inctagram',
    isAuth: false,
    // Добавлено значение по умолчанию для notificationCount
    notificationCount: 0,
    onLogin: () => {},
    onSignup: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const NotAuthenticated: Story = {
  args: {
    isAuth: false,
    // Добавлено явное указание notificationCount
    notificationCount: 0,
  },
  parameters: {
    docs: {
      storyDescription:
        'Хедер в состоянии неавторизованного пользователя с кнопками входа/регистрации.',
    },
  },
};

export const Authenticated: Story = {
  args: {
    isAuth: true,
    // Установлено значение 3 для демонстрации уведомлений
    notificationCount: 3,
  },
  parameters: {
    docs: {
      storyDescription:
        'Хедер в состоянии авторизованного пользователя с уведомлениями.',
    },
  },
};

export const AuthenticatedWithoutNotifications: Story = {
  args: {
    isAuth: true,
    // Явно указано 0 уведомлений
    notificationCount: 0,
  },
  parameters: {
    docs: {
      storyDescription:
        'Хедер в состоянии авторизованного пользователя без уведомлений.',
    },
  },
};

export const InteractiveExample: Story = {
  render: (args) => (
    <div style={{ height: '100vh' }}>
      <Header {...args} />
      <div style={{ padding: '20px' }}>
        <p>Попробуйте изменить параметры хедера в панели Controls</p>
      </div>
    </div>
  ),
  args: {
    isAuth: false,
    // Добавлено значение по умолчанию
    notificationCount: 0,
  },
  parameters: {
    docs: {
      storyDescription:
        'Интерактивный пример с возможностью изменения параметров.',
    },
  },
};
