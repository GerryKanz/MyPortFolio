'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaCirclePlay } from "react-icons/fa6"
import styles from './project.module.css'

function extractYouTubeId(embedUrl: string): string | null {
    const match = embedUrl.match(/\/embed\/([^?]+)/)
    return match ? match[1] : null
}

export default function VideoEmbed({ embedUrl, title }: { embedUrl: string; title: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoId = extractYouTubeId(embedUrl)

    if (isPlaying) {
        const autoplaySrc = `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`

        return (
            <iframe
                className={styles.videoEmbedFrame}
                src={autoplaySrc}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        )
    }

    return (
        <button
            type="button"
            className={styles.videoThumbnailButton}
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
        >
            {videoId ?
                <Image
                    className={styles.videoThumbnailImage}
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 700px"
                />
                : null}
            <FaCirclePlay className={styles.playIcon} />
        </button>
    )
}
