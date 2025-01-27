import { prisma } from '@/lib/db-client'
import { cookies } from 'next/headers'

export async function isAuthenticated(): Promise<boolean> {
  const cookiesStore = await cookies()

  const token = cookiesStore.get('auth')
  if (!token) return false

  const user = await prisma.user.findUnique({
    where: { tokenId: token.value },
  })
  if (!user) return false

  return true
}
