'use client';
import { useState } from 'react';

import { Card } from 'shared/ui/card/Card';
import { TextArea } from 'shared/ui/textArea/TextArea';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      dsdsd
      <Card className={{ display: 'flex', justifyContent: 'center' }}>
        Hello
      </Card>
    </div>
  );
}
