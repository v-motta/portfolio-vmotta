import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db-client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export async function Certificates() {
  const latestThreeCertificates = await prisma.certificate.findMany({
    orderBy: { issueDate: 'desc' },
    take: 3,
  })

  return (
    <section id="certificates" className="flex flex-col gap-5 py-6 md:py-16">
      <h1 className="section-title">Latest Certificates</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {latestThreeCertificates.map(certificate => (
          <div
            key={certificate.id}
            className="relative flex cursor-pointer flex-col gap-4 rounded-2xl border border-zinc-400 p-4 shadow dark:border-zinc-700"
          >
            <Image
              src={certificate.imageUrl}
              alt=""
              width={1000}
              height={1000}
              quality={100}
              priority
              className="aspect-video rounded-lg border border-zinc-400 object-cover object-center dark:border-zinc-700"
            />
            <div className="text-center lg:text-start">
              <h1 className="mb-2 line-clamp-2 h-14 font-bold font-mono text-xl">
                {certificate.title}
              </h1>
              <h2 className="font-semibold text-zinc-600 dark:text-zinc-400">
                {certificate.company}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Issued:{' '}
                {new Intl.DateTimeFormat('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                }).format(new Date(certificate.issueDate))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full self-center sm:w-auto" asChild>
        <Link href="/certificates">
          See all certificates <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
