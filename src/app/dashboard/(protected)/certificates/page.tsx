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
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-jet-brains-mono text-xl">
          Certificates:{' '}
          <span className="concat-variable">{allCertificates.length}</span>
        </h1>

        <Button asChild>
          <Link href="certificates/add-new">
            Add new certificate <CirclePlus />
          </Link>
        </Button>
      </div>

      <div className="grid gap-5 py-8 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
        {allCertificates.map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}
