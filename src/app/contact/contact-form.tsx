'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormState } from '@/hooks/use-form-state'
import { sendContactForm } from './action'

export function ContactForm() {
  const [state, handleSubmit, isPending] = useFormState(sendContactForm)

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-5 sm:w-3/5 lg:w-2/5">
      <h1 className="section-title">Contact me</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 landscape:w-2/3"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Vinicius Motta"
          />
        </div>

        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="viniciusmotta0806@gmail.com"
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message..."
          />
        </div>

        <Button type="submit" className="mt-3 w-full" isPending={isPending}>
          Send message
        </Button>
      </form>
    </div>
  )
}
