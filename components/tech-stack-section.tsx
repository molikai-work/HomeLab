// components/tech-stack-section.tsx

import { SkillItem } from "./skill-item";
import { siteConfig } from "@/config/site";

export function TechStackSection() {
  return (
    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
      {Object.entries(siteConfig.skills).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-medium">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {items.map(({ name, icon }) => (
              <SkillItem key={name} name={name} icon={icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
