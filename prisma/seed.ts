import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alexandre',
    email: 'apbetioli@gmail.com',
    isAdmin: true,
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const data of userData) {
    const user = await prisma.user.upsert({
      create: data,
      update: data,
      where: { email: data.email },
    })
    console.log(`Created/Updated user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
