import React from 'react';

import Image from 'next/image';

import russian_flag from '../../../public/Flag_Russia.svg';
import english_flag from '../../../public/Flag_UnitedKingdom.svg';

import style from './Button.module.scss';

type ButtonTypes = 'english' | 'russian';

export type LanguageButtonProps = {
  variant: ButtonTypes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LanguageButton = ({
  disabled,
  variant,
  ...props
}: LanguageButtonProps) => {
  const flags: Record<ButtonTypes, string> = {
    english: english_flag,
    russian: russian_flag,
  };
  const flag = flags[variant];
  return (
    <button
      className={`${style.btn} ${style.language}`}
      disabled={disabled}
      {...props}
    >
      <Image src={flag} alt={variant} width={20} height={20}></Image>
      {variant}
    </button>
  );
};
