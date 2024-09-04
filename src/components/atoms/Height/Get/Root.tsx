'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useHeightContext } from '@/hooks/contexts';
import { Heights } from '@/store/slices/height';
import { entries } from '@/utils';

type HeightGetAtomOwnProps = {
  name: keyof Heights | (keyof Heights)[];
};

type HeightGetAtomProps = HeightGetAtomOwnProps &
  Omit<SlotProps, keyof HeightGetAtomOwnProps>;

const HeightGetAtom = (
  { name, style, ...props }: HeightGetAtomProps,
  ref: HeightGetAtomProps['ref']
) => {
  const { getHeight } = useHeightContext();

  const heights = getHeight(name);

  const heightsCssVars = entries(heights).reduce(
    (obj, [key, value]) => ({ ...obj, [`--${key}-height`]: `${value}px` }),
    {}
  );

  return (
    <Slot
      ref={ref}
      style={{
        ...heightsCssVars,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(HeightGetAtom);
export type { HeightGetAtomProps };
