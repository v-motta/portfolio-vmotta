'use server'

import { prisma } from '@/lib/db-client'
import { revalidatePath } from 'next/cache'

export async function deleteProjectAction(projectId: string) {
  await prisma.project.delete({
    where: { id: projectId },
  })

  revalidatePath('/dashboard/projects')
}
