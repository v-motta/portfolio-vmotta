import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { CertificateForm } from '../../add-new/certificate-form'

export default function AddNewCertificateSheet() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Add new certificate</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-full">
          <CertificateForm />
        </ScrollArea>
      </InterceptedSheetContent>
    </Sheet>
  )
}
