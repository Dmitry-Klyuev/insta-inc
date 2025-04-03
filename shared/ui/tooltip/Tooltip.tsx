import React, { useState } from 'react';
import s from './Tooltip.module.scss';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
  children: React.ReactNode;
  text: string;
  position?: TooltipPosition;
  delay?: number;
};

export const Tooltip = ({
  children,
  text,
  delay = 200,
  position = 'top',
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleMouseEnter = () => {
    setIsMounted(true);
    setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setTimeout(() => setIsMounted(false), delay);
  };

  return (
    <div className={s.wrapper}>
      <div
        className={s.trigger}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isMounted && (
        <div
          className={`${s.tooltip} ${s[position]} ${isVisible ? s.visible : ''}`}
        >
          <span className={s.content}>{text}</span>
        </div>
      )}
    </div>
  );
};
