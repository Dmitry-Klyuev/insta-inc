import type { InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import s from './Checkbox.module.scss';

type CheckboxProps = {
  value?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ value, disabled, ...props }: CheckboxProps) => {
  return (
    <label className={clsx(s.label, disabled && s.disabled)}>
      <div className={clsx(s.checkboxContainer, disabled && s.disabled)}>
        <input
          className={clsx(s.checkbox, disabled && s.disabled)}
          type="checkbox"
          disabled={disabled}
          {...props}
        />
      </div>
      {value}
    </label>
  );
};
