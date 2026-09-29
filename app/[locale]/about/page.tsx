import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import styles from "./about.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription")
  };
}

export default function About() {
  const t = useTranslations("AboutPage");

  const sections = [
    { id: "bio", label: t("bioHeading") },
    { id: "education", label: t("educationHeading") },
    { id: "experience", label: t("experienceHeading") },
    { id: "certifications", label: t("certificationsHeading") },
    { id: "skills", label: t("skillsHeading") }
  ];

  return (
    <>
      <div className={styles.pageLayout}>
        <nav className={styles.sidebar} aria-label={t("title")}>
          {sections.map((section) => (
            <a key={section.id} className={styles.sidebarLink} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className={styles.cardsContainer}>
          <div id="bio" className={styles.card}>
            <h2 className={styles.sectionHeading}>{t("bioHeading")}</h2>
            <div className={styles.profileRow}>
              <p className={styles.bio}>{t("bio")}</p>
              <div className={styles.profileImage}>
                <Image
                  width={220}
                  height={220}
                  src="/geraldkan-headshot.jpg"
                  alt="Gerald's Image"
                />
              </div>
            </div>
          </div>

          <div id="education" className={styles.card}>
            <h2 className={styles.sectionHeading}>{t("educationHeading")}</h2>
            <ul className={styles.plainList}>
              <li>{t("educationCs")}</li>
              <li>{t("educationEd")}</li>
            </ul>
          </div>

          <div id="experience" className={styles.card}>
            <h2 className={styles.sectionHeading}>{t("experienceHeading")}</h2>

            <div className={styles.experienceEntry}>
              <div className={styles.experienceHeader}>
                <span className={styles.experienceRole}>{t("experienceBerlitzRole")}</span>
                <span className={styles.experienceDates}>{t("experienceBerlitzDates")}</span>
              </div>
              <p>{t("experienceBerlitzDescription")}</p>
            </div>

            <div className={styles.experienceEntry}>
              <div className={styles.experienceHeader}>
                <span className={styles.experienceRole}>{t("experienceIttoRole")}</span>
                <span className={styles.experienceDates}>{t("experienceIttoDates")}</span>
              </div>
              <p>{t("experienceIttoDescription")}</p>
            </div>
          </div>

          <div id="certifications" className={styles.card}>
            <h2 className={styles.sectionHeading}>{t("certificationsHeading")}</h2>
            <ul className={styles.plainList}>
              <li>{t("certificationDegree")}</li>
              <li>{t("certificationJlpt")}</li>
              <li>{t("certificationKikagaku")}</li>
            </ul>
          </div>

          <div id="skills" className={styles.card}>
            <h2 className={styles.sectionHeading}>{t("skillsHeading")}</h2>
            <ul className={styles.plainList}>
              <li>{t("skillsLanguages")}</li>
              <li>{t("skillsData")}</li>
              <li>{t("skillsTools")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
