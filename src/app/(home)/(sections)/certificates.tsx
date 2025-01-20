import { CertificateCard } from '@/app/certificates/card'
import { certificates } from '@/app/data.json'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Certificates() {
  return (
    <section id="certificates" className="flex flex-col gap-12 py-16">
      <h1 className="section-title">Latest Certificates</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {certificates.slice(0, 3).map(certificate => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>

      <Button className="self-center" asChild>
        <Link href="/certificates">
          Todos os certificados <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
