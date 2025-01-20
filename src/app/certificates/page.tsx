import { certificates } from '../data.json'
import { CertificateCard } from './card'

export default function ProjectsPage() {
  return (
    <main className="px-16 pb-20 lg:min-h-[calc(100vh-6rem-4rem)] 2xl:px-36">
      <h1 className="section-title">Certificates</h1>
      <div className="grid gap-5 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificates.map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </main>
  )
}
