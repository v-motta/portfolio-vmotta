import { cn } from '@/lib/utils'
import { Headset, ScrollText, SquareTerminal, UserRound } from 'lucide-react'
import Link from 'next/link'
import { GitHubIcon } from './icons/github'
import { LinkedInIcon } from './icons/linkedin'
import { WhatsAppIcon } from './icons/whatsapp'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export async function Header() {
  const links = [
    {
      href: '/about-me',
      title: 'About me',
      icon: UserRound,
    },
    {
      href: '/projects',
      title: 'Projects',
      icon: SquareTerminal,
    },
    {
      href: '/certificates',
      title: 'Certificates',
      icon: ScrollText,
    },
    {
      href: '/contact',
      title: 'Contact',
      icon: Headset,
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full md:h-24">
        <nav
          className={cn(
            'flex h-full flex-col items-center justify-between gap-3 py-2 md:gap-24',
            'border-zinc-400 border-b bg-zinc-200/90 dark:border-zinc-600 dark:bg-zinc-900/95',
            'px-6 md:flex-row xl:px-16 2xl:px-44'
          )}
        >
          <Link
            href="/"
            className="text-nowrap font-extrabold font-jet-brains-mono text-2xl transition-colors hover:text-zinc-500"
          >
            v-motta
          </Link>

          <div className="mb-1.5 hidden flex-wrap justify-center gap-x-8 gap-y-4 font-jet-brains-mono font-medium md:mb-0 md:flex portrait:px-16 md:portrait:px-0">
            {links.map(({ href, title }) => (
              <Link
                key={title}
                href={href}
                className="text-nowrap hover:underline hover:underline-offset-8"
              >
                {title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/v-motta"
                aria-label="Discover my GitHub and my project codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/viniciusmottadacosta/"
                aria-label="Check out my profile on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://wa.me/5511987977427"
                aria-label="Contact me via Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed bottom-0 z-10 flex h-16 w-full items-center justify-evenly',
          'md:hidden',
          'border-zinc-400 border-t bg-zinc-200/90 dark:border-zinc-600 dark:bg-zinc-900/95'
        )}
      >
        {links.map(({ href, title, icon: Icon }) => (
          <Link key={title} href={href} className="text-nowrap text-sm">
            <div className="flex flex-col items-center justify-center gap-1 font-semibold">
              <Icon />
              <span>{title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
