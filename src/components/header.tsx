import Link from 'next/link'
import { GitHubIcon } from './icons/github'
import { LinkedInIcon } from './icons/linkedin'
import { WhatsAppIcon } from './icons/whatsapp'

export async function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex flex-col items-center justify-between gap-3 border-zinc-500 border-b bg-zinc-950 bg-opacity-95 pt-2 pb-3 md:h-24 md:flex-row md:border-none md:px-8 md:py-8">
        <Link
          href="/"
          className="font-extrabold font-jet-brains-mono text-2xl text-white hover:text-zinc-200"
        >
          v-motta
        </Link>

        <div className="mb-1.5 space-x-3 font-jet-brains-mono md:mb-0">
          <Link
            href="/projects"
            className="hover:underline hover:underline-offset-8"
          >
            Projects
          </Link>
          <Link
            href="/certificates"
            className="hover:underline hover:underline-offset-8"
          >
            Certificates
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:underline-offset-8"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/v-motta"
            className="group"
            aria-label="Discover my GitHub and my project codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="size-7 text-zinc-200 transition-colors group-hover:fill-zinc-500" />
          </Link>
          <Link
            href="https://linkedin.com/in/viniciusmottadacosta/"
            className="group"
            aria-label="Check out my profile on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="size-7 fill-zinc-200 transition-colors group-hover:fill-zinc-500" />
          </Link>
          <Link
            href="https://wa.me/5511987977427"
            className="group"
            aria-label="Contact me via Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="size-7 fill-zinc-200 transition-colors group-hover:fill-zinc-500" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
