import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import styles from "./contact.module.css";

const EMAIL = "kanzarag@gmail.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription")
  };
}

export default function Contact() {
  const t = useTranslations("ContactPage");

  return (
    <>
      <div className="pageTitle">
        <h1>{t("title")}</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.contactCard}>
          <p>{t("intro")}</p>
          <a className={styles.emailLink} href={`mailto:${EMAIL}`}>
            {t("emailLabel")}: {EMAIL}
          </a>
        </div>
      </div>
    </>
  );
}
