import { isAuthenticated } from '@/auth/is-authenticated'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

export default async function LoginLayout({
  children,
}: { children: ReactNode }) {
  const isLoggedIn = await isAuthenticated()
  if (isLoggedIn) redirect('/dashboard')

  return <>{children}</>
}
