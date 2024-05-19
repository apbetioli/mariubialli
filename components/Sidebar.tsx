import { CourseWithUserDetails } from '@/app/types'
import { SidebarCourseHeader } from './sidebar-course-header'
import { SidebarGroup } from './sidebar-group'
import { SidebarLesson } from './sidebar-lesson'
import { ScrollArea } from './ui/scroll-area'
import { cn } from '@/lib/utils'

export const Sidebar = ({
  course,
  lessonSlug,
  className,
}: {
  course: CourseWithUserDetails
  lessonSlug?: string
  className?: string
}) => {
  return (
    <aside
      className={cn(
        'flex flex-col md:w-96 border-r md:shrink-0 overflow-auto bg-white',
        className,
      )}
    >
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
