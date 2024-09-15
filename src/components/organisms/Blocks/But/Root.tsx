import { forwardRef } from 'react';

import { ScrollAnimate, Text, Title } from '@/components/atoms';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import { TextScrollAnimate } from '@/components/molecules';
import { TextScrollAnimateProps } from '@/components/molecules/TextScrollAnimate';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

const ANIMATION_CONFIG = {
  x: {
    scrollConfig: {
      offset: ['-.5 .5', '0 .5']
    },
    prop: '--x',
    propPoints: ['-101%', '0%']
  } as ScrollAnimateConfigOptions,
  clipPath: {
    scrollConfig: {
      offset: ['.5 .5', '.75 .5']
    },
    prop: '--clip-path',
    propPoints: ['inset(0% -100% 0 0)', 'inset(100% -100% 0 0)']
  } as ScrollAnimateConfigOptions,
  y: {
    scrollConfig: {
      offset: ['.5 .5', '1 .5']
    },
    prop: '--y',
    propPoints: ['0%', '50%']
  } as ScrollAnimateConfigOptions,
  top: {
    scrollConfig: {
      offset: ['-1 .5', '0 .5']
    },
    prop: '--top',
    propPoints: ['0%', '-50%']
  } as ScrollAnimateConfigOptions
};

type ButBlockOrganismOwnProps = {
  data: {
    title: string;
    description: TextScrollAnimateProps['text'];
  };
  titleProps?: Partial<TextProps>;
  descriptionProps?: Partial<TitleProps>;
};

type ButBlockOrganismProps = ButBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ButBlockOrganismOwnProps>;

const ButBlockOrganism = (
  {
    data,
    className,
    titleProps,
    descriptionProps,
    ...props
  }: ButBlockOrganismProps,
  ref: ButBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn(
        'grid !min-h-[calc(var(--h)*1.5)] grid-rows-3 items-stretch justify-stretch justify-items-center [--h:100vh] 2xl:[--h:--max-h]',
        className
      )}
      ref={ref}
      {...props}
    >
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.clipPath}>
          <ScrollAnimate config={ANIMATION_CONFIG.y}>
            <div className='row-span-2 flex items-center justify-center py-md translate-y-[--y] [clip-path:inset(0_-100%_0_0)]'>
              <Text
                {...titleProps}
                className={cn(
                  'relative text-[clamp(8rem,44vw,32rem)]/none font-bold uppercase tracking-tighter translate-x-[--x]',
                  titleProps?.className
                )}
              >
                <em className='text-gray-3'>{data.title}</em>

                <span
                  aria-hidden
                  className='pointer-events-none absolute left-0 select-none [clip-path:--clip-path]'
                >
                  {data.title}
                </span>
              </Text>
            </div>
          </ScrollAnimate>
        </ScrollAnimate>
      </ScrollAnimate>

      <ScrollAnimate config={ANIMATION_CONFIG.top}>
        <div className='flex w-9/10 items-center justify-center'>
          <Title
            component='p'
            order={1}
            {...descriptionProps}
            className={cn(
              'relative top-[--top] text-center font-medium',
              descriptionProps?.className
            )}
          >
            <TextScrollAnimate
              className='justify-center'
              text={data.description}
            />
          </Title>
        </div>
      </ScrollAnimate>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ButBlockOrganism);
export type { ButBlockOrganismProps };
