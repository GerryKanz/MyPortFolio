import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import styles from '@/app/page.module.css'
import { project, embededLink } from '../types/Interfaces';

export default function Project({ handleClick, ...props }: project & embededLink) {

    const vidClicked = () => {
        return props.projectLinks?.youtubeLinkEmbedded
    }

    return (<div>

        <div className={styles.project}>

            <div className={styles.projectImgContainer}>
                <Image
                    src={props.imagePath}
                    alt='app Image'
                    width={200}
                    height={200}
                />
            </div>

            <div>

                <div >
                    <p><span className={styles.descriptionTitle}>Description : </span>{props.discription} </p>
                </div>

                <div>
                    <p><span className={styles.descriptionTitle}>Technologies : </span>{props.technologies}</p>
                    <div className={styles.projectLinks}>

                        {props.projectLinks?.youtubeLinkEmbedded ?
                            <div className={styles.projectLinksIcons}>
                                <Link onClick={() => {
                                    if (handleClick) {
                                        handleClick(vidClicked)
                                    } else {
                                        return null
                                    }
                                }} style={{ display: 'flex', alignItems: 'center', gap: '3px' }} href={'#'}>
                                    <Image
                                        width={25}
                                        height={25}
                                        src='/youtube-brands-solid.svg'
                                        alt="Youtube"
                                    />
                                    <p>Youtube</p>
                                </Link>

                            </div>
                            : null}

                        {props.projectLinks?.expoLink ?
                            <div className={styles.projectLinksIcons}>
                                <Link href={props.projectLinks.expoLink}>
                                    View project in Expo <span style={{ fontSize: 'x-large', fontWeight: 'bold', transform: 'rotate(-45deg)', display: 'inline-block' }}><HiOutlineArrowSmRight /></span>
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
                                    <p>Github</p>
                                </Link>

                            </div> : null
                        }



                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

