import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center gap-3 border-zinc-600 border-t bg-zinc-950 bg-opacity-90 pt-2 pb-3 md:h-24 md:flex-row md:px-8 md:py-8">
      <p className="absolute left-8 font-jet-brains-mono text-zinc-400">
        <span className="font-sans">&copy;</span>
        2024 <span className="font-extrabold text-white uppercase">Motta</span>
      </p>

      <Link
        href="/"
        className="font-extrabold font-jet-brains-mono text-xl text-zinc-200 transition-colors hover:text-zinc-500"
      >
        v-motta
      </Link>
    </footer>
  )
}
