import { iconsNode } from '@/components/icons/icon-node'
import { getCleanText } from '@/lib/clean-text'
import { format, formatDistance } from 'date-fns'
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
    <div className="relative flex h-full cursor-pointer flex-col gap-4 rounded-2xl border border-zinc-400 p-4 shadow transition-all hover:bg-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800">
      <Image
        src={certificate.imageUrl}
        alt=""
        width={700}
        height={700}
        quality={100}
        priority
        className="aspect-video w-full rounded-lg object-cover object-bottom dark:border-zinc-700"
      />

      <div className="flex w-full flex-1 flex-col justify-between gap-4">
        <div className="h-full flex-1">
          <h1 className="mb-4 line-clamp-2 h-14 flex-1 font-bold font-mono text-xl">
            {certificate.title}
          </h1>

          <div className="flex flex-wrap gap-4">
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
            {formatDistance(new Date(certificate.issueDate), new Date(), {
              addSuffix: true,
            })}{' '}
            - {format(new Date(certificate.issueDate), 'dd MMMM yyyy')}
          </p>
        </div>
      </div>
    </div>
  )
}
