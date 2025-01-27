import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ProjectsForm } from '../../projects-form'

export default function AddNewProjectSheet() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Add new project</SheetTitle>
        </SheetHeader>

        <ProjectsForm />
      </InterceptedSheetContent>
    </Sheet>
  )
}
