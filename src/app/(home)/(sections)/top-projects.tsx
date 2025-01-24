import { ProjectCard } from '@/app/projects/card'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function TopProjects() {
  const topThreeProjects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    where: { topProject: true },
    take: 3,
  })

  return (
    <section id="top_projects" className="flex flex-col gap-5 py-6 md:py-16">
      <h1 className="section-title">Top Projects</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {topThreeProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Button className="w-full self-center sm:w-auto" asChild>
        <Link href="/projects">
          See all projects <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
