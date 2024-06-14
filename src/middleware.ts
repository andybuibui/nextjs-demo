import createMiddleware from 'next-intl/middleware';
import {locales, pathnames, localePrefix, defaultLocale} from './navigation';

export default createMiddleware({
  defaultLocale,
  localePrefix,
  pathnames,
  locales,
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};