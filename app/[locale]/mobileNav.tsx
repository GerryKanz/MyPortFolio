"use client"
import { useEffect, useRef, useState } from "react"
import { Link, usePathname } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import styles from "./page.module.css"
import LangSwitcher from "./langugeSwitcher"

export default function MobileNav() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const locale = useLocale()
    const t = useTranslations("NavBarText")
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setOpen(false)
    }, [pathname, locale])

    useEffect(() => {
        const updateNavHeight = () => {
            const navEl = wrapperRef.current?.closest("nav")
            if (!navEl) return
            document.documentElement.style.setProperty("--nav-height", `${navEl.getBoundingClientRect().height}px`)
        }

        updateNavHeight()
        window.addEventListener("resize", updateNavHeight)
        return () => window.removeEventListener("resize", updateNavHeight)
    }, [])

    useEffect(() => {
        if (!open) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        const onClick = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("keydown", onKeyDown)
        document.addEventListener("mousedown", onClick)
        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.removeEventListener("mousedown", onClick)
        }
    }, [open])

    const close = () => setOpen(false)

    return (
        <div className={styles.mobileNavWrapper} ref={wrapperRef}>
            <LangSwitcher />

            <button
                type="button"
                className={styles.hamburgerButton}
                aria-expanded={open}
                aria-controls="mobile-nav-menu"
                aria-label={open ? t("closeMenu") : t("openMenu")}
                onClick={() => setOpen((o) => !o)}
            >
                {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>

            <div
                id="mobile-nav-menu"
                className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
                aria-hidden={!open}
            >
                <Link href="/" className={styles.mobileMenuLink} onClick={close}>{t("home")}</Link>
                <Link href="/about" className={styles.mobileMenuLink} onClick={close}>{t("about")}</Link>
                <Link href="/projects" className={styles.mobileMenuLink} onClick={close}>{t("projects")}</Link>
                <Link href="/contact" className={styles.mobileMenuLink} onClick={close}>{t("contact")}</Link>
            </div>
        </div>
    )
}
