import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { TopProjectsList } from './top-projects-list'

export async function TopProjects() {
  const topThreeProjects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    where: { topProject: true },
    take: 3,
  })

  return (
    <section id="top_projects" className="flex flex-col gap-5 py-6 md:py-16">
      <h1 className="section-title">Top Projects</h1>

      <TopProjectsList topThreeProjects={topThreeProjects} />

      <Button className="w-full self-center sm:w-auto" asChild>
        <Link href="/projects">
          See all projects <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
