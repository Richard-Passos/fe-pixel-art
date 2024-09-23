import { PillsInput } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

const classNames = {
  size: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
  },
  variant: {
    default:
      '[&_input]:[--input-bd:theme(colors.border)] [&_input:focus]:[--input-bd:--input-bd-focus] [&_input]:[--input-bg:theme(colors.white)] dark:[&_input]:[--input-bg:theme(colors.dark.6)]',
    filled:
      '[&_input]:[--input-bg:theme(colors.gray.0)] dark:[&_input]:[--input-bg:theme(colors.dark.5)]',
    unstyled: ''
  }
};

type PillsInputAtomOwnProps = {
  size?: keyof (typeof classNames)['size'];
  variant?: keyof (typeof classNames)['variant'];
};

type PillsInputAtomProps = PillsInputAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof PillsInput>, keyof PillsInputAtomOwnProps>;

const PillsInputAtom = (
  {
    className,
    size = 'sm',
    variant = 'default',
    disabled,
    labelProps,
    ...props
  }: PillsInputAtomProps,
  ref: PillsInputAtomProps['ref']
) => {
  return (
    <PillsInput
      aria-disabled={disabled}
      className={cn(
        'aria-disabled:[&_input]:bg-gray-1 aria-disabled:[&_input]:text-gray-6 dark:aria-disabled:[&_input]:bg-dark-6 dark:aria-disabled:[&_input]:text-dark-2',
        classNames.size[size],
        classNames.variant[variant],
        className
      )}
      disabled={disabled}
      labelProps={{
        ...labelProps,
        className: cn('text-sm', labelProps?.className)
      }}
      ref={ref}
      size={size}
      variant={variant}
      {...props}
    />
  );
};

export default forwardRef(PillsInputAtom);
export type { PillsInputAtomProps };
