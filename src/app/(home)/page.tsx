import { Separator } from '@/components/ui/separator'
import { ContactForm } from '../contact/contact-form'
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

      <Separator />

      <div className="py-8 *:mx-auto md:py-16">
        <ContactForm />
      </div>
    </main>
  )
}
