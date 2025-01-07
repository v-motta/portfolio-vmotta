import Image from 'next/image'
import { ScrollDownIcon } from './scroll-down-icon'

export function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] w-full px-44"
    >
      <div className="flex flex-col justify-center gap-8">
        <div>
          <h1 className="font-bold font-jet-brains-mono text-3xl 2xl:text-5xl">
            Hi, I am <span className="concat-variable">Vinicius Motta</span>
          </h1>
          <h2 className="font-jet-brains-mono font-semibold text-xl 2xl:text-3xl">
            Full-Stack Developer
          </h2>
        </div>

        <p className="text-balance text-zinc-400">
          Currently graduating a degree in Computer Science, with professional
          experience in TypeScript, React, Angular, Bootstrap, Go, Flutter, and
          DevOps.
        </p>
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

      <ScrollDownIcon />
    </section>
  )
}
