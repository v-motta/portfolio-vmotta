import { prisma } from '@/lib/db-client'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  const certificate = await prisma.certificate.findUnique({
    select: {
      title: true,
      slug: true,
      hourDuration: true,
      company: true,
      imageUrl: true,
      issueDate: true,
      mainTechnology: true,
    },
    where: { slug },
  })

  if (!certificate) {
    return Response.json(
      { message: 'Certificate does not exist' },
      { status: 404 }
    )
  }

  const simplifiedCertificate = {
    ...certificate,
    mainTechnology: certificate.mainTechnology.id,
  }

  console.log(simplifiedCertificate)

  return Response.json(simplifiedCertificate)
}
