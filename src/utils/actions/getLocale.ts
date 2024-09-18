'use server';

import { getLocale as intlGetLocale } from 'next-intl/server';

import { Locale } from '@/types';

const getLocale = intlGetLocale as () => Promise<Locale['value']>;

export default getLocale;
