import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CertificatesList } from './certificates-list'

export async function Certificates() {
  const latestThreeCertificates = await prisma.certificate.findMany({
    select: {
      id: true,
      title: true,
      company: true,
      issueDate: true,
      slug: true,
      imageUrl: true,
      technologies: {
        select: { name: true },
        orderBy: { name: 'asc' },
      },
    },
    orderBy: { issueDate: 'desc' },
    take: 3,
  })

  const latestThreeCertificatesSimplified = latestThreeCertificates.map(
    certificate => ({
      ...certificate,
      technologies: certificate.technologies.map(technology => technology.name),
    })
  )

  return (
    <section id="certificates" className="flex flex-col gap-5 py-6 md:py-16">
      <h1 className="section-title">Latest Certificates</h1>

      <CertificatesList certificates={latestThreeCertificatesSimplified} />

      <Button className="w-full self-center sm:w-auto" asChild>
        <Link href="/certificates">
          See all certificates <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
