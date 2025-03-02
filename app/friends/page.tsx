// app/friends/page.tsx

import { PageLayout } from "@/components/page-layout"
import { FriendCard } from "@/components/friend-card"
import { siteConfig } from "@/config/site"

export default function Friends() {
  return (
    <PageLayout title="我的朋友们">
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.friends.map((friend) => (
          <FriendCard key={friend.name} {...friend} />
        ))}
      </div>
    </PageLayout>
  )
}
