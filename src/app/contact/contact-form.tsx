'use client'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormState } from '@/hooks/use-form-state'
import { AlertTriangle } from 'lucide-react'
import { sendContactForm } from './action'

export function ContactForm() {
  const [{ errors, message, success }, handleSubmit, isPending] =
    useFormState(sendContactForm)

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-5 sm:w-3/5 lg:w-2/5">
      <h1 className="section-title">Contact me</h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 landscape:w-2/3"
      >
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Send message failed!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Vinicius Motta"
          />
          {errors?.name && (
            <p className="font-medium text-red-500 text-xs">{errors.name[0]}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="viniciusmotta0806@gmail.com"
          />
          {errors?.email && (
            <p className="font-medium text-red-500 text-xs">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message..."
          />
          {errors?.message && (
            <p className="font-medium text-red-500 text-xs">
              {errors.message[0]}
            </p>
          )}
        </div>

        <Button type="submit" className="mt-3 w-full" isPending={isPending}>
          Send message
        </Button>
      </form>
    </div>
  )
}
