import { prisma } from '@/lib/db-client'
import { ProjectCard } from './card'

export default async function ProjectsPage() {
  const allProjects = await prisma.project.findMany()

  return (
    <main className="px-6 pt-10 lg:min-h-[calc(100vh-6rem-4rem)] xl:px-16 2xl:px-36">
      <h1 className="section-title">Projects</h1>

      <div className="grid gap-5 py-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {allProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
