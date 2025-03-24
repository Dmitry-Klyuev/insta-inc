import type { InputHTMLAttributes } from 'react';
import s from './checkbox.module.scss';

type CheckboxProps = {
  title?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ title, disabled, ...props }: CheckboxProps) => {
  return (
    <label className={`${s.label} ${disabled ? s.disabled : ''}`}>
      <div className={`${s.checkboxContainer} ${disabled ? s.disabled : ''}`}>
        <input
          className={`${s.checkbox} ${disabled ? s.disabled : ''}`}
          type="checkbox"
          disabled={disabled}
          {...props}
        />
      </div>
      {title}
    </label>
  );
};
