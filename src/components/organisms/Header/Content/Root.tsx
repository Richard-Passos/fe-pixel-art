import { LocaleSelect } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import { locales } from '@/constants';
import { getLocale, headerApi } from '@/utils/actions';

const HeaderContentOrganism = async () => {
  const locale = await getLocale();

  const [headerRes] = await Promise.all([headerApi.get({ locale })]);

  if (!headerRes.ok) return null;

  const header = headerRes.data;

  return (
    <>
      <Logo className='-ml-[--button-padding-x]' />

      <LocaleSelect
        aria-label={header.locale.label}
        data={locales}
      />
    </>
  );
};

export default HeaderContentOrganism;
