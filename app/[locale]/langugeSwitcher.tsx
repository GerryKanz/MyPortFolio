
"use client"
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import styles from "@/app/[locale]/languageSwitcher.module.css"
import { CiGlobe } from "react-icons/ci";

export default function LangSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
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
            <div className={styles.language}>
                <CiGlobe className={styles.globeIcon} />

                <div className={styles.selectContainer}>
                    {languages.map((lang, index) => (
                        <p className={styles.selectOption} onClick={() => handleOnClick(lang)} key={index}>{lang}</p>
                    ))}
                </div>
            </div>

        </>
    );
}
