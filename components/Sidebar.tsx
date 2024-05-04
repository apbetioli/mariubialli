import { CourseWithUserDetails } from '@/app/types'
import { SidebarCourseHeader } from './SidebarCourseHeader'
import { SidebarGroup } from './SidebarGroup'
import { SidebarLesson } from './SidebarLesson'
import { ScrollArea } from './ui/scroll-area'

export const Sidebar = ({
  course,
  lessonSlug,
}: {
  course: CourseWithUserDetails
  lessonSlug?: string
}) => {
  return (
    <aside className="flex flex-col md:w-96 border-r md:shrink-0 overflow-auto bg-white">
      <SidebarCourseHeader course={course} className="hidden md:block" />
      <ScrollArea>
        <div className="pb-12">
          <SidebarCourseHeader course={course} className="block md:hidden" />
          {course.groups.map((group) => (
            <SidebarGroup key={group.id} group={group}>
              {group.lessons.map((lesson) => (
                <SidebarLesson
                  key={lesson.id}
                  course={course}
                  lesson={lesson}
                  isActiveLesson={lessonSlug === lesson.slug}
                />
              ))}
            </SidebarGroup>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
