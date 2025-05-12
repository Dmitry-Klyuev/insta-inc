'use client';

import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

import { Header } from 'shared/ui/header/Header';

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header
        title="Inctagram"
        isAuth={false}
        onLogin={() => {}}
        onSignup={() => {}}
      />
      {children}
    </>
  );
};

export default Layout;
