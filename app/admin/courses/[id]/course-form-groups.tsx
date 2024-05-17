'use client'

import { UIGroup } from '@/app/types'
import { Empty } from '@/components/empty'
import { Button } from '@/components/ui/button'
import { addGroup } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PlusIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { CourseFormGroup } from './course-form-group'
import { CourseFormGroupDialog } from './course-form-group-dialog'

const initialState: UIGroup = {
  name: '',
  lessons: [],
  order: 0,
}

export function CourseFormGroups() {
  const dispatch = useAppDispatch()
  const groups = useAppSelector((state) =>
    state.course.value.groups.filter((group) => !group.deleted),
  )

  const onAddGroup = (newGroup: UIGroup) => {
    try {
      dispatch(addGroup(newGroup.name))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className="mt-6 space-y-1">
      <div className="flex justify-end mb-6">
        <CourseFormGroupDialog group={initialState} onApply={onAddGroup}>
          <Button size="sm">
            <PlusIcon className="h-4 w-4" /> Add new group
          </Button>
        </CourseFormGroupDialog>
      </div>
      {groups.length === 0 && <Empty title="No groups yet" />}
      {groups.map((group) => (
        <CourseFormGroup key={group.uiId} group={group} />
      ))}
    </div>
  )
}
