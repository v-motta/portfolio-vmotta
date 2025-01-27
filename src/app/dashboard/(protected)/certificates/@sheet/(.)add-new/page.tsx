import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { AddNewCertificateForm } from '../../add-new/certificate-form'

export default function AddNewCertificateSheet() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Add new certificate</SheetTitle>
        </SheetHeader>

        <AddNewCertificateForm />
      </InterceptedSheetContent>
    </Sheet>
  )
}
