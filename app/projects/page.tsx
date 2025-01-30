'use client'

import styles from '@/app/page.module.css'
import Project from './projectComponent'
import { projects } from './projectsData';
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";


export default function Projects() {
    const [isVidClicked, setVidClicked] = useState(false)
    const [embededVidLink, setEmbededVidLink] = useState<string | undefined>('')

    const handleVidClicked = (vidClicked: () => string | undefined) => {
        setVidClicked(true)
        setEmbededVidLink(vidClicked())
    }

    const handleVidClosed = () => {
        setVidClicked(false)
    }


    return <div>
        <p className={styles.pageTitle}>Personal Projects</p>

        {isVidClicked ?
            <div className={styles.embededVid}>
                <div className={styles.closeVid}><FaXmark onClick={handleVidClosed} /></div>

                <iframe className={styles.vidFrame} width="560" height="315" src={embededVidLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            : null}

        <Project {...projects[0]} handleClick={handleVidClicked} />
        <Project {...projects[1]} />
    </div >
}