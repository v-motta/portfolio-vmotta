import { iconsNode } from '@/components/icons/icon-node'
import { getCleanText } from '@/lib/clean-text'
import Image from 'next/image'
import { Fragment } from 'react'

export interface CardCertificateProps {
  certificate: {
    id: string
    title: string
    company: string
    issueDate: Date
    imageUrl: string
    technologies: string[]
  }
}

export function CertificateCard({ certificate }: CardCertificateProps) {
  return (
    <div className="relative flex cursor-pointer flex-col gap-4 rounded-2xl border border-zinc-700 p-4 transition-all hover:scale-105 hover:bg-zinc-800 hover:shadow">
      <Image
        src={certificate.imageUrl}
        alt=""
        width={700}
        height={700}
        quality={100}
        priority
        className="aspect-square h-36 w-full rounded-lg object-cover object-bottom 2xl:h-36 dark:border-zinc-700"
      />
      <div className="flex w-full flex-col justify-between gap-4">
        <div>
          <h1 className="mb-4 line-clamp-2 h-14 font-bold font-mono text-xl">
            {certificate.title}
          </h1>

          <div className="flex gap-4">
            {certificate.technologies.map(technology => (
              <Fragment key={technology}>
                {iconsNode[getCleanText(technology)]}
              </Fragment>
            ))}
          </div>
        </div>

        <div>
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
    </div>
  )
}
