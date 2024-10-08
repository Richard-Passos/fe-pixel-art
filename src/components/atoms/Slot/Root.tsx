'use client';

import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, ReactNode } from 'react';

type SlotProps = ComponentPropsWithRef<typeof Slot>;

type SlotAtomAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | ({ asChild: true; children: ReactNode } & SlotProps);

type SlotAtomProps = SlotProps;

const SlotAtom = Slot;

export default SlotAtom;
export type { SlotAtomProps, SlotAtomAsChildProps };
