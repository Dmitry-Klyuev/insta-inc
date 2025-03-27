import React from 'react';

import style from './Sidebar.module.scss';
import { ItemSidebarProps, Sidebar_Item } from 'shared/ui/sidebar/Sidebar_Item';

type SidebarArray = ItemSidebarProps[];

export const Sidebar = () => {
  const sideBarElementsUp: SidebarArray = [
    {
      title: 'Feed',
      iconLink: 'home-outline',
      id: 'feed',
      link: '',
    },
    {
      title: 'Create',
      iconLink: 'plus-square-outline',
      id: 'create',
      link: '',
    },
    {
      title: 'My Profile',
      iconLink: 'person-outline',
      id: 'my-profile',
      link: '',
    },
    {
      title: 'Messenger',
      iconLink: 'message-circle-outline',
      id: 'messenger',
      link: '',
    },
    {
      title: 'Search',
      iconLink: 'search-outline',
      id: 'search',
      link: '',
    },
  ];
  const sideBarElementsMiddle: SidebarArray = [
    {
      title: 'Statistics',
      iconLink: 'trending-up-outline',
      id: 'statistics',
      link: '',
    },
    {
      title: 'Favorites',
      iconLink: 'bookmark-outline',
      id: 'favorites',
      link: '',
    },
  ];
  const sideBarElementsBottom: SidebarArray = [
    {
      title: 'Log Out',
      iconLink: 'log-out-outline',
      id: 'log-out',
      link: '',
    },
  ];
  return (
    <div className={style.sidebar_container}>
      <ul>
        {sideBarElementsUp.map((item) => (
          <li key={item.id}>
            <Sidebar_Item
              title={item.title}
              iconLink={item.iconLink}
              id={item.id}
              link={item.link}
            />
          </li>
        ))}
      </ul>
      <ul>
        {sideBarElementsMiddle.map((item) => (
          <li key={item.id}>
            <Sidebar_Item
              title={item.title}
              iconLink={item.iconLink}
              id={item.id}
              link={item.link}
            />
          </li>
        ))}
      </ul>
      <ul>
        {sideBarElementsBottom.map((item) => (
          <li key={item.id}>
            <Sidebar_Item
              title={item.title}
              iconLink={item.iconLink}
              id={item.id}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
