'use client'

import { iconsNode } from '@/components/icons/icon-node'
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getCleanText } from '@/lib/clean-text'
import Image from 'next/image'
import { useState } from 'react'
import { CertificateCard } from './card'

interface CertificateListProps {
  certificates: {
    mainTechnology: string
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
      <div className="flex flex-col gap-5 md:flex-row">
        {certificates.slice(0, 3).map(certificate => (
          <DialogTrigger
            key={certificate.id}
            onClick={() => setCertificateInfo(certificate)}
            asChild
          >
            <div className="cursor-pointer space-y-4 rounded-2xl border border-zinc-700 p-4 transition-all hover:scale-105 hover:bg-zinc-800 hover:shadow">
              <Image
                src={certificate.imageUrl}
                alt=""
                width={600}
                height={600}
                quality={100}
                priority
                className="rounded-lg object-cover object-center dark:border-zinc-700"
              />

              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="mb-2 line-clamp-2 font-bold font-mono text-xl">
                    {certificate.title}
                  </h1>
                  {iconsNode[getCleanText(certificate.mainTechnology)]}
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
          </DialogTrigger>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
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
