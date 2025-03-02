// components/game-card.tsx

import { Badge } from "@/components/ui/badge"

interface GameCardProps {
  name: string
  description: string
  genre: string
  url?: string
}

export function GameCard({ name, description, genre, url }: GameCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="external nofollow noreferrer noopener"
            className="text-blue-400 hover:text-blue-400 underline-hover"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </h2>
      <p className="text-sm sm:text-base text-white/70">{description}</p>
      <Badge variant="secondary">{genre}</Badge>
    </div>
  )
}
