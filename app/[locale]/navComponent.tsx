import Image from "next/image"
import { Link } from "@/i18n/navigation"
import styles from "./page.module.css"
import { useTranslations } from "next-intl"
import LangSwitcher from "./langugeSwitcher"

export default function NavBar() {
    const t = useTranslations("NavBarText")
    return (<div className={styles.navContainer}>
        <nav className={styles.nav} aria-label="Main navigation">
            <div className={styles.navLinks}>
                <div>
                    <Link href="/">
                        <Image
                            width={50}
                            height={50}
                            src='/geraldkan.jpg'
                            alt="Gerald's Image"
                            className='homeImg'
                        />
                    </Link>
                    <div className="homeLinkTag">
                        <Link href="/">{t("home")}</Link>
                    </div>

                </div>

                <div className={styles.bottomLinksContainer}>
                    <Link href={'/about'} className={styles.bottomLink}>{t("about")}</Link>
                    <Link href={'/projects'} className={styles.bottomLink}>{t("projects")}</Link>
                    <Link href={'/contact'} className={styles.bottomLink}>{t("contact")}</Link>
                    <LangSwitcher />
                </div>
            </div>
        </nav>
    </div>
    )
}
