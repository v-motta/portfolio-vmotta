'use client'
import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { getCertificateBySlug } from '@/http/get-certificate-by-slug'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { CertificateForm } from '../../../../add-new/certificate-form'

export default function EditCertificateSheet() {
  const { certificateSlug } = useParams<{ certificateSlug: string }>()

  const { data, isLoading } = useQuery({
    queryKey: [`certificate-${certificateSlug}`],
    queryFn: () => getCertificateBySlug(certificateSlug),
    staleTime: 1000 * 60 * 60 * 24,
  })

  if (isLoading) {
    return null
  }

  if (!data) {
    return (
      <div>
        <p>Certificate does not exist</p>
      </div>
    )
  }

  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Edit certificate</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-full">
          <CertificateForm
            isEditing
            initialData={{
              ...data,
              technologies: data.technologies,
              hour_duration: data.hourDuration,
              issue_date: data.issueDate,
              image: data.imageUrl,
            }}
          />
        </ScrollArea>
      </InterceptedSheetContent>
    </Sheet>
  )
}
