'use client'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from './contact-form'
import { WaysToContactMe } from './ways-to-contact-me'

export default function ContactPage() {
  return (
    <div className="grid min-h-[calc(100vh-6rem-4rem)] grid-cols-2 gap-8 px-6 py-8 pt-10 md:py-0 xl:px-16 2xl:px-36 portrait:grid-cols-1 portrait:grid-rows-[min-content_min-content_min-content]">
      <WaysToContactMe />

      <Separator className="landscape:hidden" />

      <ContactForm className="mx-auto landscape:w-2/3" />
    </div>
  )
}
