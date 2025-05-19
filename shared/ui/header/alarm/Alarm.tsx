'use client';

import { clsx } from 'clsx';

import { AlarmContent } from 'shared/ui/header/alarm/AlarmContent/AlarmContent';
import { Tooltip } from 'shared/ui/tooltip/Tooltip';

import styles from './Alarm.module.scss';

type Prors = {
  className?: string;
  notificationCount?: number;
};
export const Alarm = ({ className, notificationCount = 0 }: Prors) => {
  return (
    <div className={clsx(styles.notification, className)}>
      <Tooltip
        content={<AlarmContent />}
        position={'bottom'}
        className={styles.tooltip}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <use xlinkHref="/sprite/sprite-icons.svg#outline-bell" />
        </svg>
        {notificationCount > 0 && (
          <span className={styles.notification_badge}>{notificationCount}</span>
        )}
      </Tooltip>
    </div>
  );
};
