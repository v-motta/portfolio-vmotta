'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ScrollDownIcon } from '../scroll-down-icon'

export function Main() {
  return (
    <section
      id="main"
      className="relative grid w-full grid-cols-1 grid-rows-1 gap-x-16 gap-y-16 py-10 md:grid-cols-5 md:portrait:py-28 lg:landscape:min-h-[calc(100vh-6rem)]"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: [-100, 20, 0], opacity: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.7,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
        className="order-last flex flex-col justify-center gap-6 text-center md:gap-8 lg:order-first lg:col-span-3 lg:text-start"
      >
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
      </motion.div>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: [0.7, 1.02, 1], opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
        className="content-center lg:col-span-2"
      >
        <Image
          src="/myself.webp"
          priority
          width={384}
          height={384}
          quality={100}
          alt="A picture of myself"
          className="mx-auto aspect-square w-56 rounded-full bg-[#275AAE]/80 object-cover shadow-[#275AAE] shadow-[0px_0px_20px] lg:w-auto"
        />
      </motion.div>

      <ScrollDownIcon />
    </section>
  )
}
