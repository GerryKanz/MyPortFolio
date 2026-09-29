import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { project } from '../types/Interfaces';
import styles from './project.module.css'
import VideoEmbed from './VideoEmbed'

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

                    <div className={styles.projectImgContainer}>
                        <Image
                            src={props.imagePath}
                            alt={`${props.name} screenshot`}
                            width={200}
                            height={200}
                        />
                    </div>

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

                                {props.projectLinks?.expoLink ?
                                    <div className={styles.projectLinksIcons}>
                                        <Link className={styles.link} href={props.projectLinks.expoLink}>
                                            <p>{t("viewLive")}</p>
                                            <span className={styles.linkArrow}><HiOutlineArrowSmRight /></span>
                                        </Link>
                                    </div> :
                                    null
                                }

                                {props.projectLinks?.github ?
                                    <div className={styles.projectLinksIcons}>
                                        <Link style={{ display: 'flex', alignItems: 'center', gap: '3px' }} href={props.projectLinks?.github}>
                                            <Image
                                                width={25}
                                                height={25}
                                                src='/github-brands-solid.svg'
                                                alt="Github"
                                            />
                                            <p>{t("github")}</p>
                                        </Link>

                                    </div> : null
                                }



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
                            <video
                                controls
                                className={styles.selfHostedVideo}
                                src={props.projectLinks!.videoFile}
                            >
                                {`${props.name} demo video`}
                            </video>
                        </div>
                        : null}
            </div>
        </div>
    )
}
