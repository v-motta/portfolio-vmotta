'use client'

import { iconsNode } from '@/components/icons/icon-node'
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getCleanText } from '@/lib/clean-text'
import { format, formatDistance } from 'date-fns'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { CertificateCard } from './card'

interface CertificateListProps {
  certificates: {
    technologies: string[]
    id: string
    title: string
    company: string
    issueDate: Date
    imageUrl: string
  }[]
}

export function CertificateList({ certificates }: CertificateListProps) {
  const [certificateInfo, setCertificateInfo] =
    useState<CertificateListProps['certificates'][number]>()

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {certificates.slice(0, 3).map(certificate => (
          <DialogTrigger
            key={certificate.id}
            onClick={() => setCertificateInfo(certificate)}
            asChild
          >
            <div className="cursor-pointer space-y-4 rounded-2xl border border-zinc-400 p-4 shadow transition-all hover:bg-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800">
              <Image
                src={certificate.imageUrl}
                alt=""
                width={600}
                height={600}
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
                    {formatDistance(
                      new Date(certificate.issueDate),
                      new Date(),
                      {
                        addSuffix: true,
                      }
                    )}{' '}
                    - {format(new Date(certificate.issueDate), 'dd MMMM yyyy')}
                  </p>
                </div>
              </div>
            </div>
          </DialogTrigger>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-4">
        {certificates.slice(3).map(certificate => (
          <DialogTrigger
            key={certificate.id}
            onClick={() => setCertificateInfo(certificate)}
            className="text-start"
          >
            <CertificateCard certificate={certificate} />
          </DialogTrigger>
        ))}
      </div>

      {certificateInfo && (
        <DialogContent className="w-11/12 landscape:w-2/3">
          <DialogTitle>{certificateInfo.title}</DialogTitle>
          <DialogDescription>
            Issued by {certificateInfo.company} on{' '}
            {new Date(certificateInfo.issueDate).toLocaleDateString()}
          </DialogDescription>
          <Image
            src={certificateInfo.imageUrl}
            alt={certificateInfo.title}
            width={1920}
            height={1080}
            className="max-h-full max-w-full object-contain"
          />
        </DialogContent>
      )}
    </>
  )
}
