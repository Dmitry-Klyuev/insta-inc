'use client';

import { Button } from 'shared/ui/button/Button';

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

  return (
    <header className={s.header}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.content}>
        <div className={s.language_select}>
          <form name={''}>
            <select className={s.temp_select} name="language" size={1}>
              <option value="English">English</option>
              <option value="Russian">Русский</option>
              <option value="France">France</option>
            </select>
          </form>
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
          <>
            <div className={s.login_button}>
              <Button title="Log in" variant="link" onClick={onLogin} />
            </div>
            <div className={s.login_button}>
              <Button title="Sign up" variant="primary" onClick={onSignup} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};
