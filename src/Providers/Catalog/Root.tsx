'use client';

import { ComponentPropsWithoutRef, useMemo } from 'react';

import { CatalogContext } from '@/contexts';
import {
  CatalogContextInitialState,
  catalogContextDefaultValue
} from '@/contexts/Catalog';
import { useId } from '@/hooks';

type CatalogProviderOwnProps<T> = {
  items: T[];
  url?: string;
};

type CatalogProviderProps<T> = CatalogProviderOwnProps<T> &
  Omit<
    ComponentPropsWithoutRef<typeof CatalogContext.Provider>,
    keyof CatalogProviderOwnProps<T> | 'value'
  >;

const CatalogProvider = <T,>({
  items,
  url = '',
  ...props
}: CatalogProviderProps<T>) => {
  const id = useId();

  const totalResults = items.length,
    isEmpty = !items.length;

  const value: CatalogContextInitialState<T> = useMemo(
    () => ({
      ...catalogContextDefaultValue,
      id,
      items,
      totalResults,
      isEmpty
    }),
    [id, items, totalResults, isEmpty]
  );

  return (
    <CatalogContext.Provider
      value={value}
      {...props}
    />
  );
};

export default CatalogProvider;
export type { CatalogProviderProps };
