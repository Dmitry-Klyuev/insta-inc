'use client';
import { CSSProperties, TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './TextArea.module.scss';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  error?: string;
}

export const TextArea = ({
  width = '284px',
  height = '84px',
  title,
  className,
  disabled,
  error,
  ...props
}: TextAreaProps) => {
  const mergedTextAreaStyle: CSSProperties = {
    width,
    height,
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      {title && (
        <label className={clsx(styles.title, disabled && styles.text_disabled)}>
          {title}
        </label>
      )}
      <textarea
        className={clsx(styles.textArea, error && styles.area_error, className)}
        style={mergedTextAreaStyle}
        placeholder={props.placeholder}
        disabled={disabled}
        {...props}
      />
      {error && <label className={styles.error}>{error}</label>}
    </div>
  );
};
