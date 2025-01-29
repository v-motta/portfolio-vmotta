import { CertificateCard } from '@/app/certificates/card'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default async function CertificatesPage() {
  const allCertificates = await prisma.certificate.findMany({
    select: {
      id: true,
      title: true,
      company: true,
      issueDate: true,
      slug: true,
      imageUrl: true,
      mainTechnology: { select: { name: true } },
    },
    orderBy: { issueDate: 'desc' },
  })

  const allCertificatesSimplified = allCertificates.map(certificate => ({
    ...certificate,
    mainTechnology: certificate.mainTechnology.name,
  }))

  return (
    <div>
      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
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

      <div className="grid gap-5 py-8 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {allCertificatesSimplified.map(certificate => (
          <Link
            key={certificate.id}
            href={`certificates/${certificate.slug}/edit`}
          >
            <CertificateCard certificate={certificate} />
          </Link>
        ))}
      </div>
    </div>
  )
}
