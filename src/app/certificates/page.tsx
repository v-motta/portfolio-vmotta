import { Dialog } from '@/components/ui/dialog'
import { prisma } from '@/lib/db-client'
import { CertificateList } from './certificates-list'

export default async function CertificatesPage() {
  const allCertificates = await prisma.certificate.findMany({
    select: {
      id: true,
      title: true,
      company: true,
      issueDate: true,
      imageUrl: true,
      technologies: { select: { name: true }, orderBy: { name: 'asc' } },
    },
    orderBy: { issueDate: 'desc' },
  })

  const allCertificatesSimplified = allCertificates.map(certificate => ({
    ...certificate,
    technologies: certificate.technologies.map(technology => technology.name),
  }))

  return (
    <main className="flex flex-col gap-10 px-6 py-10 lg:min-h-[calc(100vh-6rem-4rem)] xl:px-16 2xl:px-36">
      <h1 className="section-title">Certificates</h1>

      <Dialog>
        <div className="flex flex-col gap-5">
          <CertificateList certificates={allCertificatesSimplified} />
        </div>
      </Dialog>
    </main>
  )
}
