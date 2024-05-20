import { findPublishedCourses } from '@/lib/server/queries'
import CourseCard from './course-card'

export default async function HomePage() {
  const courses = await findPublishedCourses()

  return (
    <div className="w-full md:container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 h-fit">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
