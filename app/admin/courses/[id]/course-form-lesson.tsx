'use client'
import { UILesson } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2Icon } from 'lucide-react'

export function CourseFormLesson({ lesson }: { lesson: UILesson }) {
  return (
    <div className="flex items-center gap-4">
      <Input placeholder="Name" value={lesson.name} required />
      <Input placeholder="Slug" value={lesson.slug} required />
      <Input placeholder="Video URL" value={lesson.video} required />
      <Button size="sm">
        <Trash2Icon className="h-3.5 w-3.5" />
      </Button>
    </div>
  )
}
