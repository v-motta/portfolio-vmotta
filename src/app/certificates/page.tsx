import { certificates } from '@/app/data.json'
import { CertificateCard } from './card'

export default function ProjectsPage() {
  return (
    <main className="px-6 pt-10 lg:min-h-[calc(100vh-6rem-4rem)] xl:px-16 2xl:px-36">
      <h1 className="section-title">Certificates</h1>
      <div className="grid gap-5 py-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {certificates.map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </main>
  )
}
