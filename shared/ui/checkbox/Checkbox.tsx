'use client';

import type { InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { IconSvg } from './iconSvg/IconSvg';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  value?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ value, disabled, ...props }: CheckboxProps) => {
  return (
    <label className={clsx(styles.label, disabled && styles.disabled)}>
      <div
        className={clsx(styles.checkboxContainer, disabled && styles.disabled)}
      >
        <input
          className={clsx(styles.checkbox, disabled && styles.disabled)}
          type="checkbox"
          disabled={disabled}
          {...props}
        />
        <IconSvg
          width="17"
          height="17"
          iconId={'checkmark-outline'}
          className={styles.svg}
        />
      </div>
      {value}
    </label>
  );
};
