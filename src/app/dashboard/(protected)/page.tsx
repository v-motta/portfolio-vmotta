import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard page</h1>

      <Link href="dashboard/certificates">Certificates</Link>
    </div>
  )
}
