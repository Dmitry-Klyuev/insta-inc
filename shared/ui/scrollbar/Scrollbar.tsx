import { ReactNode } from 'react';

import {
  Root,
  ScrollAreaScrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';

import s from './Scrollbar.module.scss';

export type ScrollbarProps = {
  children?: ReactNode;
};

export const Scrollbar = (props: ScrollbarProps) => {
  const { children } = props;

  return (
    <Root className={s.Root}>
      <Viewport className={s.Viewport}>{children}</Viewport>
      <ScrollAreaScrollbar className={s.Scrollbar} orientation="vertical">
        <Thumb className={s.Thumb} />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar className={s.Scrollbar} orientation="horizontal">
        <Thumb className={s.Thumb} />
      </ScrollAreaScrollbar>
    </Root>
  );
};
