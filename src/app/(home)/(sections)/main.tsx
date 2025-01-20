import Image from 'next/image'
import { ScrollDownIcon } from '../scroll-down-icon'

export function Main() {
  return (
    <section
      id="main"
      className="relative flex w-full flex-col-reverse items-center justify-center gap-16 py-10 lg:min-h-[calc(100vh-6rem)] lg:flex-row lg:justify-between"
    >
      <div className="flex flex-col justify-center gap-8 text-center">
        <div>
          <h1 className="font-bold font-jet-brains-mono text-3xl xl:text-4xl 2xl:text-5xl">
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
          className="w-56 rounded-xl shadow-[-10px_-10px] shadow-blue-800 lg:w-auto"
        />
      </div>

      <ScrollDownIcon />
    </section>
  )
}
