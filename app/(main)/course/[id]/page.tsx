'use client'

import { useParams } from 'next/navigation'

const CoursePage = () => {
  const { id } = useParams()
  return (
    <div className="flex">
      <aside className="w-60 border-r">asd</aside>
      <main>Hello course {id}</main>
    </div>
  )
}

export default CoursePage
