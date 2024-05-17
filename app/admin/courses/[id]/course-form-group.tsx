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
import { EditIcon, Trash2Icon } from 'lucide-react'
import { CourseFormGroupDialog } from './course-form-group-dialog'
import { CourseFormLessons } from './course-form-lessons'

export function CourseFormGroup({ group }: { group: UIGroup }) {
  const dispatch = useAppDispatch()

  const onGroupUpdate = (group: UIGroup) => {
    dispatch(updateGroup(group))
  }

  const onGroupDelete = () => {
    dispatch(deleteGroup(group))
  }

  return (
    <Accordion type="multiple">
      <AccordionItem value={group.name}>
        <AccordionHeader className="px-2 bg-gray-100">
          <AccordionTrigger className="gap-2">{group.name}</AccordionTrigger>
          <CourseFormGroupDialog group={group} onApply={onGroupUpdate}>
            <Button variant="ghost" size="sm" title="Edit group">
              <EditIcon className="h-4 w-4" />
            </Button>
          </CourseFormGroupDialog>
          <ConfirmationDialog onConfirm={onGroupDelete}>
            <Button variant="ghost" title="Delete group">
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </ConfirmationDialog>
        </AccordionHeader>
        <AccordionContent className="flex flex-col p-3 pl-8 gap-2">
          <CourseFormLessons group={group} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
