'use client'

import { UILesson } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { kebabCase } from 'lodash'
import { PlusIcon, Trash2Icon } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'

export function CourseFormLesson({
  lesson,
  onAdd,
  onRemove,
}: {
  lesson?: UILesson
  onAdd?: (lesson: UILesson) => void
  onRemove?: (lesson: UILesson) => void
}) {
  const initialState = {
    name: '',
    slug: '',
    video: '',
  }
  const [current, setCurrent] = useState(lesson || initialState)

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
    if (lesson && onRemove) {
      onRemove(lesson)
    }
  }

  return (
    <form onSubmit={add} className="flex items-center gap-4">
      <Input
        name="name"
        placeholder="Name"
        value={current.name}
        required
        onChange={(event) => handleInputChange(event)}
      />
      <Input
        name="slug"
        placeholder="Slug"
        value={current.slug}
        required
        onChange={(event) => handleInputChange(event)}
      />
      <Input
        name="video"
        placeholder="Video URL"
        value={current.video}
        required
        onChange={(event) => handleInputChange(event)}
      />
      {lesson ? (
        <Button size="sm" type="button" onClick={remove}>
          <Trash2Icon className="h-3.5 w-3.5" />
        </Button>
      ) : (
        <Button size="sm" variant="secondary">
          <PlusIcon className="h-3.5 w-3.5" />
        </Button>
      )}
    </form>
  )
}
