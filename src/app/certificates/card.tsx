'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export interface CardCertificateProps {
  certificate: {
    id: string
    title: string
    company: string
    slug: string
    issueDate: Date
    imageUrl: string
    createdAt: Date
    technologyId: string
  }
  handleOnDelete?: (id: string) => void
}

export function CertificateCard({
  certificate,
  handleOnDelete,
}: CardCertificateProps) {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <div className="relative flex cursor-pointer flex-col gap-4 rounded-2xl border border-zinc-400 p-4 shadow dark:border-zinc-700">
          {handleOnDelete && (
            <Button
              size="icon"
              variant="destructive"
              className="absolute right-5 bottom-5"
              onClick={() => handleOnDelete(certificate.id)}
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
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent className="max-w-[60vw]">
        {certificate && (
          <>
            <DialogTitle>{certificate.title}</DialogTitle>
            <DialogDescription>
              Issued by {certificate.company} on{' '}
              {new Date(certificate.issueDate).toLocaleDateString()}
            </DialogDescription>
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              width={1920}
              height={1080}
              className="h-full rounded-lg shadow-xl"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
