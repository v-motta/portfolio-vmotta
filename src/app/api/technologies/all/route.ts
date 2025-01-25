import { prisma } from '@/lib/db-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const technologies = await prisma.technology.findMany({
    orderBy: { name: 'asc' },
  })

  return NextResponse.json(technologies)
}
