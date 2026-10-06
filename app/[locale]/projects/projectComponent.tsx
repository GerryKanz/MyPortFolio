import Image from 'next/image'
import Link from 'next/link'
import { project } from '../types/Interfaces';
import styles from './project.module.css'
import VideoEmbed from './VideoEmbed'
import SelfHostedVideo from './SelfHostedVideo'

import { useTranslations } from 'next-intl';

export default function Project({ id, ...props }: project & { id?: string }) {
    const t = useTranslations("ProjectsPage")

    const hasYoutubeEmbed = !!props.projectLinks?.youtubeLinkEmbedded
    const hasVideoFile = !hasYoutubeEmbed && !!props.projectLinks?.videoFile

    return (
        <div className={styles.projectContainer}>

            <div id={id} className={styles.project}>
                <div className={styles.projectName}>
                    <div>
                        <h4>{props.name}</h4>
                    </div>

                </div>
                <div className={styles.projectDetail}>

                    {props.imagePath ?
                        <div className={styles.projectImgContainer}>
                            <Image
                                src={props.imagePath}
                                alt={`${props.name} screenshot`}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        : null}

                    <div>

                        <div >
                            <h3 className={styles.description}>{t("description")} : <span className={styles.descriptionDetail}>{props.discription} </span> </h3>
                        </div>

                        <div>
                            <h3 className={styles.description}>{t("technologies")} :  <span className={styles.descriptionDetail}>{props.technologies}</span></h3>
                            <div className={styles.projectLinks}>

                                {props.projectLinks?.youtubeLinkEmbedded ?
                                    <div className={styles.projectLinksIcons}>
                                        <Link style={{ display: 'flex', alignItems: 'center', gap: '3px' }} href={props.projectLinks.youtubeLink ?? props.projectLinks.youtubeLinkEmbedded}>
                                            <Image
                                                width={25}
                                                height={25}
                                                src='/youtube-brands-solid.svg'
                                                alt="Youtube"
                                            />
                                            <p>{t("youtube")}</p>
                                        </Link>

                                    </div>
                                    : null}

                            </div>
                        </div>

                    </div>
                </div>

                {hasYoutubeEmbed ?
                    <div className={styles.embedContainer}>
                        <h3 className={styles.embedHeading}>{t("videoDemoLabel")}</h3>
                        <VideoEmbed
                            embedUrl={props.projectLinks!.youtubeLinkEmbedded!}
                            title={`${props.name} demo video`}
                        />
                    </div>
                    : hasVideoFile ?
                        <div className={styles.embedContainer}>
                            <h3 className={styles.embedHeading}>{t("videoDemoLabel")}</h3>
                            <SelfHostedVideo
                                src={props.projectLinks!.videoFile!}
                                title={`${props.name} demo video`}
                            />
                        </div>
                        : null}
            </div>
        </div>
    )
}
