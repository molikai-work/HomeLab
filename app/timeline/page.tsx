// app/timeline/page.tsx

import { siteConfig } from "@/config/site"
import { CurrentTime } from "@/components/current-time"

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">我的时间线</h1>
      <div className="space-y-8">
        {siteConfig.timelineEvents.map((event, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-0.5 h-full bg-blue-500"></div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 flex-grow">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-white/70 mb-2">{event.description}</p>
              <time className="text-sm text-white/50">{event.date === "now" ? <CurrentTime /> : event.date}</time>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
