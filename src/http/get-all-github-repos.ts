import ky from 'ky'

export interface GitHubReposResponse {
  id: number
  name: string
  html_url: string
}

export async function getAllGitHubRepos() {
  const result = await ky
    .get('https://api.github.com/users/v-motta/repos')
    .json<GitHubReposResponse[]>()

  return result
}
