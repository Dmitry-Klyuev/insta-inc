'use client';

import {
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react';

import { clsx } from 'clsx';

import { IconSvg } from './iconSvg/IconSvg';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  disabled?: boolean;
  checkboxSize?: number;
  valueFontSize?: number;
  label?: string | ReactNode;
  checked?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      disabled,
      checkboxSize,
      valueFontSize,
      label,
      checked,
      onChange,
      onBlur,
      name,
      ...props
    },
    ref
  ) => {
    const mergedCheckboxStyle: CSSProperties = {
      width: checkboxSize ? `${checkboxSize}px` : '',
      height: checkboxSize ? `${checkboxSize}px` : '',
    };
    const mergedValueStyle: CSSProperties = {
      fontSize: valueFontSize ? `${valueFontSize}px` : '',
    };

    return (
      <div className={styles.containerComponent}>
        <label className={clsx(styles.label, disabled && styles.disabled)}>
          <div
            className={clsx(
              styles.checkboxContainer,
              disabled && styles.disabled
            )}
          >
            <input
              className={clsx(styles.checkbox, disabled && styles.disabled)}
              type="checkbox"
              style={mergedCheckboxStyle}
              disabled={disabled}
              checked={checked}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={ref}
              {...props}
            />
            <IconSvg
              width={checkboxSize ? `${checkboxSize}px` : '18px'}
              height={checkboxSize ? `${checkboxSize}px` : '18px'}
              iconId="checkmark-outline"
              className={styles.svg}
            />
          </div>
          {typeof label === 'string' && (
            <span className={styles.link} style={mergedValueStyle}>
              {label}
            </span>
          )}
        </label>
        {typeof label !== 'string' && (
          <div className={styles.link} style={mergedValueStyle}>
            {label}
          </div>
        )}
      </div>
    );
  }
);

// ✅ Обязательно добавь displayName, чтобы избежать warning в dev-режиме
Checkbox.displayName = 'Checkbox';
