'use client'
import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { getProjectById } from '@/http/get-project-by-id'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { ProjectsForm } from '../../../../projects-form'

export default function EditProjectSheet() {
  const { projectSlug } = useParams<{ projectSlug: string }>()

  const { data, isLoading } = useQuery({
    queryKey: [`project-${projectSlug}`],
    queryFn: () => getProjectById(projectSlug),
    staleTime: 1000 * 60 * 60 * 24,
  })

  if (isLoading) return null

  if (!data) {
    return (
      <div>
        <p>Project does not exist</p>
      </div>
    )
  }

  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Edit project</SheetTitle>
        </SheetHeader>

        <ProjectsForm
          isEditing
          initialData={{
            ...data,
            top_project: String(data.topProject),
            frameworks: data.technologies,
          }}
        />
      </InterceptedSheetContent>
    </Sheet>
  )
}
