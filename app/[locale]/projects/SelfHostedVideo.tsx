'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaCirclePlay } from 'react-icons/fa6'
import styles from './project.module.css'

export default function SelfHostedVideo({ src, title, poster }: { src: string; title: string; poster?: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (!isPlaying) return
        const video = videoRef.current
        if (!video) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 1) {
                    video.play().catch(() => { })
                } else if (!entry.isIntersecting) {
                    video.pause()
                }
            },
            { threshold: [0, 1] }
        )

        observer.observe(video)
        return () => observer.disconnect()
    }, [isPlaying])

    if (!isPlaying) {
        return (
            <button
                type="button"
                className={styles.videoThumbnailButton}
                onClick={() => setIsPlaying(true)}
                aria-label={`Play ${title}`}
            >
                {poster ?
                    <Image
                        className={styles.videoThumbnailImage}
                        src={poster}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 700px"
                    />
                    : null}
                <FaCirclePlay className={styles.playIcon} />
            </button>
        )
    }

    return (
        <video
            ref={videoRef}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            className={styles.selfHostedVideo}
            src={src}
        >
            {title}
        </video>
    )
}
