import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { project, embededLink } from '../types/Interfaces';
import styles from './project.module.css'

export default function Project({ handleClick, ...props }: project & embededLink) {

    const vidClicked = () => {
        return props.projectLinks?.youtubeLinkEmbedded
    }

    return (
        <div className={styles.projectContainer}>

            <div className={styles.project}>
                <div className={styles.projectName}>
                    <h4>{props.name}</h4>
                </div>
                <div className={styles.projectDetail}>

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
                            <h3 className={styles.description}>Description : <span className={styles.descriptionDetail}>{props.discription} </span> </h3>
                        </div>

                        <div>
                            <h3 className={styles.description}>Technologies :  <span className={styles.descriptionDetail}>{props.technologies}</span></h3>
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
        </div>
    )
}

