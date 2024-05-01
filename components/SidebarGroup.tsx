import { useAppSelector } from '@/lib/hooks'
import { SidebarLesson } from './SidebarLesson'

type SidebarGroupProps = {
  course: Course
  group: Group
  activeLesson: Lesson
}

export const SidebarGroup = ({
  course,
  group,
  activeLesson,
}: SidebarGroupProps) => {
  const lessonsMap = useAppSelector((state) => state.courses.lessons)

  const lessons = course.lessonIds
    .map((id) => lessonsMap[id])
    .filter((lesson) => lesson.groupId === group.id)

  return (
    <div key={group.id}>
      <h2 className="px-4 text-lg font-semibold tracking-tight bg-primary text-primary-foreground">
        {group.name}
      </h2>
      {lessons.map((lesson) => (
        <SidebarLesson
          key={lesson.id}
          course={course}
          lesson={lesson}
          activeLesson={activeLesson}
        />
      ))}
    </div>
  )
}
