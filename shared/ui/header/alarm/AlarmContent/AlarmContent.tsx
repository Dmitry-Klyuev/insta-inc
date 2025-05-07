'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Scrollbar } from 'shared/ui/scrollbar/Scrollbar';

import styles from './AlarmContent.module.scss';

export const AlarmContent = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Следующий платеж у вас слишется через 1 день',
      time: '1 час назад',
      isNew: true,
    },
    {
      id: 2,
      title: 'Ваша подписка истекает через 7 дней',
      time: '1 день назад',
      isNew: true,
    },
    {
      id: 3,
      title: 'Ваша подписка истекает через 7 дней',
      time: '1 день назад',
      isNew: true,
    },
    {
      id: 4,
      title: 'Ваша подписка истекает через 7 дней',
      time: '1 день назад',
      isNew: false,
    },
    {
      id: 4,
      title: 'Ваша подписка истекает через 7 дней',
      time: '1 день назад',
      isNew: false,
    },
    {
      id: 4,
      title: 'Ваша подписка истекает через 7 дней',
      time: '1 день назад',
      isNew: false,
    },
    {
      id: 4,
      title: 'Ваша подписка истекает через 7 дней',
      time: '1 день назад',
      isNew: false,
    },
  ]);

  return (
    <Scrollbar>
      <div className={styles.notificationTooltipContent}>
        <div className={styles.header}>Уведомления</div>
        <div className={styles.notificationContent}>
          {notifications.map((notification) => (
            <div key={notification.id} className={styles.notificationItem}>
              <div className={styles.notificationHeader}>
                Новое уведомление!
                {notification.isNew && (
                  <span className={styles.notificationNewBadge}>Новое</span>
                )}
              </div>
              <Link href={'/fakePath'} className={styles.notificationTitle}>
                <div>{notification.title}</div>
                <div className={styles.notificationTime}>
                  {notification.time}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
};
