import { locale, loadTranslations } from "$lib/i18n/translations";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
  const { pathname } = url;
  const defaultLocale = "zh-TW";
  const initLocale = locale.get() || defaultLocale;
  await loadTranslations(initLocale, pathname);
  return {}; 
};