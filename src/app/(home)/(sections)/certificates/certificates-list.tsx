'use client'

import { CertificateCard } from '@/app/certificates/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

interface CertificatesListProps {
  certificates: {
    technologies: string[]
    id: string
    title: string
    slug: string
    company: string
    issueDate: Date
    imageUrl: string
  }[]
}

export function CertificatesList({ certificates }: CertificatesListProps) {
  const [certificateInfo, setCertificateInfo] =
    useState<CertificatesListProps['certificates'][number]>()

  return (
    <Dialog>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {certificates?.map((certificate, index) => (
          <DialogTrigger
            key={certificate.id}
            onClick={() => setCertificateInfo(certificate)}
            className="text-start"
            asChild
          >
            <motion.div
              key={certificate.id}
              className="h-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: [-50, 20, 0], opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5 * index,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <CertificateCard certificate={certificate} />
            </motion.div>
          </DialogTrigger>
        ))}

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
      </div>
    </Dialog>
  )
}
