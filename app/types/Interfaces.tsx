export interface project {
    'imagePath': string,
    'discription': string,
    'technologies': string,
    'projectLinks'?: links
}

interface links {
    'youtubeLink'?: string
    'expoLink'?: string
}