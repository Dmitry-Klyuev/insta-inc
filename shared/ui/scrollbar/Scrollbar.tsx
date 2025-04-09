import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import {
  Root,
  Viewport,
  Thumb,
  Scrollbar as ScrollbarTrack,
  type ScrollAreaProps,
} from '@radix-ui/react-scroll-area';
import { clsx } from 'clsx';

import s from './Scrollbar.module.scss';

export type ScrollbarProps = {
  children: ReactNode;
  className?: string;
  type?: ScrollAreaProps['type'];
} & ComponentPropsWithoutRef<'div'>;

export const Scrollbar = (props: ScrollbarProps) => {
  const { children, className, type = 'auto', ...rest } = props;

  const cn = {
    root: clsx(s.root, className),
    scrollbar: s.scrollbar,
    thumb: s.thumb,
    viewport: s.viewport,
  };

  return (
    <Root asChild type={type}>
      <div className={cn.root} {...rest}>
        <Viewport className={cn.viewport}>{children}</Viewport>
        <ScrollbarTrack className={cn.scrollbar} orientation="vertical">
          <Thumb className={cn.thumb} />
        </ScrollbarTrack>
        <ScrollbarTrack className={cn.scrollbar} orientation="horizontal">
          <Thumb className={cn.thumb} />
        </ScrollbarTrack>
      </div>
    </Root>
  );
};
