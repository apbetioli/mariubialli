import { findPublishedCourses } from '@/lib/server/queries'
import CourseCard from './course-card'

export default async function CoursesPage() {
  const courses = await findPublishedCourses()

  return (
    <div className="w-full md:container pb-20 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 h-fit">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
