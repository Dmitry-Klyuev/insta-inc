'use client';
import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { type DateRange } from 'react-day-picker';

import { getDisplayDate } from '../utils/getDisplayDate';

import styles from './DatePickerButton.module.scss';

type DatePickerButtonProps = {
  onClick: () => void;
  isError?: boolean;
  disabled?: boolean;
  date?: DateRange;
  isActive?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const DatePickerButton = forwardRef<
  HTMLButtonElement,
  DatePickerButtonProps
>(({ onClick, isError, disabled, date, isActive }, ref) => {
  const displayDate = getDisplayDate(date);

  const cn = {
    button: clsx(
      styles.button,
      disabled && styles.buttonDisabled,
      isError && styles.buttonError
    ),
    dateText: clsx(
      styles.dateText,
      disabled && styles.textDisabled,
      isError && styles.textError
    ),
    icon: clsx(
      styles.icon,
      disabled && styles.iconDisabled,
      isError && styles.iconError
    ),
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      type={'button'}
      className={cn.button}
      onClick={onClick}
    >
      <div className={styles.buttonContent}>
        <span className={cn.dateText}>{displayDate}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <use
            xlinkHref={
              isActive
                ? '/sprite/sprite-icons.svg#calendar'
                : '/sprite/sprite-icons.svg#calendar-outline'
            }
          />
        </svg>
      </div>
    </button>
  );
});

DatePickerButton.displayName = 'DatePickerButton';
