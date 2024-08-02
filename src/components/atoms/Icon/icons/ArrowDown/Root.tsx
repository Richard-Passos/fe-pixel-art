import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type ArrowDownIconAtomOwnProps = {};

type ArrowDownIconAtomProps = ArrowDownIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof ArrowDownIconAtomOwnProps>;

const ArrowDownIconAtom = (
  { className, ...props }: ArrowDownIconAtomProps,
  ref: ArrowDownIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Arrow down'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m16.707 16.707-4 4a1 1 0 0 1-1.416 0l-4-4a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 0 1 2 0v13.586l2.293-2.293a1 1 0 0 1 1.414 1.414Z' />
    </svg>
  );
};

export default forwardRef(ArrowDownIconAtom);
export type { ArrowDownIconAtomProps };
