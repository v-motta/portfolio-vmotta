import { prisma } from '@/lib/db-client'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const take = Number(searchParams.get('take'))

  const certificates = await prisma.certificate.findMany({
    orderBy: { issueDate: 'desc' },
    take: take || undefined,
  })

  return NextResponse.json(certificates)
}
