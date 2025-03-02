// components/friend-card.tsx

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

interface FriendCardProps {
  name: string
  avatar: string
  description: string
  url: string
}

export function FriendCard({ name, avatar, description, url }: FriendCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-2">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Image
          src={avatar || "/images/placeholder.svg"}
          alt={name}
          width={46}
          height={46}
          className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
        />
        <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
      </div>
      <p className="text-sm sm:text-base text-white/70">{description}</p>
      <Button variant="outline" className="w-full text-sm sm:text-base" asChild>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <Link className="mr-1 h-4 w-4" /> 查看主页
        </a>
      </Button>
    </div>
  )
}
