// app/games/page.tsx

import { PageLayout } from "@/components/page-layout"
import { GameCard } from "@/components/game-card"
import { siteConfig } from "@/config/site"

export default function Games() {
  return (
    <PageLayout title="我喜欢的游戏">
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.games.map((game) => (
          <GameCard key={game.name} {...game} genre={game.genre.join(" / ")} />
        ))}
      </div>
    </PageLayout>
  )
}
