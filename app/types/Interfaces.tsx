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
}

export type projects = project[]