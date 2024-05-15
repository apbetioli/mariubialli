'use client'

import { UIGroup } from '@/app/types'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addGroup, changeGroup } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PlusIcon } from 'lucide-react'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { GroupFormLessons } from './course-form-lessons'
import { EditGroupDialog } from './edit-group-dialog'

export function CourseFormGroups() {
  const [newGroupName, setNewGroupName] = useState('')

  const course = useAppSelector((state) => state.course.value)
  const dispatch = useAppDispatch()

  const onAddGroup = (event: FormEvent) => {
    event.preventDefault()

    try {
      dispatch(addGroup(newGroupName))
      setNewGroupName('')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onGroupChange = (group: UIGroup) => {
    dispatch(changeGroup(group))
  }

  return (
    <div className="mt-6">
      <Accordion type="multiple">
        {course.groups.map((group) => (
          <AccordionItem key={group.name} value={group.name}>
            <AccordionHeader className="px-2 bg-gray-50">
              <AccordionTrigger className="gap-2">
                {group.name}
              </AccordionTrigger>
              <EditGroupDialog group={group} onGroupChange={onGroupChange} />
            </AccordionHeader>
            <AccordionContent className="flex flex-col p-4 pl-8 gap-2">
              <GroupFormLessons group={group} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <form
        onSubmit={onAddGroup}
        className="flex items-center gap-4 p-4 bg-gray-200 mt-6 rounded-md"
      >
        <Input
          value={newGroupName}
          placeholder="Group name"
          required
          onChange={(event) => setNewGroupName(event.target.value)}
        />
        <Button size="sm" className="h-8 gap-1">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Group
          </span>
        </Button>
      </form>
    </div>
  )
}
