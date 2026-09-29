import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const routes = ["/", "/projects", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    routes.map((route) => {
      const pathnames = routing.pathnames[route];
      const localizedPath =
        typeof pathnames === "string" ? pathnames : pathnames[locale];

      return {
        url: `${siteUrl}/${locale}${encodeURI(localizedPath)}`,
        lastModified: new Date()
      };
    })
  );
}
