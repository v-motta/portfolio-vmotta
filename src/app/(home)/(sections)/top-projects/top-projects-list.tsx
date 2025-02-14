'use client'

import { ProjectCard } from '@/app/projects/card'
import { motion } from 'motion/react'

interface TopProjectsProps {
  topThreeProjects: {
    title: string
    id: string
    slug: string
    createdAt: Date
    subtitle: string
    description: string
    github: string | null
    imagesUrl: string[]
    topProject: boolean
  }[]
}

export function TopProjectsList({ topThreeProjects }: TopProjectsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {topThreeProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: [0.9, 1.02, 1], opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4 * index,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}
