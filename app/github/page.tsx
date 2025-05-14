'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const accessToken = searchParams.get('accessToken');

  useEffect(() => {
    if (accessToken !== null) {
      document.cookie = `accessToken=${accessToken}; path=/; secure`;
      router.push('/');
    } else {
      router.push('/auth/sign-up');
    }
  }, [accessToken, router]);
  return null;
};

export default Page;
