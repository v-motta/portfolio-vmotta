import { Separator } from '@/components/ui/separator'
import { Home } from './home'
import { NewestProjects } from './newest-projects'

export default function HomePage() {
  return (
    <main className="px-8 pb-20">
      <Home />

      <Separator />

      <NewestProjects />
    </main>
  )
}
