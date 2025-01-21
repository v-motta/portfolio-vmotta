import { Separator } from '@/components/ui/separator'
import { Certificates } from './(sections)/certificates'
import { Main } from './(sections)/main'
import { Technologies } from './(sections)/technologies'
import { TopProjects } from './(sections)/top-projects'

export default function HomePage() {
  return (
    <main className="px-6 xl:px-16 2xl:px-44">
      <Main />

      <Separator />

      <TopProjects />

      <Separator />

      <Certificates />

      <Separator />

      <Technologies />
    </main>
  )
}
