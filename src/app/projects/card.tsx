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
    github: string
    imageUrl: string
    topProject: boolean
    createdAt: Date
  }
}

export function ProjectCard({ project }: CardProjectProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-400 p-4">
      <Image
        // src={`/certificates/${project.slug}.webp`}
        src="/myself.webp"
        alt=""
        width={1000}
        height={1000}
        quality={100}
        priority
        className="aspect-video rounded-lg border border-neutral-400 object-cover object-center"
      />

      <div className="text-center lg:text-start">
        <h1 className="line-clamp-2 font-bold font-mono text-xl">
          {project.title}
        </h1>
        <h2 className="font-semibold text-zinc-500">{project.subtitle}</h2>
      </div>

      <div className="flex gap-5">
        <Button variant="outline" className="flex-1" asChild>
          <Link href={`/projects/${project.slug}`}>Read more</Link>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link href={`/projects/${project.slug}`}>
            <GitHubIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}
