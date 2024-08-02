import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type ChevronUpIconAtomOwnProps = {};

type ChevronUpIconAtomProps = ChevronUpIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof ChevronUpIconAtomOwnProps>;

const ChevronUpIconAtom = (
  { className, ...props }: ChevronUpIconAtomProps,
  ref: ChevronUpIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Chevron up'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M19 16a1 1 0 0 1-.707-.293L12 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 16Z' />
    </svg>
  );
};

export default forwardRef(ChevronUpIconAtom);
export type { ChevronUpIconAtomProps };
