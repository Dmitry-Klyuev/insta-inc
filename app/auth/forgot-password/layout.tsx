import { type Metadata, NextPage } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
