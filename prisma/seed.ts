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
    name: 'Enfeite de porta e Árvore de parede de Natal',
    slug: kebabCase('Árvore de parede de Natal'),
    description:
      'Vou te ensinar a confeccionar um lindo enfeite de porta e uma árvore de parede para o natal com 7 enfeites lindos para decorá-las!',
    image: 'https://media.graphassets.com/MElb6U1MT6SPqc6HuHUT',
    published: true,
    groups: {
      create: [
        {
          name: 'Aulas',
          lessons: {
            create: [
              {
                name: 'Enfeite de porta e árvore de parede',
                slug: kebabCase('Enfeite de porta e árvore de parede'),
                video: 'https://youtu.be/eVSwcFcoaRs',
              },
              {
                name: 'Decoração',
                slug: kebabCase('Decoração'),
                video: 'https://youtu.be/kZkIYVm28hs',
              },
            ],
          },
        },
      ],
    },
    assets: {
      create: [
        {
          name: 'Moldes - Enfeite de porta e Árvore de parede',
          description:
            'Nessa apostila eu vou te ensinar a confeccionar um lindo enfeite de porta e uma árvore de parede para o natal.',
          image:
            'https://mariubialli.s3.amazonaws.com/Imagens/asset-enfeite-porta-arvore-parede.jpg',
          price: 0,
          url: 's3://mariubialli/Apostilas/Mari Ubialli - Enfeite de porta e Árvore de parede.pdf',
        },
        {
          name: 'Moldes - Decoração',
          description:
            'Nessa apostila eu vou te ensinar a fazer 7 enfeites lindos para decorar a árvore de parede e o enfeite de porta para o natal! Vamos aprender a fazer uma estrela, um duende, um boneco de neve, uma biscoita, uma rena, um papai e uma mamãe noel.',
          image:
            'https://mariubialli.s3.amazonaws.com/Imagens/asset-enfeite-porta-arvode-parede-decoracao.jpg',
          price: 0,
          url: 's3://mariubialli/Apostilas/Mari Ubialli - Enfeite de porta e Árvore de parede - Decoração.pdf',
        },
      ],
    },
  },
  {
    name: 'Pingentes de Natal',
    slug: kebabCase('Pingentes de Natal'),
    description:
      'Nessa aula eu vou te ensinar a fazer 8 pingentes lindos para decorar a sua árvore de natal. Vamos aprender a fazer uma estrela, um casal de duendes, um boneco de neve, uma biscoita, uma rena, um papai e uma mamãe noel.',
    image: 'https://media.graphassets.com/dA2aqsatRau3i9bkZJhQ',
    published: true,
    groups: {
      create: [
        {
          name: 'Aulas',
          lessons: {
            create: [
              {
                name: 'Aula Pingentes de Natal',
                slug: kebabCase('Aula Pingentes de Natal'),
                video: 'https://youtu.be/HevDqWQ9eVM',
              },
            ],
          },
        },
      ],
    },
    assets: {
      create: [
        {
          name: 'Moldes - Pingentes de Natal',
          description:
            'Nessa apostila eu vou te ensinar a fazer 8 pingentes lindos para decorar a sua árvore de natal. Vamos aprender a fazer uma estrela, um casal de duendes, um boneco de neve, uma biscoita, uma rena, um papai e uma mamãe noel.',
          image:
            'https://mariubialli.s3.amazonaws.com/Imagens/asset-pingentes-de-natal.jpg',
          price: 0,
          url: 's3://mariubialli/Apostilas/Mari Ubialli - Pingentes de Natal.pdf',
        },
      ],
    },
  },
  {
    name: 'Jogo da velha - Dinossauro',
    slug: kebabCase('Jogo da velha - Dinossauro'),
    description:
      'Faça comigo este lindo jogo da velha com tema de dinossauro. Este jogo é capaz de desenvolver várias habilidades nas crianças como raciocínio lógico, concentração, memória, motricidade e tato. Além de ser super atrativo visualmente para as crianças por ser super colorido e é claro, de dinos.',
    image: 'https://media.graphassets.com/vmoYXaPcQM62RuN4ErwA',
    published: true,
    groups: {
      create: [
        {
          name: 'Aulas',
          lessons: {
            create: [
              {
                name: 'Aula Jogo da velha',
                slug: kebabCase('Aula Jogo da velha'),
                video: 'https://youtu.be/EP4azJ_s7g8',
              },
            ],
          },
        },
      ],
    },
    assets: {
      create: [
        {
          name: 'Moldes - Jogo da Velha Dinossauros',
          description:
            'Faça comigo este lindo jogo da velha com tema de dinossauro. Este jogo é capaz de desenvolver várias habilidades nas crianças como raciocínio lógico, concentração, memória, motricidade e tato. Além de ser super atrativo visualmente para as crianças por ser super colorido e é claro, de dinos.',
          image:
            'https://mariubialli.s3.amazonaws.com/Imagens/asset-jogo-da-velha-dinossauro.jpg',
          price: 0,
          url: 's3://mariubialli/Apostilas/Mari Ubialli - Jogo da Velha Dinossauros.pdf',
        },
      ],
    },
  },
  {
    name: 'Álbum de fotos - Dia das Mães',
    slug: kebabCase('Álbum de fotos - Dia das Mães'),
    description:
      'Faça comigo este lindo álbum para dar de presente para sua mãe no dia dela.',
    image: 'https://media.graphassets.com/eChj8UXSPSSCSiyXgTM8',
    published: true,
    groups: {
      create: [
        {
          name: 'Aulas',
          lessons: {
            create: [
              {
                name: 'Aula Álbum Dia das Mães',
                slug: kebabCase('Aula Álbum Dia das Mães'),
                video: 'https://youtu.be/xErAu4g_mNg',
              },
            ],
          },
        },
      ],
    },
    assets: {
      create: [
        {
          name: 'Moldes - Álbum Dia das Mães',
          description:
            'Apostila de moldes digital contendo todos os elementos necessários para criar o álbum em feltro com o tema dia das mães.',
          image:
            'https://mariubialli.s3.amazonaws.com/Imagens/asset-album-dia-das-maes.jpg',
          price: 0,
          url: 's3://mariubialli/Apostilas/Mari Ubialli - Álbum Dia das Mães.pdf',
        },
      ],
    },
  },
  {
    name: 'Quadro - Dia das Mães',
    slug: kebabCase('Quadro - Dia das Mães'),
    description:
      'Aprenda a fazer um quadro em feltro para decorar seu ateliê, presentear sua mãe ou se presentear.',
    image: 'https://media.graphassets.com/13BiFOg7REOVUW1WkKMG',
    published: true,
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
    assets: {
      create: [
        {
          name: 'Moldes - Quadro Dia das Mães',
          description:
            'Apostila de moldes digital contendo todos os elementos necessários para criar o quadro em feltro com o tema dia das mães.',
          image:
            'https://mariubialli.s3.amazonaws.com/Imagens/asset-quadro-dia-das-maes.jpg',
          price: 0,
          url: 's3://mariubialli/Apostilas/Mari Ubialli - Quadro Dia das Mães.pdf',
        },
      ],
    },
  },
  {
    name: 'Iniciantes em feltro',
    slug: kebabCase('Iniciantes em feltro'),
    description: 'Aulas para iniciantes em feltro.',
    image: 'https://media.graphassets.com/dsoPcycSP23gtJQMIK4i',
    published: true,
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
