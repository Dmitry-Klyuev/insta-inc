import { useState } from 'react';

import { DatePicker, type DatePickerProps } from './datePicker';

import type { Meta, StoryObj } from '@storybook/react';
import type { DateRange } from 'react-day-picker';

const meta = {
  title: 'UI/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const CreateDatePickerStory = (args: DatePickerProps) => {
  const [selected, setSelected] = useState<DateRange>();

  return (
    <DatePicker selectedRange={selected} onSelect={setSelected} {...args} />
  );
};

export const Default: Story = {
  args: {
    label: 'Date select',
  },
  render: CreateDatePickerStory,
};

export const WithError: Story = {
  args: {
    label: 'Date select',
    error: 'Error!',
  },
  render: CreateDatePickerStory,
};

export const Disabled: Story = {
  args: {
    label: 'Date select disabled',
    disabled: true,
  },
  render: CreateDatePickerStory,
};
