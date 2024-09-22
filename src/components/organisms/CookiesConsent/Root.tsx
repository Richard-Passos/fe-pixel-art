import { ComponentPropsWithRef, forwardRef } from 'react';

import { Portal } from '@/components/atoms';
import { cn, serialize } from '@/utils';
import { cookiesConsentApi, getLocale } from '@/utils/actions';

import CookiesConsentClient, { CookiesConsentClientProps } from './Client';

type CookiesConsentOrganismOwnProps = {
  bannerProps?: Partial<CookiesConsentClientProps>;
};

type CookiesConsentOrganismProps = CookiesConsentOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof CookiesConsentOrganismOwnProps>;

const CookiesConsentOrganism = async (
  { className, bannerProps, ...props }: CookiesConsentOrganismProps,
  ref: CookiesConsentOrganismProps['ref']
) => {
  const locale = await getLocale();

  const res = await cookiesConsentApi.get({ locale });

  if (!res.ok) return null;

  const { data } = res;

  return (
    <Portal>
      <div
        className={cn(
          'pointer-events-none fixed bottom-0 right-0 z-max flex w-full justify-end p-sm',
          className
        )}
        ref={ref}
        {...props}
      >
        <CookiesConsentClient
          acceptOnScroll
          acceptOnScrollPercentage={10}
          buttonText={serialize(data.actions.accpet.label)}
          declineButtonText={serialize(data.actions.decline?.label)}
          enableDeclineButton={!!data.actions.decline}
          {...bannerProps}
          buttonWrapperClasses={cn(
            'flex gap-xs max-sm:flex-col sm:items-center',
            bannerProps?.buttonWrapperClasses
          )}
          containerClasses={cn(
            'pointer-events-auto flex gap-sm rounded border bg-body px-md py-xs shadow max-sm:flex-col sm:items-center',
            bannerProps?.containerClasses
          )}
          contentClasses={cn('max-w-sm', bannerProps?.contentClasses)}
          customDeclineButtonProps={{
            variant: 'light',
            color: 'red',
            ...bannerProps?.customDeclineButtonProps
          }}
        >
          {serialize(data.text)}
        </CookiesConsentClient>
      </div>
    </Portal>
  );
};

export default forwardRef(CookiesConsentOrganism);
export type { CookiesConsentOrganismProps };
