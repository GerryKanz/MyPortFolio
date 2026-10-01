import { routing } from "@/i18n/routing"

export interface project {
    'name': string,
    'navLabel': string,
    'imagePath'?: string,
    'discription': string,
    'technologies': string,
    'projectLinks'?: links
}

interface links {
    'youtubeLink'?: string
    'expoLink'?: string
    'github'?: string
    'youtubeLinkEmbedded'?: string
    'videoFile'?: string
}

export type projects = project[]

export type Locale = (typeof routing.locales)[number]