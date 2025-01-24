import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import styles from '@/app/page.module.css'
import { project } from '../types/Interfaces';

export default function Project(props: project) {
    return (
        <div className={styles.project}>

            <div className={styles.projectImgContainer}>
                <Image
                    src={props.imagePath}
                    alt='app Image'
                    width={200}
                    height={200}
                    layout='cover'
                />
            </div>

            <div>

                <div >
                    <p><span className={styles.descriptionTitle}>Description : </span>{props.discription} </p>
                </div>

                <div>
                    <p><span className={styles.descriptionTitle}>Technologies : </span>{props.technologies}</p>
                    <div className={styles.projectLinks}>

                        {props.projectLinks?.youtubeLink ?
                            <div className={styles.projectLinksIcons}>
                                <Link href={props.projectLinks.youtubeLink}>
                                    <Image
                                        width={25}
                                        height={25}
                                        src='/youtube-brands-solid.svg'
                                        alt="Youtube"
                                    />
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

                    </div>
                </div>
            </div>
        </div>
    )
}

