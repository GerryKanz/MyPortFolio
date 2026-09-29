
"use client"
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import styles from "@/app/[locale]/languageSwitcher.module.css"
import { CiGlobe } from "react-icons/ci";

export default function LangSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();
    const t = useTranslations('LanguageSwitcher');
    const languages = ['en', 'jp']

    // Update locale in URL when it changes
    const handleOnClick = (lang: string) => {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: lang }
        )

    }

    return (
        <>
            <div className={styles.language} aria-label={t('language')}>
                <CiGlobe className={styles.globeIcon} />

                <div className={styles.selectContainer}>
                    {languages.map((lang, index) => (
                        <button
                            type="button"
                            className={styles.selectOption}
                            onClick={() => handleOnClick(lang)}
                            key={index}
                            aria-current={lang === locale}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

        </>
    );
}
