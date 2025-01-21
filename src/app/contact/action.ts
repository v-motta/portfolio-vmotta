import { sendEmail } from '@/http/send-email'
import { HTTPError } from 'ky'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

export async function sendContactForm(data: FormData) {
  const result = contactFormSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const { name, email, message } = result.data

  try {
    await sendEmail({ name, email, message })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()

      return { success: false, message, errors: null }
    }

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
