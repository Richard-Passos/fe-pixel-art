'use client';

import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@/navigation';
import { normId } from '@/utils';

const useSetSearchParams = () => {
  const readOnlysearchParams = useSearchParams(),
    router = useRouter(),
    pathname = usePathname();

  const searchParams = new URLSearchParams(readOnlysearchParams.toString());

  const setSearchParams = (querys: { key: string; value?: string }[]) => {
    querys.forEach(({ key, value }) => {
      key = normId(key);

      if (!value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    const search = searchParams.toString();

    const query = search ? `?${search}` : '';

    router.replace(`${pathname}${query}`);
  };

  return setSearchParams;
};

export default useSetSearchParams;
