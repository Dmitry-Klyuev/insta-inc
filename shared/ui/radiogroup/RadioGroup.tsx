'use client';

import React from 'react';

import * as Radio from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
  title?: string;
  status?: boolean;
  onClick?: () => void;
  disable?: boolean;
};

export const Radio_Group = ({
  title,
  status,
  onClick,
  disable,
}: RadioGroupProps) => {
  return (
    <>
      <Radio.Root className={styles.Root} disabled={disable}>
        <Radio.Item
          value={'qwe'}
          className={styles.Item}
          onClick={onClick}
          title={title}
          id={title}
        >
          {status ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.svg_search}
            >
              <use xlinkHref="/sprite/sprite-icons.svg#radio-button-checked" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.svg_search}
            >
              <use xlinkHref="/sprite/sprite-icons.svg#radio-button-unchecked" />
            </svg>
          )}
        </Radio.Item>
        <label
          htmlFor={title}
          className={clsx(styles.Label, disable && styles.disabled)}
        >
          {title}
        </label>
      </Radio.Root>
    </>
  );
};
