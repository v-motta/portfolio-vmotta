import ky from 'ky'

interface GetCertificateBySlugResponse {
  technologies: string[]
  title: string
  slug: string
  company: string
  issueDate: string
  imageUrl: string
  hourDuration: number
}

export async function getCertificateBySlug(certificateSlug: string) {
  const result = await ky
    .get(`/api/certificates/${certificateSlug}`)
    .json<GetCertificateBySlugResponse>()

  return result
}
