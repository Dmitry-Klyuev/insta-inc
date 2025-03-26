import React from 'react';
import style from './Button.module.scss';
import Image from 'next/image';
import english_flag from '../../../public/Flag_UnitedKingdom.svg';
import russian_flag from '../../../public/Flag_Russia.svg';

type ButtonTypes = 'english' | 'russian';

type ButtonProps = {
  variant: ButtonTypes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LanguageButton = ({
  disabled,
  variant,
  ...props
}: ButtonProps) => {
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
