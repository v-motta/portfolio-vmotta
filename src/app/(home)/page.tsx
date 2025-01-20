import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CertificateCard } from '../certificates/card'
import { Certificates } from './(sections)/certificates'
import { Home } from './(sections)/home'
import { TopProjects } from './(sections)/top-projects'

export default function HomePage() {
  return (
    <main className="px-16 pb-20 2xl:px-44">
      <Home />

      <Separator />

      <TopProjects />

      <Separator />

      <Certificates />


    </main>
  )
}
