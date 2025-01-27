'use server'
import { createSlug } from '@/lib/create-slug'
import { prisma } from '@/lib/db-client'
import { minio } from '@/lib/minio-client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const addNewCertificateFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  company: z.string().min(1, { message: 'Company is required' }),
  hour_duration: z.number().min(1, { message: 'Hour duration is required' }),
  main_technology: z
    .string()
    .min(1, { message: 'Main technology is required' }),
  issue_date: z.string().min(1, { message: 'Issue date is required' }),
  image: z.any().refine(value => value.size > 0, {
    message: 'Image is required',
  }),
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
    hour_duration: hourDuration,
    main_technology: mainTechnology,
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

    await minio.putObject(
      bucket,
      destinationObject,
      sourceFile,
      undefined,
      metaData
    )

    const minioEndpoint = process.env.MINIO_ENDPOINT
    const imageUrl = `https://${minioEndpoint}/${bucket}/${destinationObject}`

    await prisma.certificate.create({
      data: {
        title,
        slug: createSlug(title),
        company,
        hourDuration,
        mainTechnology: { connect: { id: mainTechnology } },
        imageUrl,
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
