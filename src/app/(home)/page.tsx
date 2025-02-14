import { Separator } from '@/components/ui/separator'
import { ContactForm } from '../contact/contact-form'
import { Certificates } from './(sections)/certificates/certificates'
import { Main } from './(sections)/main'
import { Technologies } from './(sections)/technologies'
import { TopProjects } from './(sections)/top-projects/top-projects'

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

      <Separator />

      <div className="py-6 *:mx-auto md:py-16">
        <ContactForm className="w-full sm:w-3/5 lg:w-2/5" />
      </div>
    </main>
  )
}
