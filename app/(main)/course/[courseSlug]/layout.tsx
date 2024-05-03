'use client'

import { ReactNode } from 'react'

const CourseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col-reverse justify-end md:flex-row h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] w-full ">
      {children}
    </div>
  )
}

export default CourseLayout
