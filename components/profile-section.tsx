// components/profile-section.tsx

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import clsx from "clsx";
import { siteConfig } from "@/config/site"

export function ProfileSection() {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-[150px,1fr] md:grid-cols-[200px,1fr] items-start mb-8 sm:mb-12">
      <div className="relative aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-1 mx-auto sm:mx-0 w-40 sm:w-full">
        <Image
          src={siteConfig.profile.avatar || "/images/placeholder.svg"}
          alt="Avatar"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold">{siteConfig.author}</h2>
          <p className="text-white/60">{siteConfig.username}</p>
        </div>

        <div className="space-y-2">
          <p className="text-white/60">来自：{siteConfig.profile.location}</p>
          <p className="text-white/60">职业：{siteConfig.profile.occupation}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">介绍</h3>
          <p className="text-white/70">{siteConfig.profile.introduction}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">属性</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {siteConfig.profile.attributes.map((attr) => (
              <Badge
                key={attr.name}
                variant="outline"
                className={clsx(attr.color)}
              >
                {attr.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">爱好</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {siteConfig.profile.hobbies.map((hobby) => (
              <Badge key={hobby} variant="outline">
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
