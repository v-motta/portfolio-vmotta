'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/use-form-state'
import {} from 'react'
import { addNewCertificateForm } from './action'

export function AddNewCertificateForm() {
  const [state, handleSubmit, isPending] = useFormState(addNewCertificateForm)

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 landscape:w-2/3"
      >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" type="text" placeholder="Clean Code" />
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            type="text"
            name="company"
            placeholder="Rocketseat"
          />
        </div>

        <div>
          <Label htmlFor="main_technology">Main Technology</Label>
          <Input
            id="main_technology"
            type="text"
            name="main_technology"
            placeholder="Javascript"
          />
        </div>

        <div>
          <Label htmlFor="issue_date">Issue date</Label>
          <Input
            id="issue_date"
            type="date"
            name="issue_date"
            placeholder="Javascript"
          />
        </div>

        <Button type="submit" className="mt-3 w-full" disabled={isPending}>
          Add certificate
        </Button>
      </form>
    </div>
  )
}
