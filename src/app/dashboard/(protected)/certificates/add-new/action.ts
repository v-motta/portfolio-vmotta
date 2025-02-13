'use server'
import { createSlug } from '@/lib/create-slug'
import { prisma } from '@/lib/db-client'
import { minio } from '@/lib/minio-client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const certificateFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  company: z.string().min(1, { message: 'Company is required' }),
  hour_duration: z.coerce
    .number()
    .min(1, { message: 'Hour duration is required' }),
  technologies: z.preprocess(val => {
    if (typeof val === 'string') {
      try {
        return JSON.parse(val)
      } catch {
        throw new Error('Invalid JSON format for technologies')
      }
    }
    return val
  }, z.array(z.string())),
  issue_date: z.string().min(1, { message: 'Issue date is required' }),
  image: z.any(),
})

export type CertificateFormSchema = z.infer<typeof certificateFormSchema>

export async function certificateAction(data: FormData, isEditing: boolean) {
  const result = certificateFormSchema.safeParse(Object.fromEntries(data))

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
    hour_duration: hourDuration,
    technologies,
    issue_date: issueDate,
    image,
  } = result.data

  try {
    const sourceFile = Buffer.from(await image.arrayBuffer())
    const fileType = image.type
    const bucket = process.env.MINIO_BUCKET!
    const destinationObject = createSlug(title)

    const metaData = {
      'Content-Type': fileType,
    }

    if (!isEditing) {
      await minio.putObject(
        bucket,
        destinationObject,
        sourceFile,
        undefined,
        metaData
      )
    }

    const minioEndpoint = process.env.MINIO_ENDPOINT
    const imageUrl = `https://${minioEndpoint}/${bucket}/${destinationObject}`

    await prisma.certificate.upsert({
      where: { slug: createSlug(title) },
      create: {
        title,
        slug: createSlug(title),
        company,
        hourDuration,
        technologies: { connect: technologies.map(id => ({ id })) },
        imageUrl,
        issueDate: new Date(issueDate).toISOString(),
      },
      update: {
        company,
        hourDuration,
        technologies: { connect: technologies.map(id => ({ id })) },
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
