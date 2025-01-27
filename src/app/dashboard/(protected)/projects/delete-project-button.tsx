import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { deleteProjectAction } from './action'

interface DeleteProjectButtonProps {
  projectId: string
}

export function DeleteProjectButton({ projectId }: DeleteProjectButtonProps) {
  return (
    <form action={deleteProjectAction.bind(null, projectId)}>
      <Button size="icon" variant="destructive">
        <Trash2 />
      </Button>
    </form>
  )
}
