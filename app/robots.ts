// app/robots.ts

import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteConfig.robots || [],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  }
}
