// app/sitemap.ts

import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = siteConfig.navItems
    .filter((item) => item.path.startsWith("/"))
    .map((item) => item.path)

  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
