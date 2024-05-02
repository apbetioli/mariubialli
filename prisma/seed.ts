import { Prisma, PrismaClient } from '@prisma/client'
import { kebabCase } from 'lodash'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alexandre',
    email: 'apbetioli@gmail.com',
    isAdmin: true,
  },
]

const courseData: Prisma.CourseCreateInput[] = [
  {
    name: 'Quadro - Dia das Mães',
    slug: kebabCase('Quadro - Dia das Mães'),
    description:
      'Aprenda a fazer um quadro em feltro para decorar seu ateliê, presentear sua mãe ou se presentear.',
    image: 'https://media.graphassets.com/13BiFOg7REOVUW1WkKMG',
    groups: {
      create: [
        {
          name: 'Aulas',
          lessons: {
            create: [
              {
                name: 'Aula Quadro Dia das Mães',
                slug: kebabCase('Aula Quadro Dia das Mães'),
                video: 'https://youtu.be/jX0vFKPB4SU',
              },
            ],
          },
        },
      ],
    },
    asset: {
      create: {
        name: 'Apostila de moldes',
        description:
          'Apostila de moldes digital contendo todos os elementos necessários para criar o quadro em feltro com o tema dia das mães.',
        image:
          'https://mariubialli.s3.amazonaws.com/Imagens/asset-quadro-dia-das-maes.jpg',
        price: 0,
        filename: 'Mari Ubialli - Álbum Dia das Mães.pdf',
      },
    },
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

  for (const data of courseData) {
    const course = await prisma.course.upsert({
      create: data,
      update: data,
      where: { slug: data.slug },
    })
    console.log(`Created/Updated course with id: ${course.id}`)
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
