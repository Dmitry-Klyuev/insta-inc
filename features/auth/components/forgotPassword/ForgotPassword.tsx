'use client';

import { Button } from 'shared/ui/button/Button';
import { Card } from 'shared/ui/card/Card';
import { Input } from 'shared/ui/input/Input';
import { DefaultModal } from 'shared/ui/modal/defaultModal/DefaultModal';
import { ReCaptcha } from 'shared/ui/recaptcha/ReCaptcha';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = () => {
  const sendLink = null;

  const props = {
    isOpen: true,
    title: 'Email sent',
    onClose: () => {},
  };
  return (
    <div className={styles.root}>
      <div className={styles.modalMessage}>
        <DefaultModal
          isOpen={false}
          onClose={props.onClose}
          title={props.title}
          closeBtnTitle={'OK'}
          maxWidth={378}
          description={
            <div>
              We have sent a link to confirm your email to epam@epam.com
            </div>
          }
        />
        <DefaultModal
          isOpen={false}
          onClose={props.onClose}
          title={props.title}
          closeBtnTitle={'OK'}
          maxWidth={378}
          description={<div>User with this email doesn't exist</div>}
        />
      </div>
      <Card className={styles.card}>
        <h1 className={styles.header}>Forgot Password</h1>
        <form action="">
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <Input placeholder="Epam@epam.com" label="Email" />
              <p>
                Enter your email address and we will send you further
                instructions
              </p>
            </div>
            {sendLink == 1 && (
              <div className={styles.linkSentMessage}>
                The link has been sent by email. If you don’t receive an email
                send link again
              </div>
            )}
            <div className={styles.buttonGroup}>
              <Button title={'Send Link'} variant={'primary'} />
              <Button title={'Back to Sign In'} variant={'link'} />
            </div>
            <ReCaptcha className={styles.reCaptcha} />
          </div>
        </form>
        <div></div>
      </Card>
    </div>
  );
};
