'use client';

import { useState } from 'react';

import { Button } from 'shared/ui/button/Button';
import { SelectLanguageItem } from 'shared/ui/select/LanguageItem';
import { Select } from 'shared/ui/select/Select';

import s from './Header.module.scss';

type Props = {
  title: string;
  isAuth: boolean;
  onLogin: () => void;
  onSignup: () => void;
  notificationCount?: number;
  onNotificationClick?: () => void;
};

export const Header = ({
  title,
  isAuth,
  onLogin,
  onSignup,
  notificationCount = 0,
  onNotificationClick,
}: Props) => {
  const notificationHandler = () => {
    onNotificationClick?.();
  };
  const [language, setLanguage] = useState<string>('English');

  return (
    <header className={s.header}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.content}>
        <div className={s.language_select}>
          <Select
            onChange={(value) => setLanguage(value as SelectLanguageItem)}
            selectedLanguage={true}
            value={language}
          />
        </div>
        {isAuth ? (
          <div className={s.alarm}>
            <button className={s.notification} onClick={notificationHandler}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <use xlinkHref="/sprite/sprite-icons.svg#outline-bell" />
              </svg>
              {notificationCount > 0 && (
                <span className={s.notification_badge}>
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        ) : (
          <div className={s.login_button}>
            <Button title="Log in" variant="link" onClick={onLogin} />
            <Button title="Sign up" variant="primary" onClick={onSignup} />
          </div>
        )}
      </div>
    </header>
  );
};
