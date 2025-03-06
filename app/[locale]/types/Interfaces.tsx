import { routing } from "@/i18n/routing"

export interface project {
    'name': string,
    'imagePath': string,
    'discription': string,
    'technologies': string,
    'projectLinks'?: links
}

interface links {
    'youtubeLink'?: string
    'expoLink'?: string
    'github'?: string
    'youtubeLinkEmbedded'?: string
}

export interface embededLink {
    handleClick?: (vidClicked: () => string | undefined) => void;
}

export type projects = project[]

export type Locale = (typeof routing.defaultLocale)