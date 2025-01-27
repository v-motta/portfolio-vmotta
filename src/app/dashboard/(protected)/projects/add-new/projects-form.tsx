'use client'
import { MultiSelect } from '@/components/multi-select'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useFormState } from '@/hooks/use-form-state'
import { getAllGitHubRepos } from '@/http/get-all-github-repos'
import { getAllTechnologies } from '@/http/get-all-technologies'
import { useQueries } from '@tanstack/react-query'
import { useState } from 'react'
import { addNewProjectForm } from './action'

export function ProjectsForm() {
  const [
    { data: technologies, isLoading: isLoadingTechnologies },
    { data: githubRepos, isLoading: isLoadingRepos },
  ] = useQueries({
    queries: [
      {
        queryKey: ['technologies'],
        queryFn: getAllTechnologies,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
      },
      {
        queryKey: ['github_repos'],
        queryFn: getAllGitHubRepos,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    ],
  })

  const [{ errors, success, message }, handleSubmit, isPending] = useFormState(
    async (data: FormData) => {
      data.append('frameworks', JSON.stringify(selectedFrameworks))

      return await addNewProjectForm(data)
    }
  )

  const frameworksList = technologies?.map(technology => {
    return {
      label: technology.name,
      value: technology.id,
    }
  })

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input id="title" type="text" name="title" placeholder="My portfolio" />
        {errors?.title && (
          <p className="font-medium text-red-500 text-xs">{errors.title[0]}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="top_project" name="top_project" />
        <Label htmlFor="top_project">Is it a top project?</Label>
      </div>

      <div className="space-y-1">
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          type="text"
          name="subtitle"
          placeholder="A portfolio for myself"
        />
        {errors?.subtitle && (
          <p className="font-medium text-red-500 text-xs">
            {errors.subtitle[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="A portfolio that contains..."
        />
        {errors?.description && (
          <p className="font-medium text-red-500 text-xs">
            {errors.description[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="frameworks">Frameworks</Label>
        <MultiSelect
          id="frameworks"
          name="frameworks"
          options={frameworksList || []}
          onValueChange={setSelectedFrameworks}
          defaultValue={selectedFrameworks}
          disabled={isLoadingTechnologies}
          placeholder="Select frameworks"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="github">GitHub repository</Label>
        <Select key={String(githubRepos)} name="github">
          <SelectTrigger disabled={isLoadingRepos}>
            <SelectValue placeholder="Select a repository" />
          </SelectTrigger>
          <SelectContent>
            {githubRepos?.map(({ id, name, html_url }) => (
              <SelectItem key={id} value={html_url}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors?.github && (
          <p className="font-medium text-red-500 text-xs">{errors.github[0]}</p>
        )}
      </div>

      <Button type="submit" className="mt-auto w-full">
        Add Project
      </Button>
    </form>
  )
}
