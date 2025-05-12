import { PropsWithChildren } from 'react';

import { type Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
