import React, { useState } from 'react';

import s from './Tooltip.module.scss';

type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div
      className={`${s.tooltip_container}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && <div className="tooltip">{text}</div>}
    </div>
  );
};
