'use client'

import { UIGroup, UILesson } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  addLesson,
  deleteLesson,
  moveLessonDown,
  moveLessonUp,
  updateLesson,
} from '@/lib/features/admin-slice'
import { useAppDispatch } from '@/lib/hooks'
import { kebabCase } from 'lodash'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EditIcon,
  PlusIcon,
  SaveIcon,
  Trash2Icon,
  XIcon,
} from 'lucide-react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

export function CourseFormLesson({
  lesson,
  group,
}: {
  group: UIGroup
  lesson: UILesson
}) {
  const dispatch = useAppDispatch()

  const [current, setCurrent] = useState(lesson)
  const isNew = !lesson.uiId
  const [isEditing, setEditing] = useState(false)
  const nameInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setCurrent(lesson)
  }, [lesson])

  const handleInputChange = (name: string, value: any) => {
    if (isNew && name === 'name') {
      setCurrent({ ...current, [name]: value, slug: kebabCase(value) })
    } else {
      setCurrent({ ...current, [name]: value })
    }
  }

  const add = () => {
    try {
      dispatch(addLesson({ group, lesson: current }))
      setCurrent(lesson)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const save = () => {
    try {
      dispatch(updateLesson({ group, lesson: current }))
      setEditing(false)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (current.uiId) save()
    else add()

    nameInput.current?.focus()
  }

  const remove = () => {
    try {
      dispatch(deleteLesson({ group, lesson: current }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const cancel = () => {
    setEditing(false)
    setCurrent(lesson)
  }

  const onMoveUp = () => {
    dispatch(moveLessonUp({ group, lesson: current }))
  }

  const onMoveDown = () => {
    dispatch(moveLessonDown({ group, lesson: current }))
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-1">
      <div className="grid grid-cols-2 w-full gap-1">
        <Input
          ref={nameInput}
          name="name"
          placeholder="Name"
          value={current.name}
          required
          disabled={!isNew && !isEditing}
          onChange={(event) =>
            handleInputChange(event.target.name, event.target.value)
          }
        />
        <Input
          name="video"
          placeholder="Video URL"
          value={current.video}
          required
          disabled={!isNew && !isEditing}
          onChange={(event) =>
            handleInputChange(event.target.name, event.target.value)
          }
        />
      </div>

      {isNew && (
        <Button size="sm" variant="default" type="submit">
          <PlusIcon className="h-4 w-4" /> Add lesson
        </Button>
      )}

      {!isNew && isEditing && (
        <>
          <Button size="sm" variant="default" type="submit">
            <SaveIcon className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" type="button" onClick={cancel}>
            <XIcon className="h-4 w-4" />
          </Button>
        </>
      )}

      {!isNew && !isEditing && (
        <>
          <Button
            size="sm"
            variant="secondary"
            type="button"
            onClick={() => setEditing(true)}
          >
            <EditIcon className="h-4 w-4" />
          </Button>
          <ConfirmationDialog onConfirm={remove}>
            <Button size="sm" variant="secondary" type="button">
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </ConfirmationDialog>
        </>
      )}

      {/* TODO drag and drop */}
      {!isNew && isEditing && (
        <div className="flex items-center gap-1">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={onMoveUp}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            type="button"
            onClick={onMoveDown}
          >
            <ArrowDownIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </form>
  )
}
