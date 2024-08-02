import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type ChevronDownIconAtomOwnProps = {};

type ChevronDownIconAtomProps = ChevronDownIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof ChevronDownIconAtomOwnProps>;

const ChevronDownIconAtom = (
  { className, ...props }: ChevronDownIconAtomProps,
  ref: ChevronDownIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Chevron down'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 17a1 1 0 0 1-.707-.293l-7-7a1 1 0 0 1 1.414-1.414L12 14.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7A1 1 0 0 1 12 17Z' />
    </svg>
  );
};

export default forwardRef(ChevronDownIconAtom);
export type { ChevronDownIconAtomProps };
