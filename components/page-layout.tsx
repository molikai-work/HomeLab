// components/page-layout.tsx

import type { ReactNode } from "react"

interface PageLayoutProps {
  title: string | string[]
  children: ReactNode
}

export function PageLayout({ title, children }: PageLayoutProps) {
  const displayTitle = Array.isArray(title) ? title[Math.floor(Math.random() * title.length)] : title

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        {displayTitle}
      </h1>
      {children}
    </div>
  )
}

