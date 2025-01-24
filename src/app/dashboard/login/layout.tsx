import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

export default async function LoginLayout({
  children,
}: { children: ReactNode }) {
  const cookiesStore = await cookies()

  const isAuthenticated = cookiesStore.get('auth')
  if (isAuthenticated) redirect('/dashboard')

  return <>{children}</>
}
