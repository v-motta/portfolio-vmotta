import ky from 'ky'

interface GetProjectByIdResponse {
  technologies: string[]
  title: string
  subtitle: string
  description: string
  github: string | null
  topProject: boolean
}

export async function getProjectById(projectSlug: string) {
  const result = await ky
    .get(`/api/projects/${projectSlug}`)
    .json<GetProjectByIdResponse>()

  return result
}
