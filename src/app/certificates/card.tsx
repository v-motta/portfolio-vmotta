'use client'

import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

export interface CardCertificateProps {
  certificate: {
    id: string
    title: string
    slug: string
    company: string
    mainTechnology: string
    imageUrl: string
    issueDate: Date | string
  }
  onDelete?: (id: string) => void
}

export function CertificateCard({
  certificate,
  onDelete,
}: CardCertificateProps) {
  return (
    <div className="relative flex flex-col gap-5 rounded-2xl border border-zinc-200 p-5">
      {onDelete && (
        <Button
          size="icon"
          variant="destructive"
          className="absolute right-5 bottom-5"
          onClick={() => onDelete(certificate.id)}
        >
          <Trash2 />
        </Button>
      )}

      <Image
        src={certificate.imageUrl}
        alt=""
        width={1000}
        height={1000}
        quality={100}
        priority
        className="aspect-video rounded-lg object-cover object-center"
      />
      <div className="text-center lg:text-start">
        <h1 className="mb-2 line-clamp-2 h-14 font-bold font-mono text-xl">
          {certificate.title}
        </h1>
        <h2 className="font-semibold text-zinc-400">{certificate.company}</h2>
        <p className="text-zinc-400">
          Issued:{' '}
          {new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }).format(new Date(certificate.issueDate))}
        </p>
      </div>
    </div>
  )
}
