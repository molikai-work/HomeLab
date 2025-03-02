// components/project-card.tsx

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <Card className="bg-zinc-950 border-white/10 overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl || "/images/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-black/50 text-white/70">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
