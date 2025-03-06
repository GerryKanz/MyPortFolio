import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
// import { Link } from '@/i18n/navigation';

export default function Home() {

  const t = useTranslations('HomePage');

  const skillsIcons = [
    '/html-5.png',
    '/css-3.png',
    '/js.png',
    '/physics.png',
    '/python.png',
    '/github.png'

  ]

  return (
    <>
      <div className="pageTitle">
        <h1>{t('title')}</h1>
      </div>


      <div className={styles.container}>
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <div>
              <p>{t('intro')}</p>
              <p className={styles.name}>Gerald Kanzara</p>
            </div>

            <div className={styles.IntroImg}>
              <Image
                width={250}
                height={250}
                src='/geraldkan.jpg'
                alt="Gerald's Image"
              />
            </div>
          </div>
        </div>
        <div className={styles.skillsIcons}>
          {skillsIcons.map((icon, index) => (

            <Image
              key={index}
              width={30}
              height={30}
              src={icon}
              alt={"Skill Icon"}
              className={styles.SkillIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
