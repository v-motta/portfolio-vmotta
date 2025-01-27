import { ProjectCard } from '@/app/projects/card'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default async function ProjectPage() {
  const allProjects = await prisma.project.findMany()

  return (
    <div>
      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        <h1 className="font-jet-brains-mono text-xl">
          Projects:{' '}
          <span className="concat-variable">{allProjects.length}</span>
        </h1>

        <Button asChild>
          <Link href="projects/add-new">
            Add new project <CirclePlus />
          </Link>
        </Button>
      </div>

      <div className="grid gap-5 py-8 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {allProjects.map(project => (
          <Link key={project.id} href={`projects/${project.slug}/edit`}>
            <ProjectCard key={project.id} project={project} />
          </Link>
        ))}
      </div>
    </div>
  )
}
