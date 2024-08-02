import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type ArrowRightIconAtomOwnProps = {};

type ArrowRightIconAtomProps = ArrowRightIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof ArrowRightIconAtomOwnProps>;

const ArrowRightIconAtom = (
  { className, ...props }: ArrowRightIconAtomProps,
  ref: ArrowRightIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Arrow right'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m20.706 12.708-4 4a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 0 1 0-2h13.586l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.416Z' />
    </svg>
  );
};

export default forwardRef(ArrowRightIconAtom);
export type { ArrowRightIconAtomProps };
