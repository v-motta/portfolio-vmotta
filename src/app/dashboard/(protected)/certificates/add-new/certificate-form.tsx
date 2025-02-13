'use client'

import { iconsNode } from '@/components/icons/icon-node'
import { MultiSelect } from '@/components/multi-select'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormState } from '@/hooks/use-form-state'
import { getAllTechnologies } from '@/http/get-all-technologies'
import { getCleanText } from '@/lib/clean-text'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { AlertTriangle, CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import { type ChangeEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { type CertificateFormSchema, certificateAction } from './action'

interface CertificateFormProps {
  isEditing?: boolean
  initialData?: CertificateFormSchema
}

export function CertificateForm({
  isEditing = false,
  initialData,
}: CertificateFormProps) {
  const [{ errors, success, message }, handleSubmit, isPending] = useFormState(
    async (data: FormData) => {
      date && data.append('issue_date', date?.toLocaleDateString('en-CA'))

      data.append('technologies', JSON.stringify(selectedTechnologies))

      return await certificateAction(data, isEditing)
    },
    () => {
      setPreviewImage(null)
      setDate(undefined)
    }
  )

  const { data: technologies, isLoading } = useQuery({
    queryKey: ['technologies'],
    queryFn: getAllTechnologies,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const [date, setDate] = useState<Date | undefined>(
    initialData?.issue_date ? new Date(initialData.issue_date) : undefined
  )
  const [previewImage, setPreviewImage] = useState<string | null>(
    initialData?.image || null
  )

  function handleOnChangeImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    const imageURL = URL.createObjectURL(event.target.files[0])
    setPreviewImage(imageURL)
  }

  const technologiesList = technologies?.map(technology => {
    return {
      label: technology.name,
      value: technology.id,
    }
  })

  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    initialData?.technologies || []
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Add new certificate failed!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <label
        htmlFor="image"
        className={twMerge(
          'aspect-video cursor-pointer content-center rounded-md border border-zinc-400 text-center text-zinc-600 dark:border-zinc-700 dark:text-zinc-400',
          isEditing && 'cursor-not-allowed'
        )}
      >
        {(isEditing && initialData?.image) || previewImage ? (
          <Image
            src={previewImage || initialData?.image}
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
        disabled={isEditing}
      />

      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Clean Code"
          defaultValue={initialData?.title}
          disabled={isEditing}
        />
        {errors?.title && (
          <p className="font-medium text-red-500 text-xs">{errors.title[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          type="text"
          name="company"
          placeholder="Rocketseat"
          defaultValue={initialData?.company}
        />
        {errors?.company && (
          <p className="font-medium text-red-500 text-xs">
            {errors.company[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="hour_duration">Hour duration</Label>
        <Input
          id="hour_duration"
          type="number"
          name="hour_duration"
          placeholder="8"
          defaultValue={initialData?.hour_duration}
        />
        {errors?.hour_duration && (
          <p className="font-medium text-red-500 text-xs">
            {errors.hour_duration[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="technologies">Used technologies</Label>
        <MultiSelect
          id="technologies"
          name="technologies"
          options={technologiesList || []}
          onValueChange={setSelectedTechnologies}
          defaultValue={selectedTechnologies}
          disabled={isLoading}
          placeholder="Select technologies"
        />
        {errors?.technologies && (
          <p className="font-medium text-red-500 text-xs">
            {errors.technologies[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="issue_date">Issue date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'flex w-full justify-start text-left font-normal',
                !date && 'text-zinc-600 dark:text-zinc-400'
              )}
            >
              <CalendarIcon />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 text-zinc-600 dark:text-zinc-400">
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

      <Button type="submit" className="mt-auto w-full" isPending={isPending}>
        {isEditing ? 'Update certificate' : 'Add certificate'}
      </Button>
    </form>
  )
}
