'use client'

import styles from '@/app/[locale]/projects/page.module.css'
import Project from './projectComponent'
// import { projects } from './projectsData';
import ProjectsData from './projectsData';
import { useState } from 'react';
import { FaXmark, FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import { useTranslations } from 'next-intl';



export default function Projects() {
    const t = useTranslations("ProjectsPage")

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

        <Link href={'./'} className={styles.backArrow}><FaArrowLeftLong /></Link>

        <div className='pageTitle'>
            <h1>{t('title')}</h1>
        </div>


        {isVidClicked ?
            <div className={styles.embededVid}>
                <div className={styles.closeVid}><FaXmark onClick={handleVidClosed} /></div>

                <iframe width="560" height="315" src={embededVidLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            : null}

        <div className={styles.projectsContainer}>
            {ProjectsData().map((project, index) => (
                <Project key={index} {...project} handleClick={handleVidClicked} />
            ))}
        </div>

    </div >
}