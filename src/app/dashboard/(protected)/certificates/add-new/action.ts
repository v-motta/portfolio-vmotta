'use server'
import { createSlug } from '@/lib/create-slug'
import { prisma } from '@/lib/db-client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const addNewCertificateFormSchema = z.object({
  title: z.string(),
  company: z.string(),
  main_technology: z.string(),
  issue_date: z.string(),
})

export async function addNewCertificateForm(data: FormData) {
  const result = addNewCertificateFormSchema.safeParse(Object.fromEntries(data))

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
    company,
    main_technology: mainTechnology,
    issue_date: issueDate,
  } = result.data

  try {
    await prisma.certificate.create({
      data: {
        title,
        slug: createSlug(title),
        company,
        mainTechnology,
        issueDate: new Date(issueDate).toISOString(),
      },
    })

    revalidatePath('/dashboard/certificates')
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
