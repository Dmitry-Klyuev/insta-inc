'use client';
import React, { useState } from 'react';

import styles from './Tab.module.scss';

type TabProps = {
  title: string;
  disabled?: boolean;
};
export const Tab = ({ title, disabled = false }: TabProps) => {
  const [active, setActive] = useState(true);
  return (
    <>
      <button
        className={`${styles.tab_container} ${active ? '' : styles.inactive} ${disabled ? styles.disabled : ''}`}
        onClick={() => {
          setActive((prev) => !prev);
        }}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};
