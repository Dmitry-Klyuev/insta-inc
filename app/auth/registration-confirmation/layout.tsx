import { PropsWithChildren } from 'react';

import { type Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Email Verification',
};

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
