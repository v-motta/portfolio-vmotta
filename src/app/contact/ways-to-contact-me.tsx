import { LinkedInIcon, WhatsAppIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Check, Copy, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function WaysToContactMe() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [numberCopied, setNumberCopied] = useState(false)

  function handleCopyContact(contact: 'email' | 'number') {
    if (contact === 'email') {
      navigator.clipboard.writeText('viniciusmottadacosta@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    }

    if (contact === 'number') {
      navigator.clipboard.writeText('5511987977427')
      setNumberCopied(true)
      setTimeout(() => setNumberCopied(false), 2000)
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 portrait:md:w-auto">
      <h1 className="section-title">Ways to contact me</h1>

      <div className="flex w-full flex-col gap-5 md:px-16 lg:px-0 xl:px-16 2xl:px-36">
        <div className="flex w-full flex-col gap-4 *:basis-full md:flex-row">
          <Button asChild>
            <Link
              href="https://wa.me/5511987977427"
              aria-label="Contact me via Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Whatsapp
            </Link>
          </Button>

          <Button asChild>
            <Link
              href="https://linkedin.com/in/viniciusmottadacosta/"
              aria-label="Contact me via Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> Linkedin
            </Link>
          </Button>

          <Button asChild>
            <Link
              href="mailto:viniciusmotta0806@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail /> E-mail
            </Link>
          </Button>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="text-zinc-600 dark:text-zinc-300">
              viniciusmotta0806@gmail.com
            </span>
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="[&_svg]:size-4"
                onClick={() => handleCopyContact('email')}
              >
                {emailCopied ? (
                  <Check className="text-emerald-500" />
                ) : (
                  <Copy />
                )}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="text-zinc-600 dark:text-zinc-300">
              +55 11 98797-7427
            </span>
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="[&_svg]:size-4"
                onClick={() => handleCopyContact('number')}
              >
                {numberCopied ? (
                  <Check className="text-emerald-500" />
                ) : (
                  <Copy />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
