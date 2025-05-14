'use client';

import { IconSvg } from 'shared/ui/checkbox/iconSvg/IconSvg';

import styles from './SocialAuth.module.scss';

const SocialAuth = () => {
  const handleBtnGoogle = () => {
    alert('google');
  };
  const handleBtnGithub = () => {
    window.location.assign(
      `${process.env.NEXT_PUBLIC_INCTAGRAM_URL}auth/github/login?redirect_url=${window.location.origin}`
    );
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleBtnGoogle}>
        <IconSvg iconId="google" width="36" height="36" />
      </button>
      <button className={styles.button} onClick={handleBtnGithub}>
        <IconSvg iconId="github" width="36" height="36" />
      </button>
    </div>
  );
};

export default SocialAuth;
