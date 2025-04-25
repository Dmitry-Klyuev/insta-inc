import React from 'react';

import style from './Sidebar.module.scss';

export type ItemSidebarProps = {
  iconLink: string;
  title: string;
  id: string;
  link: string;
};

export const Sidebar_Item = ({ iconLink, title, link }: ItemSidebarProps) => {
  return (
    <div className={style.item_container}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={'white'}
        stroke={'white'}
      >
        <use xlinkHref={`/sprite/sprite-icons.svg#${iconLink}`} />
      </svg>
      <a href={link}>{title}</a>
    </div>
  );
};
