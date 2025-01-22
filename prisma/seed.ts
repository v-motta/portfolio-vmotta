import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  const passwordHash = await hash('8A8lk0QT7<{<', 10)

  await prisma.user.create({
    data: {
      name: 'Vinicius Motta',
      email: 'viniciusmotta0806@gmail.com',
      password: passwordHash,
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
})
