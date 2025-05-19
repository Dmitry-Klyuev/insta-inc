'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { useRegistrationConfirmationMutation } from '@/features/api/api';
import VerifyEmailStatus from '@/features/auth/components/verifyEmailStatus/VerifyEmailStatus';

const Page = () => {
  const [success, setSuccess] = useState<boolean | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [confirmRegistration] = useRegistrationConfirmationMutation();

  useEffect(() => {
    if (code) {
      confirmRegistration({ confirmationCode: code })
        .unwrap()
        .then(() => {
          setSuccess(true);
        })
        .catch((err) => {
          if (err.status === 400) {
            setSuccess(false);
          }
        });
    }
  }, [code, confirmRegistration]);

  return (
    <>
      {success ? (
        <VerifyEmailStatus verifyMode="success" />
      ) : (
        <VerifyEmailStatus verifyMode="expired" />
      )}
    </>
  );
};

export default Page;
