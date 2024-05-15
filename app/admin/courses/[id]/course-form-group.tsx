'use client'

import { UIGroup } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { deleteGroup, updateGroup } from '@/lib/features/course-slice'
import { useAppDispatch } from '@/lib/hooks'
import { Trash2Icon } from 'lucide-react'
import { GroupFormLessons } from './course-form-lessons'
import { EditGroupDialog } from './edit-group-dialog'

export function CourseFormGroup({ group }: { group: UIGroup }) {
  const dispatch = useAppDispatch()

  const onGroupChange = (group: UIGroup) => {
    dispatch(updateGroup(group))
  }

  const onGroupDelete = () => {
    dispatch(deleteGroup(group))
  }

  if (group.deleted) {
    return null
  }

  return (
    <Accordion type="multiple">
      <AccordionItem value={group.name}>
        <AccordionHeader className="px-2 bg-gray-100">
          <AccordionTrigger className="gap-2">{group.name}</AccordionTrigger>
          <EditGroupDialog group={group} onGroupChange={onGroupChange} />
          <ConfirmationDialog onConfirm={onGroupDelete}>
            <Button variant="ghost" title="Delete group">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </ConfirmationDialog>
        </AccordionHeader>
        <AccordionContent className="flex flex-col p-3 pl-8 gap-2">
          <GroupFormLessons group={group} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
