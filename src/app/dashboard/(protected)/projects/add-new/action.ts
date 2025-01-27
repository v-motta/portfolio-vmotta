'use server'

import { createSlug } from '@/lib/create-slug'
import { prisma } from '@/lib/db-client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const projectFormSchema = z.object({
  title: z.string(),
  top_project: z.string().optional(),
  subtitle: z.string(),
  description: z.string(),
  frameworks: z.preprocess(val => {
    if (typeof val === 'string') {
      try {
        return JSON.parse(val)
      } catch {
        throw new Error('Invalid JSON format for frameworks')
      }
    }
    return val
  }, z.array(z.string())),
  github: z.string().nullable(),
})

export type ProjectFormSchema = z.infer<typeof projectFormSchema>

export async function addNewProjectForm(data: FormData) {
  const result = projectFormSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const {
    title,
    top_project: topProject,
    subtitle,
    description,
    frameworks,
    github,
  } = result.data

  const slug = createSlug(title)

  try {
    await prisma.project.upsert({
      create: {
        title,
        subtitle,
        description,
        slug,
        github,
        topProject: topProject === 'on',
        technologies: {
          connect: frameworks.map(id => ({ id })),
        },
      },
      update: {
        title,
        subtitle,
        description,
        github,
        topProject: topProject === 'on',
        technologies: {
          set: frameworks.map(id => ({ id })),
        },
      },
      where: { slug },
      include: { technologies: true },
    })

    revalidatePath('/dashboard/projects')
  } catch (error) {
    console.error(error)

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Your message was sent successfully!',
    errors: null,
  }
}

export async function editProjectForm(data: FormData) {
  const result = projectFormSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const {
    title,
    top_project: topProject,
    subtitle,
    description,
    frameworks,
    github,
  } = result.data

  try {
    await prisma.project.create({
      data: {
        title,
        subtitle,
        description,
        slug: createSlug(title),
        github,
        topProject: topProject === 'on',
        technologies: {
          connect: frameworks.map(id => ({ id })),
        },
      },
    })

    revalidatePath('/dashboard/projects')
  } catch (error) {
    console.error(error)

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Your message was sent successfully!',
    errors: null,
  }
}
