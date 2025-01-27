import { prisma } from '@/lib/db-client'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  const project = await prisma.project.findUnique({
    select: {
      title: true,
      subtitle: true,
      description: true,
      technologies: { select: { id: true } },
      github: true,
      topProject: true,
    },
    where: { slug },
  })

  if (!project) {
    return Response.json({ message: 'Project does not exist' }, { status: 404 })
  }

  const simplifiedProject = {
    ...project,
    technologies: project.technologies.map(technology => technology.id),
  }

  return Response.json(simplifiedProject)
}
