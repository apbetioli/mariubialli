import { createSlice, nanoid } from '@reduxjs/toolkit'

export const createCourse = (draft: Draft<Course>): Course => {
  return { ...draft, id: draft.id || nanoid() }
}

export const createGroup = (draft: Draft<Group>): Group => {
  return { ...draft, id: draft.id || nanoid() }
}

export const createLesson = (draft: Draft<Lesson>): Lesson => {
  return { ...draft, id: draft.id || nanoid() }
}

export const createAttachment = (draft: Draft<Attachment>): Attachment => {
  return { ...draft, id: draft.id || nanoid() }
}

const lessonsCourse1: Lesson[] = [
  createLesson({
    name: 'Aula Quadro Dia das Mães',
    video: 'https://youtu.be/jX0vFKPB4SU',
  }),
]

const lessonsCourse2: Lesson[] = [
  createLesson({
    name: 'Riscar e cortar o feltro',
    video: 'https://youtu.be/PCTICFNt2Os',
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas',
    video: 'https://youtu.be/XVXj3iREBUs',
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas 2',
    video: 'https://youtu.be/cuCF3_tJGGM',
  }),
  createLesson({
    name: 'Como cortar moldes espelhados',
    video: 'https://youtu.be/K2w_kYcf7Wo',
  }),
  createLesson({
    name: 'Como usar os gabaritos',
    video: 'https://youtu.be/r-Nw0KfdG-A',
  }),
  createLesson({
    name: 'Como fazer ponto atrás',
    video: 'https://youtu.be/tlHJ0vrpcp8',
  }),
  createLesson({
    name: 'Como fazer ponto caseado',
    video: 'https://youtu.be/H7ZUclfa7rs',
  }),
  createLesson({
    name: 'Como fazer ponto palito',
    video: 'https://youtu.be/CDUQbqA47-0',
  }),
  createLesson({
    name: 'Como fazer nó francês',
    video: 'https://youtu.be/U8N3X5tjRE8',
  }),
  // REpeat
  createLesson({
    name: 'Riscar e cortar o feltro',
    video: 'https://youtu.be/PCTICFNt2Os',
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas',
    video: 'https://youtu.be/XVXj3iREBUs',
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas 2',
    video: 'https://youtu.be/cuCF3_tJGGM',
  }),
  createLesson({
    name: 'Como cortar moldes espelhados',
    video: 'https://youtu.be/K2w_kYcf7Wo',
  }),
  createLesson({
    name: 'Como usar os gabaritos',
    video: 'https://youtu.be/r-Nw0KfdG-A',
  }),
  createLesson({
    name: 'Como fazer ponto atrás',
    video: 'https://youtu.be/tlHJ0vrpcp8',
  }),
  createLesson({
    name: 'Como fazer ponto caseado',
    video: 'https://youtu.be/H7ZUclfa7rs',
  }),
  createLesson({
    name: 'Como fazer ponto palito',
    video: 'https://youtu.be/CDUQbqA47-0',
  }),
  createLesson({
    name: 'Como fazer nó francês',
    video: 'https://youtu.be/U8N3X5tjRE8',
  }),
]

export const lessons = [...lessonsCourse1, ...lessonsCourse2]
export const lessonsMap = lessons.reduce<Record<string, Lesson>>(
  (map, lesson) => {
    map[lesson.id] = lesson
    return map
  },
  {},
)

export const groupsCourse1: Group[] = [
  createGroup({
    name: 'Aulas',
    lessonIds: lessonsCourse1.map((lesson) => lesson.id),
  }),
]

export const groupsCourse2: Group[] = [
  createGroup({
    name: 'Aulas',
    lessonIds: lessonsCourse2.map((lesson) => lesson.id),
  }),
]

export const groups = [...groupsCourse1, ...groupsCourse2]
export const groupsMap = groups.reduce<Record<string, Group>>((map, group) => {
  map[group.id] = group
  return map
}, {})

export const courses: Course[] = [
  createCourse({
    name: 'Quadro - Dia das Mães',
    description:
      'Aprenda a fazer quadro para decorar seu ateliê, presentear sua mãe ou se presentear',
    image: 'https://media.graphassets.com/13BiFOg7REOVUW1WkKMG',
    groupIds: groupsCourse1.map((group) => group.id),
    attachments: [
      createAttachment({
        name: 'Moldes',
        url: 'https://mariubialli.s3.amazonaws.com/Apostilas/Mari+Ubialli+-+%C3%81lbum+Dia+das+M%C3%A3es.pdf',
        price: 0,
      }),
    ],
  }),
  createCourse({
    name: 'Iniciantes em feltro',
    description: 'Aulas para iniciantes em feltro',
    image: 'https://media.graphassets.com/dsoPcycSP23gtJQMIK4i',
    groupIds: groupsCourse2.map((group) => group.id),
  }),
]

export const coursesMap = courses.reduce<Record<string, Course>>(
  (map, course) => {
    map[course.id] = course
    return map
  },
  {},
)

type CoursesState = {
  courses: Record<string, Course>
  groups: Record<string, Group>
  lessons: Record<string, Lesson>
}

const initialState: CoursesState = {
  courses: coursesMap,
  groups: groupsMap,
  lessons: lessonsMap,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
})

export const coursesReducer = coursesSlice.reducer

export default coursesSlice
