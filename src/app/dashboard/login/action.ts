'use server'

import { prisma } from '@/lib/db-client'
import { compare } from 'bcryptjs'
import { cookies } from 'next/headers'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().min(1, { message: 'E-mail is required.' }).email(),
  password: z.string().min(1, { message: 'Password is required.' }),
})

export async function loginForm(data: FormData) {
  const result = loginFormSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const { email, password } = result.data

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        tokenId: true,
        password: true,
      },
    })

    if (!user) {
      return {
        success: false,
        message: 'Invalid e-mail and/or password.',
        errors: null,
      }
    }

    const checkPassword = compare(password, user.password)
    if (!checkPassword) {
      return {
        success: false,
        message: 'Invalid e-mail and/or password.',
        errors: null,
      }
    }

    const cookiesStore = await cookies()
    cookiesStore.set('auth', user.tokenId)
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
