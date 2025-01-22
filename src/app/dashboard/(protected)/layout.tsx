import { Slash } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookiesStore = await cookies()

  const isAuthenticated = cookiesStore.get('auth')
  if (!isAuthenticated) redirect('/dashboard/login')

  return (
    <div className="px-6 py-4 xl:px-16 2xl:px-36">
      <div className="flex gap-4 font-jet-brains-mono">
        <Link href="/dashboard">Dashboard</Link>

        <Slash />

        <Link href="/dashboard/projects">Projects</Link>

        <Slash />

        <Link href="/dashboard/certificates">Certificates</Link>
      </div>

      <div className="pt-10">{children}</div>
    </div>
  )
}
