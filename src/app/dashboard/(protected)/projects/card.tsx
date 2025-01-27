'use client'
import { Button } from '@/components/ui/button'
import { PencilLine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DeleteProjectButton } from './delete-project-button'

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
      <Image
        // src={`/certificates/${project.slug}.webp`}
        src="/myself.webp"
        alt=""
        width={1000}
        height={1000}
        quality={100}
        priority
        className="aspect-video rounded-lg border border-zinc-400 object-cover object-center dark:border-zinc-700"
      />

      <div className="text-center lg:text-start">
        <h1 className="mb-2 line-clamp-2 font-bold font-mono text-xl">
          {project.title}
        </h1>
        <h2 className="font-semibold text-zinc-500">{project.subtitle}</h2>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1" asChild>
          <Link href={`projects/${project.slug}/edit`}>
            Edit project <PencilLine />
          </Link>
        </Button>

        <DeleteProjectButton projectId={project.id} />
      </div>
    </div>
  )
}
