import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription")
  };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
