'use client';

import Image from 'next/image';

import russian_flag from '../../../public/Flag_Russia.svg';
import english_flag from '../../../public/Flag_UnitedKingdom.svg';

import styles from './LanguageItem.module.scss';

export type SelectLanguageItem = 'Russian' | 'English';

export const LanguageItem = ({
  language,
}: {
  language: SelectLanguageItem;
}) => {
  return (
    <div className={styles.selectContainer}>
      <div className={styles.languageItemWrapper}>
        <Image
          src={language === 'Russian' ? russian_flag : english_flag}
          alt={`${language} flag`}
          width={20}
          height={20}
        />
        <span>{language}</span>
      </div>
    </div>
  );
};
