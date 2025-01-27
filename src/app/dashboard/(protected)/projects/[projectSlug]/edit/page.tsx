'use client'
import { getProjectById } from '@/http/get-project-by-id'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { ProjectsForm } from '../../projects-form'

export default function EditProjectPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>()

  const { data, isLoading } = useQuery({
    queryKey: [`project-${projectSlug}`],
    queryFn: () => getProjectById(projectSlug),
    staleTime: 1000 * 60 * 60 * 24,
  })

  if (isLoading) return null

  if (!data) {
    return (
      <div className="mx-auto flex w-full flex-col gap-8 md:w-1/2 lg:w-1/3">
        <p>Project does not exist</p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-8 md:w-1/2 lg:w-1/3">
      <ProjectsForm
        isEditing
        initialData={{
          ...data,
          top_project: String(data.topProject),
          frameworks: data.technologies,
        }}
      />
    </div>
  )
}
