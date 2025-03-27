import style from './Sidebar.module.scss';
import React from 'react';
import sprite from '../../../public/sprite/sprite-icons.svg';

export type ItemSidebarProps = {
  iconLink: string;
  title: string;
  id: string;
  link: string;
};

export const Item_Sidebar = ({ iconLink, title, link }: ItemSidebarProps) => {
  return (
    <div className={style.item_container}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <use xlinkHref={`/sprite/sprite-icons.svg#${iconLink}`} />
      </svg>
      <a href={link}>{title}</a>
    </div>
  );
};
