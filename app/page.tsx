// app/page.tsx

import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { ProfileSection } from "@/components/profile-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <PageLayout title={siteConfig.homeQuotes}>
      <ProfileSection />
      <TechStackSection />

      {siteConfig.socialLinks.enable && (
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          {siteConfig.socialLinks.links.map(({ name, href, target = "_blank", rel = "external nofollow noreferrer noopener", icon = "Globe" }) => {
            const IconComponent = LucideIcons[icon]
            return IconComponent ? (
              <Button key={name} variant="outline" size="icon" asChild>
                <Link href={href} title={name} target={target} rel={rel}>
                  <IconComponent className="w-4 h-4" />
                  <span className="sr-only">{name}</span>
                </Link>
              </Button>
            ) : null
          })}
        </div>
      )}
    </PageLayout>
  )
}
