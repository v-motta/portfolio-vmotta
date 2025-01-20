import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CertificateCard } from '../certificates/card'
import { Certificates } from './(sections)/certificates'
import { Main } from './(sections)/main'
import { TopProjects } from './(sections)/top-projects'

export default function HomePage() {
  return (
    <main className="px-6 xl:px-16 2xl:px-44">
      <Main />

      <Separator />

      <TopProjects />

      <Separator />

      <Certificates />
    </main>
  )
}
