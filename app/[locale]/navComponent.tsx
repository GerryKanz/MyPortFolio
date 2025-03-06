import Image from "next/image"
import { Link } from "@/i18n/navigation"
import styles from "./page.module.css"
import { useTranslations } from "next-intl"
import LangSwitcher from "./langugeSwitcher"

export default function NavBar() {
    const t = useTranslations("NavBarText")
    return (<div className={styles.navContainer}>
        <div className={styles.nav}>
            <div className={styles.navLinks}>
                <div>
                    <a href="./">
                        <Image
                            width={50}
                            height={50}
                            src='/geraldkan.jpg'
                            alt="Gerald's Image"
                            className='homeImg'
                        />
                    </a>
                    <div className="homeLinkTag">
                        <a href="./">{t("home")}</a>
                    </div>

                </div>

                <div className={styles.bottomLinksContainer}>
                    <Link href={'/projects'} className={styles.bottomLink}>{t("projects")}</Link>
                    <LangSwitcher />
                </div>
            </div>
        </div>
    </div>
    )
}
