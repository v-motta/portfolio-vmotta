import { CertificateCard } from '@/app/certificates/card'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default async function CertificatesPage() {
  const allCertificates = await prisma.certificate.findMany({
    orderBy: { issueDate: 'desc' },
  })

  return (
    <div className="px-6 pt-10 xl:px-16 2xl:px-36">
      <div className="flex justify-between">
        <h1>Certificates page</h1>

        <Button asChild>
          <Link href="certificates/add-new">
            Add new <CirclePlus />
          </Link>
        </Button>
      </div>

      <div className="grid gap-5 py-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {allCertificates.map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}
