import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ProjectsForm } from '../../projects-form'

export default function AddNewProjectSheet() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Add new project</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-full">
          <ProjectsForm />
        </ScrollArea>
      </InterceptedSheetContent>
    </Sheet>
  )
}
