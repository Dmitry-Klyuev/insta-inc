'use client';

import React, { useState } from 'react';
import style from './Alert.module.scss';
import Image from 'next/image';
import closeIcon from '../../../public/close.svg';

type AlertTypes = 'success' | 'error';
type AlertProps = {
  type?: AlertTypes;
  message?: string;
};
export const Alert = ({ type = 'success', message }: AlertProps) => {
  const [closed, setClosed] = useState(false);
  return (
    <div
      className={`${style.alert_container} ${style[type]} ${closed ? style.closed : ''}`}
    >
      <span>
        {message ??
          (type === 'success' ? (
            'Your settings are saved'
          ) : (
            <>
              <strong>Error!</strong> Server is not available
            </>
          ))}
      </span>
      <button
        className={style.close_button}
        onClick={() => setClosed((prev) => !prev)}
      >
        <Image src={closeIcon} alt={'close'}></Image>
      </button>
    </div>
  );
};
