import Link from 'next/link';

import { IconSvg } from 'shared/ui/checkbox/iconSvg/IconSvg';

import styles from './InfoPage.module.scss';

type InfoPageProps = {
  title: string;
  description: string;
};

const InfoPage = ({ title, description }: InfoPageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.linkTitle}>
        <Link href="/auth/sign-up" className={styles.linkContainer}>
          <IconSvg iconId="arrow-back-outline" />
          <small className={styles.titleLink}>Back to Sign Up</small>
        </Link>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.text}>
        {description.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;
