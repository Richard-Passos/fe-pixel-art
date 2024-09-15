import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type SimpleCardOrganismOwnProps = {
  data: {
    icon: string;
    description: Node[];
  };
};

type SimpleCardOrganismProps = SimpleCardOrganismOwnProps &
  Omit<CardRootProps, keyof SimpleCardOrganismOwnProps>;

const SimpleCardOrganism = (
  { className, data, ...props }: SimpleCardOrganismProps,
  ref: SimpleCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('justify-between', className)}
      ref={ref}
      {...props}
    >
      <div className='size-6'>
        <Icon src={data.icon} />
      </div>

      <section className='mt-xs'>
        {serialize(data.description, {
          paragraph: {
            className: 'font-medium leading-tight'
          }
        })}
      </section>
    </Card.Root>
  );
};

export default forwardRef(SimpleCardOrganism);
export type { SimpleCardOrganismProps };
