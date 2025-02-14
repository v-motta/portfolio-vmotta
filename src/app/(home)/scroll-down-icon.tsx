'use client'

import { ChevronDown, Mouse } from 'lucide-react'
import { motion } from 'motion/react'

export function ScrollDownIcon() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1,
        ease: 'easeInOut',
      }}
      viewport={{ once: true }}
      className="hidden lg:block"
    >
      <Mouse className="-translate-x-1/2 absolute bottom-16 left-1/2 block size-9" />
      <ChevronDown
        className="absolute bottom-8 left-1/2 block size-7 animate-bounce text-bracket"
        style={{ translate: '-50%' }}
      />
      <ChevronDown
        className="absolute bottom-6 left-1/2 block size-7 translate-x-1/2 animate-bounce text-bracket"
        style={{ translate: '-50%' }}
      />
    </motion.div>
  )
}
