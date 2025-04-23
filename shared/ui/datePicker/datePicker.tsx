'use client';
import { useState } from 'react';

import clsx from 'clsx';
import { type DateRange, DayPicker } from 'react-day-picker';

import { DatePickerButton } from './datePickerButton/DatePickerButton';
import { useOutsideClick } from './hooks/useOutsideClick';

import styles from './datePicker.module.scss';

export type DatePickerProps = {
  label: string;
  error?: string;
  disabled?: boolean;
  selectedRange?: DateRange;
  onSelect?: (range?: DateRange) => void;
  className?: string;
};

export const DatePicker = (props: DatePickerProps) => {
  const { label, error, disabled, selectedRange, onSelect, className } = props;

  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const { buttonRef, calendarRef } = useOutsideClick(() =>
    setIsCalendarOpen(false)
  );

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const cn = {
    component_wrapper: clsx(styles.componentWrapper, className),
    button_label: styles.buttonLabel,
    day_picker_container: styles.daypickerContainer,
    root: styles.root,
    day: styles.day,
    weeks: styles.weeks,
    today: styles.today,
    selected: styles.selectedDay,
    month_caption: styles.monthCaption,
    chevron: styles.chevron,
    nav: styles.nav,
    button_next: styles.next,
    button_previous: styles.previous,
    outside: styles.outsideDays,
  };

  const modifiersCn = {
    weekend: styles.weekend,
    range_start: styles.rangeStart,
    range_end: styles.rangeEnd,
  };

  return (
    <div className={cn.component_wrapper}>
      {label && <p className={cn.button_label}>{label}</p>}

      <DatePickerButton
        isActive={isCalendarOpen}
        ref={buttonRef}
        disabled={disabled}
        isError={!!error}
        onClick={toggleCalendar}
        date={selectedRange}
      />

      {isCalendarOpen && (
        <div ref={calendarRef} className={cn.day_picker_container}>
          <DayPicker
            showOutsideDays
            modifiers={{
              weekend: { dayOfWeek: [0, 6] },
              range_start: selectedRange?.from,
              range_end: selectedRange?.to,
            }}
            modifiersClassNames={modifiersCn}
            weekStartsOn={1}
            classNames={cn}
            mode={'range'}
            selected={selectedRange}
            onSelect={onSelect}
          />
        </div>
      )}
      {error && (
        <span className={styles.error}>{error}</span>
        // <Typography as={'span'} variant={'small-text'} className={styles.error}>
        //   {error}
        // </Typography>
      )}
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
