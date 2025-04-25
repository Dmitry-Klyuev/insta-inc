'use client';
import React, { useState } from 'react';

import styles from './Tab.module.scss';

type TabProps = {
  label: string;
  disabled?: boolean;
  content: React.ReactNode;
};
type TabsProps = {
  tabs: TabProps[];
};

export const Tab: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`${styles.tabButton} ${activeIndex === index ? styles.active : ''}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`content-${index}`}
            onClick={() => setActiveIndex(index)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`content-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
