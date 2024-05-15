'use client'

import { UILesson } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { kebabCase } from 'lodash'
import { EditIcon, PlusIcon, SaveIcon, Trash2Icon, XIcon } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'

const initialState = {
  name: '',
  slug: '',
  video: '',
  delete: false,
}

export function CourseFormLesson({
  lesson,
  onAdd,
  onDelete,
  onSave,
}: {
  lesson?: UILesson
  onAdd?: (lesson: UILesson) => void
  onDelete?: (lesson: UILesson) => void
  onSave?: (lesson: UILesson) => void
}) {
  const [current, setCurrent] = useState(lesson || initialState)
  const [isEditing, setEditing] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (!lesson && name === 'name') {
      setCurrent({ ...current, [name]: value, slug: kebabCase(value) })
    } else {
      setCurrent({ ...current, [name]: value })
    }
  }

  const add = (event: FormEvent) => {
    event.preventDefault()

    if (onAdd) {
      onAdd(current)
      setCurrent(initialState)
    }
  }

  const remove = () => {
    if (lesson && onDelete) {
      onDelete(lesson)
    }
  }

  const save = () => {
    if (onSave) {
      onSave(current)
      setEditing(false)
    }
  }

  const cancel = () => {
    setEditing(false)
    setCurrent(lesson!)
  }

  if (lesson?.deleted) {
    return null
  }

  return (
    <form onSubmit={add} className="flex items-center gap-1">
      <div className="grid grid-cols-3 w-full gap-1">
        <Input
          name="name"
          placeholder="Name"
          value={current.name}
          required
          disabled={lesson && !isEditing}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          name="slug"
          placeholder="Slug"
          value={current.slug}
          required
          disabled={lesson && !isEditing}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          name="video"
          placeholder="Video URL"
          value={current.video}
          required
          disabled={lesson && !isEditing}
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      {!lesson && (
        <Button size="sm" variant="default" className="w-[5.5rem]">
          <PlusIcon className="h-4 w-4" />
        </Button>
      )}

      {isEditing && (
        <>
          <Button size="sm" variant="default" onClick={save}>
            <SaveIcon className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" onClick={cancel}>
            <XIcon className="h-4 w-4" />
          </Button>
        </>
      )}

      {!isEditing && lesson && (
        <>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setEditing(true)}
          >
            <EditIcon className="h-4 w-4" />
          </Button>
          <ConfirmationDialog onConfirm={remove}>
            <Button size="sm" type="button" variant="secondary">
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </ConfirmationDialog>
        </>
      )}
    </form>
  )
}
