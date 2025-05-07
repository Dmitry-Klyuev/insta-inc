'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from 'shared/ui/button/Button';
import { Alarm } from 'shared/ui/header/alarm/Alarm';
import { SelectLanguageItem } from 'shared/ui/select/LanguageItem';
import { Select } from 'shared/ui/select/Select';

import styles from './Header.module.scss';

type Props = {
  title: string;
  isAuth: boolean;
  onLogin: () => void;
  onSignup: () => void;
  notificationCount?: number; // временно для сторибук
};

export const Header = ({
  title,
  isAuth,
  onLogin,
  onSignup,
  notificationCount,
}: Props) => {
  const [language, setLanguage] = useState<string>('English');

  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.link_title}>
        <h1 className={styles.title}>{title}</h1>
      </Link>
      <div className={styles.content}>
        <div className={styles.language_select}>
          <Select
            onChange={(value) => setLanguage(value as SelectLanguageItem)}
            selectedLanguage={true}
            value={language}
          />
        </div>
        {isAuth ? (
          <div className={styles.alarm}>
            {/*пропс notificationCount временно, для сторибук*/}
            <Alarm notificationCount={notificationCount} />{' '}
          </div>
        ) : (
          <div className={styles.login_button}>
            <Button title="Log in" variant="link" onClick={onLogin} />
            <Button title="Sign up" variant="primary" onClick={onSignup} />
          </div>
        )}
      </div>
    </header>
  );
};
