'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useFormState } from '@/hooks/use-form-state'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { AlertTriangle, CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import { type ChangeEvent, useState } from 'react'
import { addNewCertificateForm } from './action'

export function AddNewCertificateForm() {
  const [{ errors, success, message }, handleSubmit, isPending] = useFormState(
    addNewCertificateForm,
    () => {
      setPreviewImage(null)
      setDate(undefined)
    }
  )

  const [date, setDate] = useState<Date>()
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  function handleOnChangeImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    const imageURL = URL.createObjectURL(event.target.files[0])
    setPreviewImage(imageURL)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Add new certificate failed!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <label
          htmlFor="image"
          className="aspect-video cursor-pointer content-center rounded-md border border-neutral-800 text-center text-neutral-400"
        >
          {previewImage ? (
            <Image
              src={previewImage}
              alt=""
              width={800}
              height={800}
              className="aspect-video w-full rounded-md object-cover"
            />
          ) : (
            <span>Upload an image</span>
          )}
        </label>
        {errors?.image && (
          <p className="-mt-5 font-medium text-red-500 text-xs">
            {errors.image[0]}
          </p>
        )}
        <input
          type="file"
          name="image"
          id="image"
          className="sr-only"
          onChange={handleOnChangeImage}
        />

        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" type="text" placeholder="Clean Code" />
          {errors?.title && (
            <p className="font-medium text-red-500 text-xs">
              {errors.title[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            type="text"
            name="company"
            placeholder="Rocketseat"
          />
          {errors?.company && (
            <p className="font-medium text-red-500 text-xs">
              {errors.company[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="main_technology">Main Technology</Label>
          <Input
            id="main_technology"
            type="text"
            name="main_technology"
            placeholder="Javascript"
          />
          {errors?.main_technology && (
            <p className="font-medium text-red-500 text-xs">
              {errors.main_technology[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="issue_date">Issue date</Label>
          <input
            name="issue_date"
            type="date"
            value={date?.toLocaleDateString('en-CA')}
            className="hidden"
          />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'flex w-full justify-start text-left font-normal',
                  !date && 'text-neutral-400'
                )}
              >
                <CalendarIcon />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors?.issue_date && (
            <p className="font-medium text-red-500 text-xs">
              {errors.issue_date[0]}
            </p>
          )}
        </div>

        <Button type="submit" className="mt-5 w-full" isPending={isPending}>
          Add certificate
        </Button>
      </form>
    </>
  )
}
