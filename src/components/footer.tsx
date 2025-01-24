import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className={cn(
        'relative mb-16 flex items-center justify-between gap-3 px-6 py-2 md:mb-0',
        'border-zinc-400 border-t bg-zinc-200/90 dark:border-zinc-600 dark:bg-zinc-900/95',
        'md:h-16 md:flex-row md:px-8 lg:justify-center'
      )}
    >
      <p className="left-8 font-jet-brains-mono lg:absolute">
        <span className="font-sans text-zinc-600 dark:text-zinc-400">
          &copy;
        </span>
        2024 <span className="font-extrabold uppercase">Motta</span>
      </p>

      <Link
        href="/"
        className="font-extrabold font-jet-brains-mono text-xl transition-colors hover:text-zinc-500"
      >
        v-motta
      </Link>
    </footer>
  )
}
