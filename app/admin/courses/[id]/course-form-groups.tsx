'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addGroup } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PlusIcon } from 'lucide-react'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { CourseFormGroup } from './course-form-group'

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

  return (
    <div className="mt-6">
      {course.groups.map((group) => (
        <CourseFormGroup key={group.uiId} group={group} />
      ))}
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
