import {
  PrimaryLayoutBlock,
  SecondaryLayoutBlock
} from '@/components/organisms/Blocks/Layout';
import { PrimaryHero } from '@/components/organisms/Heros';

type HomeTemplateOrganismProps = {
  namespace: ExtractPrefix<Namespace, 'pages.'>;
};

const HomeTemplateOrganism = ({ namespace }: HomeTemplateOrganismProps) => {
  return (
    <>
      <PrimaryHero
        namespace={`${namespace}.hero`}
        theme='light'
      />

      <PrimaryLayoutBlock
        data={{
          title: ['ABOUT', 'WORK'],
          description:
            'Every detail is an opportunity. Every line of code I write goes beyond mere functionality — they shape digital experiences that captivate. Discover the impact of a partnership that propels you to digital prominence.'
        }}
        id='scroll-to'
        theme='dark'
      />

      <SecondaryLayoutBlock
        data={{
          title: ['HARD', 'SKILLS'],
          subtitle: 'The best in market'
        }}
        theme='light'
      />
    </>
  );
};
export default HomeTemplateOrganism;
export type { HomeTemplateOrganismProps };
