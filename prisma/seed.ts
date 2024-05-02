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
  {
    name: 'Iniciantes em feltro',
    slug: kebabCase('Iniciantes em feltro'),
    description: 'Aulas para iniciantes em feltro.',
    image: 'https://media.graphassets.com/dsoPcycSP23gtJQMIK4i',
    groups: {
      create: [
        {
          name: 'Aulas',
          lessons: {
            create: [
              {
                name: 'Riscar e cortar o feltro',
                slug: kebabCase('Riscar e cortar o feltro'),
                video: 'https://youtu.be/PCTICFNt2Os',
              },
              {
                name: 'Dica para cortar peças pequenas',
                slug: kebabCase('Dica para cortar peças pequenas'),
                video: 'https://youtu.be/XVXj3iREBUs',
              },
              {
                name: 'Dica para cortar peças pequenas 2',
                slug: kebabCase('Dica para cortar peças pequenas 2'),
                video: 'https://youtu.be/cuCF3_tJGGM',
              },
              {
                name: 'Como cortar moldes espelhados',
                slug: kebabCase('Como cortar moldes espelhados'),
                video: 'https://youtu.be/K2w_kYcf7Wo',
              },
              {
                name: 'Como usar os gabaritos',
                slug: kebabCase('Como usar os gabaritos'),
                video: 'https://youtu.be/r-Nw0KfdG-A',
              },
              {
                name: 'Como fazer ponto atrás',
                slug: kebabCase('Como fazer ponto atrás'),
                video: 'https://youtu.be/tlHJ0vrpcp8',
              },
              {
                name: 'Como fazer ponto caseado',
                slug: kebabCase('Como fazer ponto caseado'),
                video: 'https://youtu.be/H7ZUclfa7rs',
              },
              {
                name: 'Como fazer ponto palito',
                slug: kebabCase('Como fazer ponto palito'),
                video: 'https://youtu.be/CDUQbqA47-0',
              },
              {
                name: 'Como fazer nó francês',
                slug: kebabCase('Como fazer nó francês'),
                video: 'https://youtu.be/U8N3X5tjRE8',
              },
            ],
          },
        },
      ],
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
