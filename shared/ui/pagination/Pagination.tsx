// 'use client';
import * as React from 'react';

import * as Select from '@radix-ui/react-select';

import { usePagination, DOTS } from './usePagination';

import styles from './Pagination.module.scss';

const limits = [10, 20, 30, 50, 100];

export type PaginationProps = {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (value: number) => void;
};

export const Pagination = ({
  totalCount,
  siblingCount,
  pageSize,
  onPageChange,
  currentPage,
  onPageSizeChange,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1] as number;

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button
          className={`${styles.button} ${styles.arrow}`}
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${styles.arrowSvg} ${currentPage === 1 ? styles.disabled : ''}`}
          >
            <use xlinkHref="/sprite/sprite-icons.svg#arrow-ios-back-outline" />
          </svg>
        </button>

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <span key={index}>&#8230;</span>;
          }

          return (
            <button
              key={index}
              className={`${styles.button} ${styles.pageItem} ${pageNumber === currentPage ? styles.active : ''}`}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className={styles.button}
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${styles.arrowSvg} ${currentPage === lastPage ? styles.disabled : ''}`}
          >
            <use xlinkHref="/sprite/sprite-icons.svg#arrow-ios-forward-outline" />
          </svg>
        </button>
      </div>
      <div className={styles.selectBlock}>
        <span className={styles.text}>Show</span>
        <Select.Root
          value={String(pageSize)}
          onValueChange={(value) => onPageSizeChange(Number(value))}
        >
          <Select.Trigger className={styles.trigger}>
            <Select.Value />
            <Select.Icon className={styles.selectIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={styles.selectIconSvg}
              >
                <use xlinkHref="/sprite/sprite-icons.svg#arrow-ios-Down-outline" />
              </svg>
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className={styles.content}>
              <Select.Viewport className={styles.viewport}>
                {limits.map((limit) => (
                  <Select.Item
                    key={limit}
                    value={String(limit)}
                    className={styles.item}
                  >
                    <Select.ItemText>{limit}</Select.ItemText>
                    <Select.ItemIndicator className={styles.indicator}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className={styles.selectIconSvg}
                      >
                        <use xlinkHref="/sprite/sprite-icons.svg#arrow-ios-Up" />
                      </svg>
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        <span className={styles.text}>on page</span>
      </div>
    </div>
  );
};
