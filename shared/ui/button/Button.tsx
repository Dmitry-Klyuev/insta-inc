import React from 'react';
import style from './Button.module.scss';


type ButtonTypes = 'primary' | 'dark' | 'outlined' | 'link';

type ButtonProps = {
    title: string;
    variant: ButtonTypes;
} &  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ title, disabled, variant, ...props }: ButtonProps) => {
    return (
        <button
            className={`${style.btn} ${style[variant]}`}
            disabled={disabled}
            {...props}
        >
            {title}
        </button>
    );
};
