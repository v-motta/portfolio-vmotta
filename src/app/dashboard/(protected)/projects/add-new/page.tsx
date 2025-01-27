'use client'
import { MultiSelect } from '@/components/multi-select'
import { Input } from '@/components/ui/input'
import { getAllTechnologies } from '@/http/get-all-technologies'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function AddNewProjectPage() {
  const { data: technologies, isLoading } = useQuery({
    queryKey: ['technologies'],
    queryFn: getAllTechnologies,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const frameworksList = technologies?.map(technology => {
    return { value: technology.id, label: technology.name }
  })

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])

  return (
    <div>
      <div className="w-1/4 space-y-4">
        <MultiSelect
          options={frameworksList || []}
          onValueChange={setSelectedFrameworks}
          defaultValue={selectedFrameworks}
          disabled={isLoading}
          placeholder="Select frameworks"
          animation={2}
          maxCount={3}
        />
        <Input placeholder="Qualquer merda" />
      </div>

      <pre>{JSON.stringify(frameworksList, null, 2)}</pre>
    </div>
  )
}
