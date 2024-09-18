import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { ServiceCard } from '@/components/organisms/Cards';
import { ServiceCardProps } from '@/components/organisms/Cards/Service';
import { renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import ServicesBlockImage from './Image';
import { ServicesBlockImageOrganismProps } from './Image/Root';

type ServicesBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] &
    ServicesBlockImageOrganismProps['data'] & {
      subtitle?: Node[];
      items: ServiceCardProps['data'][];
      action?: {
        label: Node[];
      };
    };
};

type ServicesBlockOrganismProps = ServicesBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof ServicesBlockOrganismOwnProps>;

const ServicesBlockOrganism = (
  { data, ...props }: ServicesBlockOrganismProps,
  ref: ServicesBlockOrganismProps['ref']
) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      ref={ref}
      {...props}
    >
      <section className='flex w-9/10 max-w-screen-lg flex-col items-center'>
        {renderComp(
          <Title
            className={`
              mb-md mr-auto uppercase text-dimmed

              *:text-text
            `}
            component='h3'
            order={6}
          >
            {serialize(data.subtitle)}
          </Title>,
          [data.subtitle]
        )}

        <div className={`
          flex w-full items-start justify-end gap-md

          md:gap-xl
        `}>
          <ServicesBlockImage
            className={`
              grow basis-72

              max-md:hidden
            `}
            data={{
              image: data.image
            }}
          />

          <ul className={`
            m-0 flex max-w-lg grow basis-[theme(maxWidth.sm)] list-none flex-col
            gap-xs p-0

            sm:py-xl
          `}>
            {data.items.map((data) => (
              <li key={data.slug}>
                <ServiceCard data={data} />
              </li>
            ))}
          </ul>
        </div>

        {renderComp(
          <Action
            as='link'
            className='mt-xl'
            href='/contact'
            size='md'
            variant='default'
          >
            {serialize(data.action?.label)}
          </Action>,
          [data.action]
        )}
      </section>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(ServicesBlockOrganism);
export type { ServicesBlockOrganismProps };
