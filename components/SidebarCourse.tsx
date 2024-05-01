import { PropsWithChildren } from 'react'
import { ScrollArea } from './ui/scroll-area'

type SidebarCourseProps = {
  className?: string
}

export function SidebarCourse({
  className,
  children,
}: PropsWithChildren<SidebarCourseProps>) {
  return <ScrollArea className={className}>{children}</ScrollArea>
}
