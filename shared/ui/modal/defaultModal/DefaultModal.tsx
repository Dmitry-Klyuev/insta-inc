'use client';

import type { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { Button } from 'shared/ui/button/Button';
import { IconSvg } from 'shared/ui/checkbox/iconSvg/IconSvg';

import styles from './DefaultModal.module.scss';

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  description?: string | ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  closeBtnTitle?: string;
  submitBtnTitle?: string;
  confirmMode?: boolean;
  maxWidth?: number;
};

export const DefaultModal = ({
  isOpen,
  title,
  description,
  onClose,
  onSubmit,
  closeBtnTitle = 'No',
  submitBtnTitle = 'Yes',
  confirmMode = false,
  maxWidth = 440,
}: ConfirmModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          aria-describedby="modal-description"
          style={{ maxWidth }}
          className={styles.content}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button className={styles.btnClose}>
                <IconSvg iconId="close-outline" />
              </button>
            </Dialog.Close>
          </div>
          <div className={styles.divider}></div>
          <Dialog.Description className={styles.description} asChild>
            {typeof description === 'string' ? (
              description
            ) : (
              <div>{description}</div>
            )}
          </Dialog.Description>
          <div className={styles.btnContainer}>
            {confirmMode ? (
              <>
                <Button
                  title={submitBtnTitle}
                  variant="outlined"
                  onClick={onSubmit}
                />
                <Button
                  title={closeBtnTitle}
                  variant="primary"
                  onClick={onClose}
                />
              </>
            ) : (
              <Button
                title={closeBtnTitle}
                variant="primary"
                onClick={onClose}
              />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
