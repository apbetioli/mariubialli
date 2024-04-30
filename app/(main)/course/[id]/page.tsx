'use client'

import { useParams } from 'next/navigation'

const CoursePage = () => {
  const { id } = useParams()
  return <p>Hello course {id}</p>
}

export default CoursePage
