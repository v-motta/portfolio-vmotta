import ky from 'ky'

interface GetAllTechnologies {
  name: string
  id: string
}

export async function getAllTechnologies() {
  const result = await ky
    .get('/api/technologies/all')
    .json<GetAllTechnologies[]>()

  return result
}
