import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '../data.json'

export function NewestProjects() {
  return (
    <section id="newest_projects" className="flex flex-col gap-12 px-44 py-16">
      <h1 className="section-title">Newest Projects</h1>

      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {projects.slice(0, 8).map(project => (
          <div
            key={project.id}
            className="flex flex-col gap-6 rounded-xl border border-zinc-200 p-5"
          >
            <div className="flex flex-1 flex-col gap-2">
              <h1 className="truncate font-bold text-xl">{project.title}</h1>
              <p className="line-clamp-2 text-balance text-zinc-400">
                {project.description}
              </p>
            </div>

            <Button variant="outline" asChild>
              <Link href={`projects/${project.slug}`}>Saiba mais</Link>
            </Button>
          </div>
        ))}
      </div>

      <Button className="self-center" asChild>
        <Link href="/projects">
          Todos os projetos <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
