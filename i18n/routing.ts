import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'jp'],

    // Used when no locale matches
    defaultLocale: 'jp',

    pathnames: {
        '/projects': {
            en: '/projects',
            jp: '/プロジェクト'
        },
        '/': {
            en: '/home',
            jp: '/ホム'
        },
        '/about': {
            en: '/about',
            jp: '/について'
        },
        '/contact': {
            en: '/contact',
            jp: '/お問い合わせ'
        }

    }
});