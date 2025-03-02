// app/projects/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Projects() {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">我的项目</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.projects.map((project) => (
            <div key={project.name} className="bg-zinc-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                {project.status && siteConfig.projectStatusMapping[project.status] && (
                  <Badge className={siteConfig.projectStatusMapping[project.status].className}>
                    {siteConfig.projectStatusMapping[project.status].label}
                  </Badge>
                )}
              </div>
              <p className="text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Button variant="outline" className={project.demo ? "w-1/2" : "w-full"} asChild>
                    <a href={project.github} target="_blank" rel="external nofollow noreferrer noopener">
                      <Github className="mr-2 h-4 w-4" /> 查看源代码
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" className={project.github ? "w-1/2" : "w-full"} asChild>
                    <a href={project.demo} target="_blank" rel="external nofollow noreferrer noopener">
                      <ExternalLink className="mr-2 h-4 w-4" /> 访问演示
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
