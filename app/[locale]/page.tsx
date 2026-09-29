import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [t, site] = await Promise.all([
    getTranslations({ locale, namespace: "HomePage" }),
    getTranslations({ locale, namespace: "Metadata" })
  ]);

  return {
    title: `${t("metaTitle")} — ${site("title")}`,
    description: t("metaDescription")
  };
}

export default function Home() {

  const t = useTranslations('HomePage');

  const skillsIcons = [
    { src: '/html-5.png', alt: 'HTML5' },
    { src: '/css-3.png', alt: 'CSS3' },
    { src: '/js.png', alt: 'JavaScript' },
    { src: '/physics.png', alt: 'Physics' },
    { src: '/python.png', alt: 'Python' },
    { src: '/github.png', alt: 'GitHub' }
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
          </div>
        </div>
        <div className={styles.skillsIcons}>
          {skillsIcons.map((icon, index) => (

            <Image
              key={index}
              width={30}
              height={30}
              src={icon.src}
              alt={icon.alt}
              className={styles.SkillIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
