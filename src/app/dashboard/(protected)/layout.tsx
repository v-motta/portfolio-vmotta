import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookiesStore = await cookies()

  const isAuthenticated = cookiesStore.get('auth')
  if (!isAuthenticated) redirect('/dashboard/login')

  return <>{children}</>
}
