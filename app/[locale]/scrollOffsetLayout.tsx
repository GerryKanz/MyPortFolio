"use client"
import { useEffect, useRef } from "react"

type Props = {
    pageLayoutClassName: string
    sidebarClassName: string
    ariaLabel: string
    sidebarLinks: React.ReactNode
    children: React.ReactNode
}

export default function ScrollOffsetLayout({ pageLayoutClassName, sidebarClassName, ariaLabel, sidebarLinks, children }: Props) {
    const sidebarRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const updateOffset = () => {
            const el = sidebarRef.current
            if (!el) return
            const top = parseFloat(getComputedStyle(el).top) || 0
            const height = el.getBoundingClientRect().height
            document.documentElement.style.setProperty("--sidebar-offset", `${height}px`)
            document.documentElement.style.setProperty("--sidebar-scroll-offset", `${top + height + 20}px`)
        }

        updateOffset()
        window.addEventListener("resize", updateOffset)
        return () => window.removeEventListener("resize", updateOffset)
    }, [])

    return (
        <div className={pageLayoutClassName}>
            <nav ref={sidebarRef} className={sidebarClassName} aria-label={ariaLabel}>
                {sidebarLinks}
            </nav>

            {children}
        </div>
    )
}
