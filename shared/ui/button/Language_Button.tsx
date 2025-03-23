import React from 'react';
import style from './Button.module.scss';
import Image from "next/image";
import english_logo from "../../../public/Flag_UnitedKingdom.svg";
import russian_logo from "../../../public/Flag_Russia.svg";


type ButtonTypes = 'english' | 'russian'

type ButtonProps = {
    variant: ButtonTypes
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LanguageButton = ({disabled, variant, ...props}: ButtonProps) => {
    const logos: Record<ButtonTypes, string> = {
        english: english_logo,
        russian: russian_logo,
    };
    const logo = logos[variant];
    return (
        <button
            className={`${style.btn} ${style.language}`}
            disabled={disabled}
            {...props}
        >
            <Image src={logo} alt={variant} width={20} height={20}></Image>
            {variant}
        </button>
    );
};
