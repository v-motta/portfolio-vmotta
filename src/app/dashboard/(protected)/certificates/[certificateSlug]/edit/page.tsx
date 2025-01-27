'use client'
import { getCertificateBySlug } from '@/http/get-certificate-by-slug'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { CertificateForm } from '../../add-new/certificate-form'

export default function EditCertificatePage() {
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
      <div className="mx-auto flex w-full flex-col gap-8 md:w-1/2 lg:w-1/3">
        <p>Certificate does not exist</p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-8 md:w-1/2 lg:w-1/3">
      <CertificateForm
        isEditing
        initialData={{
          ...data,
          main_technology: data.mainTechnology,
          hour_duration: data.hourDuration,
          issue_date: data.issueDate,
          image: data.imageUrl,
        }}
      />
    </div>
  )
}
