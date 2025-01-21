'use client'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from './contact-form'
import { WaysToContactMe } from './ways-to-contact-me'

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-6rem-6rem)] items-center justify-center gap-8 px-6 py-8 pt-10 md:py-0 xl:px-16 2xl:px-36 portrait:flex-col">
      <WaysToContactMe />

      <Separator className="landscape:hidden" />

      <ContactForm />
    </div>
  )
}
