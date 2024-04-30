import { randomUUID } from 'crypto'

export const courses = [
  {
    id: randomUUID(),
    name: 'Quadro - Dia das Mães',
    description:
      'Aprenda a fazer quadro para decorar seu ateliê, presentear sua mãe ou se presentear',
    image: 'https://media.graphassets.com/13BiFOg7REOVUW1WkKMG',
    modules: [
      {
        name: 'Aulas',
        lessons: [
          {
            name: 'Moldes',
            download:
              'https://mariubialli.s3.amazonaws.com/Apostilas/Mari+Ubialli+-+%C3%81lbum+Dia+das+M%C3%A3es.pdf',
          },
          {
            name: 'Aula Quadro Dia das Mães',
            url: 'https://youtu.be/jX0vFKPB4SU',
          },
        ],
      },
    ],
  },
  {
    id: randomUUID(),
    name: 'Iniciantes em feltro',
    description: 'Aulas para iniciantes em feltro',
    image: 'https://media.graphassets.com/13BiFOg7REOVUW1WkKMG',
    modules: [
      {
        name: 'Aulas',
        lessons: [
          {
            name: 'Riscar e cortar o feltro',
            url: 'https://youtu.be/PCTICFNt2Os',
          },
          {
            name: 'Dica para cortar peças pequenas',
            url: 'https://youtu.be/XVXj3iREBUs',
          },
          {
            name: 'Dica para cortar peças pequenas 2',
            url: 'https://youtu.be/cuCF3_tJGGM',
          },
          {
            name: 'Como cortar moldes espelhados',
            url: 'https://youtu.be/K2w_kYcf7Wo',
          },
          {
            name: 'Como usar os gabaritos',
            url: 'https://youtu.be/r-Nw0KfdG-A',
          },
          {
            name: 'Como fazer ponto atrás',
            url: 'https://youtu.be/tlHJ0vrpcp8',
          },
          {
            name: 'Como fazer ponto caseado',
            url: 'https://youtu.be/H7ZUclfa7rs',
          },
          {
            name: 'Como fazer ponto palito',
            url: 'https://youtu.be/CDUQbqA47-0',
          },
          {
            name: 'Como fazer nó francês',
            url: 'https://youtu.be/U8N3X5tjRE8',
          },
        ],
      },
    ],
  },
]
