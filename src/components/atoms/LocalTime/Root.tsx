'use client';

import { DateTimeFormatOptions, useFormatter, useNow } from 'next-intl';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { timeZone } from '@/constants';

type LocalTimeAtomOwnProps = {
  nowOptions?: Parameters<typeof useNow>[0];
  formatOptions?: DateTimeFormatOptions;
};

type LocalTimeAtomProps = LocalTimeAtomOwnProps &
  Omit<ComponentPropsWithRef<'span'>, keyof LocalTimeAtomOwnProps>;

const LocalTimeAtom = (
  { nowOptions, formatOptions, ...props }: LocalTimeAtomProps,
  ref: LocalTimeAtomProps['ref']
) => {
  const now = useNow({ updateInterval: 1000, ...nowOptions }),
    format = useFormatter();

  return (
    <span
      ref={ref}
      {...props}
    >
      {format.dateTime(now, {
        hour: 'numeric',
        minute: 'numeric',
        timeZone,
        ...formatOptions
      })}
    </span>
  );
};

export default forwardRef(LocalTimeAtom);
export type { LocalTimeAtomProps };
