import Image from 'next/image'
import { ScrollDownIcon } from '../scroll-down-icon'

export function Main() {
  return (
    <section
      id="main"
      className="relative flex w-full flex-col-reverse items-center justify-center gap-16 py-10 lg:min-h-[calc(100vh-6rem)] lg:flex-row lg:justify-between"
    >
      <div className="flex flex-col justify-center gap-6 text-center md:gap-8 lg:text-start">
        <h1 className="flex flex-col gap-1 font-bold font-jet-brains-mono text-2xl md:gap-2 md:text-3xl">
          Hi, I am
          <span className="text-3xl xl:text-4xl 2xl:text-5xl">
            Vinicius Motta
          </span>
        </h1>

        <h2 className="concat-variable font-bold text-2xl 2xl:text-3xl">
          Full-Stack Developer
        </h2>

        <p className="text-balance text-zinc-700 dark:text-zinc-400">
          Currently graduating a degree in Computer Science, with professional
          experience in TypeScript, React, Angular, Bootstrap, Go, Flutter, and
          DevOps.
        </p>
      </div>

      <div className="content-center items-center rounded-full bg-[#275AAE]">
        <Image
          src="/image.png"
          priority
          width={384}
          height={384}
          quality={100}
          alt="A picture of myself"
          className="aspect-square w-56 rounded-full object-cover shadow-[#275AAE] shadow-[0px_0px_20px] lg:w-auto"
        />
      </div>

      <ScrollDownIcon />
    </section>
  )
}
