import { createSlice, nanoid } from '@reduxjs/toolkit'
import { kebabCase } from 'lodash'

export const createCourse = (draft: Draft<Course>): Course => {
  return {
    ...draft,
    id: draft.id || nanoid(),
    slug: draft.slug || kebabCase(draft.name),
  }
}

export const createGroup = (draft: Draft<Group>): Group => {
  return { ...draft, id: draft.id || nanoid() }
}

export const createLesson = (draft: Draft<Lesson>): Lesson => {
  return {
    ...draft,
    id: draft.id || nanoid(),
    slug: draft.slug || kebabCase(draft.name),
  }
}

export const createAsset = (draft: Draft<Asset>): Asset => {
  return { ...draft, id: draft.id || nanoid() }
}

export const group1Course1 = createGroup({
  name: 'Aulas',
})

export const group1Course2 = createGroup({
  name: 'Aulas',
})

const lessonsCourse1: Lesson[] = [
  createLesson({
    name: 'Aula Quadro Dia das Mães',
    video: 'https://youtu.be/jX0vFKPB4SU',
    groupId: group1Course1.id,
  }),
]

const lessonsCourse2: Lesson[] = [
  createLesson({
    name: 'Riscar e cortar o feltro',
    video: 'https://youtu.be/PCTICFNt2Os',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas',
    video: 'https://youtu.be/XVXj3iREBUs',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas 2',
    video: 'https://youtu.be/cuCF3_tJGGM',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como cortar moldes espelhados',
    video: 'https://youtu.be/K2w_kYcf7Wo',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como usar os gabaritos',
    video: 'https://youtu.be/r-Nw0KfdG-A',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer ponto atrás',
    video: 'https://youtu.be/tlHJ0vrpcp8',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer ponto caseado',
    video: 'https://youtu.be/H7ZUclfa7rs',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer ponto palito',
    video: 'https://youtu.be/CDUQbqA47-0',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer nó francês',
    video: 'https://youtu.be/U8N3X5tjRE8',
    groupId: group1Course2.id,
  }),
  // REpeat
  createLesson({
    name: 'Riscar e cortar o feltro',
    video: 'https://youtu.be/PCTICFNt2Os',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas',
    video: 'https://youtu.be/XVXj3iREBUs',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Dica para cortar peças pequenas 2',
    video: 'https://youtu.be/cuCF3_tJGGM',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como cortar moldes espelhados',
    video: 'https://youtu.be/K2w_kYcf7Wo',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como usar os gabaritos',
    video: 'https://youtu.be/r-Nw0KfdG-A',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer ponto atrás',
    video: 'https://youtu.be/tlHJ0vrpcp8',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer ponto caseado',
    video: 'https://youtu.be/H7ZUclfa7rs',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer ponto palito',
    video: 'https://youtu.be/CDUQbqA47-0',
    groupId: group1Course2.id,
  }),
  createLesson({
    name: 'Como fazer nó francês',
    video: 'https://youtu.be/U8N3X5tjRE8',
    groupId: group1Course2.id,
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

export const groups = [group1Course1, group1Course2]
export const groupsMap = groups.reduce<Record<string, Group>>((map, group) => {
  map[group.id] = group
  return map
}, {})

export const courses: Course[] = [
  createCourse({
    name: 'Quadro - Dia das Mães',
    description:
      'Aprenda a fazer quadro para decorar seu ateliê, presentear sua mãe ou se presentear.',
    image: 'https://media.graphassets.com/13BiFOg7REOVUW1WkKMG',
    groupIds: [group1Course1.id],
    lessonIds: lessonsCourse1.map((lesson) => lesson.id),
    asset: createAsset({
      name: 'Apostila de moldes',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit',
      image: '/quadro.jpg',
      price: 1.99,
    }),
  }),
  createCourse({
    name: 'Iniciantes em feltro',
    description: 'Aulas para iniciantes em feltro',
    image: 'https://media.graphassets.com/dsoPcycSP23gtJQMIK4i',
    groupIds: [group1Course2.id],
    lessonIds: lessonsCourse2.map((lesson) => lesson.id),
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
