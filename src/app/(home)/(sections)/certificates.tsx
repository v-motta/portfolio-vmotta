import { CertificateCard } from '@/app/certificates/card'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function Certificates() {
  const latestThreeCertificates = await prisma.certificate.findMany({
    orderBy: { issueDate: 'desc' },
    take: 3,
  })

  return (
    <section id="certificates" className="flex flex-col gap-8 py-8 md:py-16">
      <h1 className="section-title">Latest Certificates</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {latestThreeCertificates.map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>

      <Button className="self-center" asChild>
        <Link href="/certificates">
          See all certificates <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
