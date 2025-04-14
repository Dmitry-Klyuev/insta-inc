import { useEffect } from 'react';

import { useArgs } from '@storybook/preview-api';

import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Заголовок над селектом',
    },
    placeholder: {
      control: 'text',
      description:
        'Текст-подсказка, который отображается когда не выбрано ни одного значения',
    },
    data: {
      control: 'object',
      description:
        'Массив данных для отображения в выпадающем списке. Может содержать строки или числа. Для языкового селекта используется предопределенный набор вариантов',
    },
    onChange: {
      action: 'changed',
      description:
        'Callback-функция, вызываемая при изменении выбранного значения. Принимает выбранное значение в качестве аргумента',
    },
    selectedLanguage: {
      control: 'boolean',
      description: 'Флаг переключения в режим выбора языка',
    },
    value: {
      control: 'text',
      description:
        'Текущее выбранное значение. Должно соответствовать одному из элементов массива data (для обычного режима) или "Russian"/"English" (для языкового режима).',
    },
    disabled: {
      control: 'boolean',
      description: 'Флаг отключения взаимодействия с селектом',
    },
    width: {
      control: 'text',
      description: 'Ширина селекта',
    },
    height: {
      control: 'text',
      description: 'Высота селекта',
    },
  },
  args: {
    label: 'Select',
    placeholder: 'Ваш выбор...',
    data: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    onChange: (value: string) => console.log(value),
    value: '',
    selectedLanguage: false,
    width: '210px',
    height: '36px',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => {
  const [, updateArgs] = useArgs();

  useEffect(() => {
    if (args.selectedLanguage) {
      updateArgs({ value: 'Russian' });
    } else {
      updateArgs({ value: '' });
    }
  }, [args.selectedLanguage, updateArgs]);

  const handleChange = (value: string) => {
    updateArgs({ value });
    args.onChange(value);
  };

  return <Select {...args} onChange={handleChange} />;
};

export const DefaultSelect: Story = {
  args: {
    label: 'Default Select',
  },
  render: Template,
};

export const LanguageSelect: Story = {
  args: {
    selectedLanguage: true,
    label: 'Language Select',
  },
  render: Template,
};

export const DisabledSelect: Story = {
  args: {
    disabled: true,
    label: 'Disabled Select',
  },
  render: Template,
};
