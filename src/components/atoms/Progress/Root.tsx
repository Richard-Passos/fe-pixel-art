import { Progress, ProgressProps } from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type ProgressAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type ProgressAtomProps = ProgressAtomOwnProps &
  Omit<ProgressProps, keyof ProgressAtomOwnProps>;

const ProgressAtom = (
  { className, ...props }: ProgressAtomProps,
  ref: ProgressAtomProps['ref']
) => {
  return (
    <Progress
      className={cn(
        '[--progress-size-xs:calc(.1em*var(--mantine-scale))]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ProgressAtom);
export type { ProgressAtomProps };
