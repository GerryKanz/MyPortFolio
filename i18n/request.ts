import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { console } from 'inspector';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as "en" | "jp")) {
        locale = routing.defaultLocale;
        console.log(locale)
    }

    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
})