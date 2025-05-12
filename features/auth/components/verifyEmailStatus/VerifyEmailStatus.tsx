'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { useRegistrationEmailResendingMutation } from '@/features/api/api';
import type { ApiErrorResponse } from '@/features/api/types';
import { Alert } from 'shared/ui/alert/Alert';
import { Button } from 'shared/ui/button/Button';
import { DefaultModal } from 'shared/ui/modal/defaultModal/DefaultModal';

import verificationExpired from '../../../../public/auth/verificationExpired.svg';
import verifiedSuccess from '../../../../public/auth/verifiedSuccess.svg';

import styles from './VerifyEmailStatus.module.scss';

type VerifyMode = 'success' | 'expired';

type EmailVerifiedStatusProps = {
  verifyMode: VerifyMode;
};

const VerifyEmailStatus = ({ verifyMode }: EmailVerifiedStatusProps) => {
  const router = useRouter();
  const [emailResending, { status }] = useRegistrationEmailResendingMutation();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const email = searchParams.get('email');

  const isSuccess = verifyMode === 'success';

  const handleSignIn = () => {
    router.push('/signin');
  };

  const handlerResend = async () => {
    if (email) {
      setOpen(true);
      try {
        await emailResending({
          email,
          baseUrl: `${window.location.origin}/auth/registration-confirmation`,
        }).unwrap();
        setOpen(true);
      } catch (error) {
        const apiError = error as ApiErrorResponse;
        if (apiError?.data?.messages) {
          setError(apiError.data.messages[0].message);
        }
      }
    }
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      {error && <Alert type="error" message={error} />}
      <DefaultModal
        title="Email sent"
        isOpen={open}
        onClose={closeModalHandler}
        maxWidth={380}
        closeBtnTitle="Ok"
        description={
          <p>
            We have sent a link to confirm your email to <span>{email}</span>
          </p>
        }
      />
      <div className={styles.header}>
        <h1 className={styles.title}>
          {isSuccess ? 'Congratulations!' : 'Email verification link expired'}
        </h1>
        <small className={styles.description}>
          {isSuccess ? (
            'Your email has been confirmed'
          ) : (
            <>
              Looks like the verification link has expired. Not to worry, we can
              send the link again to <i>{email}</i>
            </>
          )}
        </small>
      </div>
      <div className={styles.visualBlock}>
        <div className={styles.btn}>
          <Button
            title={isSuccess ? 'Sign In' : 'Resend verification link'}
            variant="primary"
            onClick={isSuccess ? handleSignIn : handlerResend}
            disabled={status === 'pending'}
          />
        </div>
        <Image
          className={styles.image}
          src={isSuccess ? verifiedSuccess : verificationExpired}
          alt={isSuccess ? verifiedSuccess : verificationExpired}
          priority
        />
      </div>
    </div>
  );
};

export default VerifyEmailStatus;
