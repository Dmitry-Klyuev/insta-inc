'use client';

import {
  type ComponentProps,
  type CSSProperties,
  useRef,
  useState,
} from 'react';

import * as SelectRadix from '@radix-ui/react-select';

import { IconSvg } from '../checkbox/iconSvg/IconSvg';

import { LanguageItem, type SelectLanguageItem } from './LanguageItem';

import styles from './Select.module.scss';

export type SelectProps = {
  /** Label text displayed above the select */
  label?: string;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Array of items to display in the dropdown */
  data?: (string | number)[];
  /** Callback when selected value changes */
  onChange: (value: string) => void;
  /** Special mode for language selection */
  selectedLanguage?: boolean;
  /** Currently selected value */
  value?: string;
  /** Custom width of the select */
  width?: number | string;
  /** Custom height of the select */
  height?: number | string;
  /** Disabled state */
  disabled?: boolean;
} & ComponentProps<typeof SelectRadix.Root>;

export const Select = ({
  label,
  data,
  onChange,
  placeholder,
  selectedLanguage,
  value,
  width = '210px',
  height = '36px',
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mergedSelectStyle: CSSProperties = {
    maxWidth: typeof width === 'number' ? `${width}px` : width || '100%',
    width: '100%',
    height,
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        triggerRef.current?.blur();
      }, 0);
    }
  };

  return (
    <>
      {label && <span className={styles.label}>{label}</span>}
      <SelectRadix.Root
        onOpenChange={handleOpenChange}
        onValueChange={onChange}
        value={value}
        {...props}
      >
        <div
          className={styles.triggerAndContentContainer}
          style={mergedSelectStyle}
        >
          <SelectRadix.Trigger
            ref={triggerRef}
            className={`${styles.trigger} ${label ? styles.triggerWithLabel : ''}`}
            style={mergedSelectStyle}
          >
            <div className={styles.value}>
              {selectedLanguage ? (
                <LanguageItem
                  language={(value as SelectLanguageItem) || 'Russian'}
                />
              ) : (
                <SelectRadix.Value placeholder={placeholder}>
                  {value}
                </SelectRadix.Value>
              )}
            </div>
            <SelectRadix.Icon className={styles.iconArrowsWrapper}>
              <IconSvg
                iconId={isOpen ? 'arrow-ios-Up' : 'arrow-ios-Down-outline'}
              />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>
          <SelectRadix.Content className={styles.content} position="popper">
            <SelectRadix.Viewport>
              {selectedLanguage ? (
                <>
                  <SelectRadix.Item value="Russian" className={styles.item}>
                    <SelectRadix.ItemText asChild>
                      <LanguageItem language={'Russian'} />
                    </SelectRadix.ItemText>
                  </SelectRadix.Item>
                  <SelectRadix.Item value="English" className={styles.item}>
                    <SelectRadix.ItemText asChild>
                      <LanguageItem language={'English'} />
                    </SelectRadix.ItemText>
                  </SelectRadix.Item>
                </>
              ) : (
                data?.map((item, index) => (
                  <SelectRadix.Item
                    key={index}
                    value={String(item)}
                    className={styles.item}
                  >
                    <SelectRadix.ItemText>{item}</SelectRadix.ItemText>
                  </SelectRadix.Item>
                ))
              )}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </div>
      </SelectRadix.Root>
    </>
  );
};
