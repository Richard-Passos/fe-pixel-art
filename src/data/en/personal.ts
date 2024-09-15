import { Personal } from '@/types';

const personal = async (): Promise<Personal> => {
  return {
    name: {
      first: 'Richard',
      last: 'Passos'
    },
    email: 'hi.richardp@gmail.com',
    title: 'Richard Passos an awesome Full Stack Developer',
    description:
      'Helping brands achieve digital prominence. Based in Brazil. I bring a passion for cutting-edge technology and crafting high-impact, user-centered solutions.',
    availability: 'Available to work',
    keywords:
      'Richard Passos, Portfolio, Full Stack Developer, React.js, Node.js, React Native, Next.js, TypeScript, JavaScript, Jest, MongoDB, Git, TailwindCSS, Styled-components, Problem-solving, Detail-oriented, Communication, Adaptability, Time management, Critical thinking, Synthetic thinking',
    authors: [
      {
        name: 'Richard Passos',
        url: 'https://github.com/Richard-Passos'
      }
    ],
    location: {
      country: 'Brazil',
      state: 'RS',
      gmt: 'GMT-3'
    },
    socials: [
      {
        id: 'github',
        href: 'https://github.com/Richard-Passos',
        icon: '/icons/github.svg',
        label: 'Github'
      },
      {
        id: 'instagram',
        href: 'https://www.instagram.com/richardp.dev/',
        icon: '/icons/instagram.svg',
        label: 'Instagram'
      },
      {
        id: 'linkedin',
        href: 'https://www.linkedin.com/in/richardp-dev',
        icon: '/icons/linkedin.svg',
        label: 'Linkedin'
      }
    ],
    buyCoffee: {
      icon: '/icons/mug.svg',
      href: 'https://www.buymeacoffee.com/richardp.dev'
    }
  };
};

export default personal;
