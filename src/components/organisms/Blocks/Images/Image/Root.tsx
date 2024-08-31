import { forwardRef } from 'react';

import { imageYScrollAnim } from '@/animations/scroll';
import Image, { ImageProps } from '@/components/atoms/Image';
import ScrollAnimate from '@/components/atoms/ScrollAnimate';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type ImagesBlockImageOrganismOwnProps = {
  data: {
    image: Pick<ImageProps, 'src' | 'alt'>;
  };
};

type ImagesBlockImageOrganismProps = ImagesBlockImageOrganismOwnProps &
  Omit<CardRootProps, keyof ImagesBlockImageOrganismOwnProps>;

const ImagesBlockImageOrganism = (
  { className, data, ...props }: ImagesBlockImageOrganismProps,
  ref: ImagesBlockImageOrganismProps['ref']
) => {
  return (
    <CardRoot
      className={cn(
        'aspect-[1/1.35] h-auto overflow-visible !bg-transparent',
        className
      )}
      padding='xs'
      radius='xl'
      ref={ref}
      {...props}
    >
      <div className='relative size-full overflow-hidden rounded-[calc(var(--paper-radius)-var(--card-padding))] bg-gray-1 shadow-2xl dark:bg-dark-5'>
        <ScrollAnimate config={imageYScrollAnim}>
          <div className='absolute h-[115%] w-full'>
            <Image
              alt={data.image.alt}
              className='object-cover'
              fill
              src={data.image.src}
            />
          </div>
        </ScrollAnimate>
      </div>
    </CardRoot>
  );
};

export default forwardRef(ImagesBlockImageOrganism);
export type { ImagesBlockImageOrganismProps };
