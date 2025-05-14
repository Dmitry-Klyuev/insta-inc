'use client';
import { redirect } from 'next/navigation';

// import { useMeQuery } from '@/features/api/api';

export default function Home() {
  // const { data, isLoading } = useMeQuery();

  // console.log(data);

  return (
    <div>
      <button
        onClick={() => {
          redirect('/auth/sign-up');
        }}
      >
        sign up
      </button>
      APP
    </div>
  );
}
