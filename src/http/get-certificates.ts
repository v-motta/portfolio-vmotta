import ky from 'ky'

interface GetCertificates {
  id: string
  title: string
  imageUrl: string
  company: string
  issueDate: Date
  slug: string
  hourDuration: number
  createdAt: Date
  technologyId: string
}

export async function getCertificates(take?: number) {
  const result = await ky
    .get(`/api/certificates?take=${take}`)
    .json<GetCertificates[]>()

  return result
}
