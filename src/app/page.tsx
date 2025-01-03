import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { WhatsAppIcon } from '@/components/icons/whatsapp'
import { Separator } from '@/components/ui/separator'
import { ChevronDown, Mouse } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-8">
      <section
        id="home"
        className="flex min-h-screen w-full justify-center shadow-zinc-50"
      >
        <div className="flex max-w-5xl flex-1 flex-col justify-center gap-8 px-20">
          <div>
            <h1 className="font-bold font-jet-brains-mono text-5xl">
              Hi, I am <span className="concat-variable">Vinicius Motta</span>
            </h1>
            <h2 className="font-jet-brains-mono font-semibold text-3xl">
              Full-Stack Developer
            </h2>
          </div>

          <p className="text-balance text-zinc-400">
            Currently graduating a degree in Computer Science, with professional
            experience in TypeScript, React, Angular, Bootstrap, Go, Flutter,
            and DevOps.
          </p>

          <div className="flex gap-6">
            <Link
              href="https://github.com/v-motta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discover my GitHub and my project codes"
              className="group"
            >
              <GitHubIcon className="size-7 text-zinc-200 transition-colors group-hover:fill-zinc-500" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/viniciusmottadacosta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out my profile on LinkedIn"
              className="group"
            >
              <LinkedInIcon className="size-7 fill-zinc-200 transition-colors group-hover:fill-zinc-500" />
            </Link>

            <Link
              href="https://wa.me/5511987977427"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact me via WhatsApp"
              className="group"
            >
              <WhatsAppIcon className="size-7 fill-zinc-200 transition-colors group-hover:fill-zinc-500" />
            </Link>
          </div>
        </div>

        <div className="content-center items-center">
          <Image
            src="/myself.webp"
            width={384}
            height={384}
            quality={100}
            priority
            alt="A picture of myself"
            className="rounded-xl shadow-[-20px_-20px] shadow-blue-800"
          />
        </div>

        <Mouse className="-translate-x-1/2 absolute bottom-16 left-1/2 hidden size-9 text-white lg:block" />
        <ChevronDown
          className="absolute bottom-8 left-1/2 hidden size-7 animate-bounce text-bracket lg:block"
          style={{ translate: '-50%' }}
        />
        <ChevronDown
          className="absolute bottom-6 left-1/2 hidden size-7 translate-x-1/2 animate-bounce text-bracket lg:block"
          style={{ translate: '-50%' }}
        />
      </section>

      <Separator />

      <section id="projects" className="py-8">
        <h1 className="concat-variable text-center font-bold text-3xl">
          Projects
        </h1>
      </section>
    </main>
  )
}
