import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type GameControllerIconAtomOwnProps = {};

type GameControllerIconAtomProps = GameControllerIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof GameControllerIconAtomOwnProps>;

const GameControllerIconAtom = (
  { className, ...props }: GameControllerIconAtomProps,
  ref: GameControllerIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Game controller'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M16 7h-3.25V6a.755.755 0 0 1 .75-.75h1A2.253 2.253 0 0 0 16.75 3a.75.75 0 0 0-1.5 0 .755.755 0 0 1-.75.75h-1A2.253 2.253 0 0 0 11.25 6v1H8c-3 0-5 2-5 6v4c0 2 1 4 3 4h.253a3.253 3.253 0 0 0 2.712-1.457 3.749 3.749 0 0 1 6.069.009A3.253 3.253 0 0 0 17.741 21H18c2 0 3-2 3-4v-4c0-4-2-6-5-6Zm-6 6.75H8.75V15a.75.75 0 0 1-1.5 0v-1.25H6a.75.75 0 0 1 0-1.5h1.25V11a.75.75 0 0 1 1.5 0v1.25H10a.75.75 0 0 1 0 1.5Zm4.75 1.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm2.5-2.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1.001Z' />
    </svg>
  );
};

export default forwardRef(GameControllerIconAtom);
export type { GameControllerIconAtomProps };
