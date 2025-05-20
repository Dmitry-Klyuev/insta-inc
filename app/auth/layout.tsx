'use client';

import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
