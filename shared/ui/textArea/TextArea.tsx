import { CSSProperties, TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';

import s from './TextArea.module.scss';

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
    <div className={clsx(s.wrapper, className)}>
      {title && (
        <label className={clsx(s.title, disabled && s.textDisbled)}>
          {title}
        </label>
      )}
      <textarea
        className={clsx(s.textArea, error && s.areaError, className)}
        style={mergedTextAreaStyle}
        placeholder={props.placeholder}
        disabled={disabled}
        {...props}
      />
      {error && <label className={s.error}>{error}</label>}
    </div>
  );
};
