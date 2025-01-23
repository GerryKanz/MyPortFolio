import styles from '@/app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default function Projects() {
    return <div>
        <div className={styles.project}>

            <div className={styles.projectImgContainer}>
                <Image
                    src='/bookingAppImg.jpg'
                    alt='app Image'
                    width={250}
                    height={250}
                    layout='cover'
                />
            </div>

            <div>

                <div >
                    <p><span className={styles.descriptionTitle}>Description : </span> Nail salon booking app project built using React Native is an app that similates the booking process. It allpows users to create an account, make appointments and cancel appointments when needed </p>
                </div>

                <div>
                    <p><span className={styles.descriptionTitle}>Technologies : </span>
                        Javascript and ReactNative </p>

                    <div className={styles.projectLinks}>
                        <div className={styles.projectLinksIcons}>
                            <Link href={'https://youtu.be/iBS_5fEgYm8'}>
                                <Image
                                    width={25}
                                    height={25}
                                    src='/youtube-brands-solid.svg'
                                    alt="Youtube"
                                />
                            </Link>
                        </div>

                        <div className={styles.projectLinksIcons}>
                            <Link href={'https://expo.dev/preview/update?message=updated%20SDK%20for%20compatibility&updateRuntimeVersion=1.0.0&createdAt=2025-01-17T14%3A54%3A52.142Z&slug=exp&projectId=6f5a2d47-8e58-4c17-990b-50b1bb6214f5&group=0bbef6e3-a8b0-410d-aa8b-c1144eeb6f2e'}>
                                View project in Expo <span style={{ fontSize: 'x-large', fontWeight: 'bold', transform: 'rotate(-45deg)', display: 'inline-block' }}><HiOutlineArrowSmRight /></span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </div >
}