'use client';

import React, { useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';

import styles from './Tooltip.module.scss';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  openDelay?: number;
  closedDelay?: number;
  className?: string;
};

export const Tooltip = ({
  children,
  content,
  openDelay = 200,
  closedDelay = 200,
  position = 'top',
  className,
}: TooltipProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<number | NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsMounted(true), openDelay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsMounted(false), closedDelay);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, [openDelay, closedDelay]);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div
        className={styles.trigger}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isMounted && (
        <div
          className={`${styles.tooltip} ${styles[position]}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </div>
      )}
    </div>
  );
};
