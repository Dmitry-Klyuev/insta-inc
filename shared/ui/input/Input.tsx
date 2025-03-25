'use client';
import React, { useState } from 'react';

import styles from './Input.module.scss';

import eyeIcon from '../../../public/eye-outline.svg';
import searchIcon from '../../../public/search-outline.svg';

import Image from 'next/image';

type BasicInputTypes = 'text' | 'password' | 'email' | 'search';
type InputProps = {
  label: string;
  type?: BasicInputTypes;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  type = 'text',
  placeholder,
  error = false,
  disabled = false,
  ...props
}: InputProps) => {
  //placeholder
  const defaultPlaceholder =
    placeholder ??
    (() => {
      switch (type) {
        case 'email':
          return 'Epam@epam.com';
        case 'text':
          return 'Paste your text here';
        case 'password':
          return 'Provide your password';
        case 'search':
          return 'Input search';
        default:
          return '';
      }
    })();
  //show password button
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };
  //search button
  const searchOnclick = () => {
    alert('search');
  };
  return (
    <>
      <div className={styles.input_container}>
        {type === 'search' && (
          <button className={styles.btn_search} onClick={searchOnclick}>
            <Image src={searchIcon} alt={'search'}></Image>
          </button>
        )}
        <label className={styles.input_label}>{label}</label>
        <input
          className={`${styles.input_body} ${type === 'search' ? styles.input_search : ''} ${error ? styles.error : ''}`}
          type={showPassword ? 'text' : type}
          placeholder={defaultPlaceholder}
          disabled={disabled}
          {...props}
        />
        {type === 'password' && (
          <button
            className={styles.btn_show_password}
            onClick={showPasswordToggle}
          >
            <Image src={eyeIcon} alt={'show password'}></Image>
          </button>
        )}
      </div>
      {error && <span className={styles.error_message}>Error</span>}
    </>
  );
};
