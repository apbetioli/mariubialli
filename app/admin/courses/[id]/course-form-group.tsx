'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addGroup } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { CourseFormLesson } from './course-form-lesson'

export function CourseFormGroup() {
  const [newGroupName, setNewGroupName] = useState('')

  const course = useAppSelector((state) => state.course.value)
  const dispatch = useAppDispatch()

  const onAdd = () => {
    dispatch(addGroup(newGroupName))
    setNewGroupName('')
  }

  return (
    <div>
      <Accordion type="multiple">
        {course.groups.map((group, index) => (
          <AccordionItem key={group.name} value={group.name}>
            <AccordionTrigger className="bg-gray-100 px-2">
              {group.name}
            </AccordionTrigger>
            <AccordionContent className="p-4 pl-8">
              {group.lessons.map((lesson) => (
                <CourseFormLesson key={lesson.id} lesson={lesson} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center gap-4 p-4 bg-gray-100">
        <label className="shrink-0">New module name</label>
        <Input
          value={newGroupName}
          onChange={(event) => setNewGroupName(event.target.value)}
        />
        <Button
          size="sm"
          className="h-8 gap-1"
          type="button"
          onClick={() => onAdd()}
        >
          <PlusCircleIcon className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Group
          </span>
        </Button>
      </div>
    </div>
  )
}
