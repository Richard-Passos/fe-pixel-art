import { Metadata } from 'next';

import Blocks from '@/components/organisms/Blocks';

import TypeVariants from './TypeVariants';

type Page = {
  type?: 'page';
  slug: string;
  isSelected?: boolean;
  label: string;
  blocks: TypeVariants<typeof Blocks>[];
  metadata: Metadata;
};

export default Page;
