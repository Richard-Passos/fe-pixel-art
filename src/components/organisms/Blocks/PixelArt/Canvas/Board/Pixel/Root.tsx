'use client';

import { ComponentPropsWithRef, forwardRef, useState } from 'react';

import { cn } from '@/utils';

type PixelArtCanvasPixelBlockOrganismOwnProps = {
  isPainting?: boolean;
  color: string;
};

type PixelArtCanvasPixelBlockOrganismProps =
  PixelArtCanvasPixelBlockOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof PixelArtCanvasPixelBlockOrganismOwnProps
    >;

const PixelArtCanvasPixelBlockOrganism = (
  {
    isPainting,
    color,
    className,
    style,
    ...props
  }: PixelArtCanvasPixelBlockOrganismProps,
  ref: PixelArtCanvasPixelBlockOrganismProps['ref']
) => {
  const [c, setC] = useState<string | undefined>(undefined);

  const activeColor = c ?? undefined;

  return (
    <div
      className={cn(
        'relative right-px top-px -mr-px -mt-px select-none border bg-[--color]',
        className
      )}
      onMouseDown={() => {
        setC((state) => {
          if (state) return state !== color ? color : undefined;

          return color;
        });
      }}
      onMouseOver={() => {
        if (isPainting) setC(color);
      }}
      ref={ref}
      style={
        {
          '--color': activeColor,
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};

export default forwardRef(PixelArtCanvasPixelBlockOrganism);
export type { PixelArtCanvasPixelBlockOrganismProps };
