'use client'
import { GitHubIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export interface CardProjectProps {
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    slug: string
    github: string | null
    imagesUrl: string[]
    topProject: boolean
    createdAt: Date
  }
}

export function ProjectCard({ project }: CardProjectProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-400 p-4 shadow dark:border-zinc-700">
      {project.imagesUrl.length > 0 ? (
        <Image
          src={project.imagesUrl[0]}
          alt={project.title}
          width={1000}
          height={1000}
          quality={100}
          priority
          className="aspect-video rounded-lg border border-zinc-400 object-cover object-center dark:border-zinc-700"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-lg border border-zinc-400 bg-zinc-400 dark:border-zinc-700 dark:bg-zinc-800">
          <h1>Project without image</h1>
        </div>
      )}

      <div className="text-center lg:text-start">
        <h1 className="mb-2 line-clamp-2 font-bold font-mono text-xl">
          {project.title}
        </h1>
        <h2 className="font-semibold text-zinc-600 dark:text-zinc-400">
          {project.subtitle}
        </h2>
      </div>

      <div className="flex gap-5">
        <Button variant="outline" className="flex-1" asChild>
          <Link href={`/projects/${project.slug}`}>Read more</Link>
        </Button>

        {project.github && (
          <Button variant="outline" size="icon" asChild>
            <a href={project.github} target="_blank" rel="noreferrer noopener">
              <GitHubIcon />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
