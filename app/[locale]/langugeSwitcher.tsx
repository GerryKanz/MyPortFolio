
"use client"
import { CiGlobe } from "react-icons/ci";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useTranslations } from "next-intl";



export default function LangSwitcher() {
    const [locale, setLocale] = useState<string>();
    const [isClicked, setIsClicked] = useState(false)
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const languages = ['en', 'jp']
    const t = useTranslations("LanguageSwitcher")

    // Update locale in URL when it changes
    const handleOnClick = (lang: string) => {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: lang }
        )
        setLocale(lang)
        setIsClicked(false)
    }








    return (
        <div>
            <CiGlobe />
            <div>
                <div onClick={() => setIsClicked(true)}>
                    <p>{t('language')}</p>
                </div>

                {isClicked ? languages.map((lang, index) => (
                    <div onClick={() => handleOnClick(lang)} key={index}>{lang}</div>
                )) : null}
            </div>
        </div>
    );
}
