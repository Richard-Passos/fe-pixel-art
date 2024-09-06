'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import { RefObject, useLayoutEffect } from 'react';

import { useThemeContext } from '@/hooks/contexts';
import { Theme } from '@/types';

const useSetTheme = (
  ref: RefObject<HTMLElement>,
  theme: Theme,
  force?: boolean
) => {
  const { setTheme } = useThemeContext();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.1', '1 0.11']
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if ((value > 0 && value < 0.1) || (value < 1 && value > 0.9)) {
      setTheme(theme);
    }
  });

  useLayoutEffect(() => {
    if (force) setTheme(theme);
  }, [force, setTheme, theme]);
};

export default useSetTheme;
