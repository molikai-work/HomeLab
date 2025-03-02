// components/tech-stack-section.tsx

import { SkillItem } from "./skill-item"
import { siteConfig } from "@/config/site"

export function TechStackSection() {
  return (
    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">编程语言</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.skills.languages.map(({ name, icon }) => (
            <SkillItem key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">框架</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.skills.frameworks.map(({ name, icon }) => (
            <SkillItem key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">工具</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.skills.tools.map(({ name, icon }) => (
            <SkillItem key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
