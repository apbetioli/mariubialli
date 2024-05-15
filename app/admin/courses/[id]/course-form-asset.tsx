'use client'

import { UIAsset } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { kebabCase } from 'lodash'
import { EditIcon, PlusIcon, SaveIcon, Trash2Icon, XIcon } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'

const initialState: UIAsset = {
  name: '',
  description: '',
  url: '',
  price: 0,
  anchor_price: 0,
  image: '',
  delete: false,
}

export function CourseFormAsset({
  asset,
  onDelete,
  onSave,
}: {
  asset?: UIAsset
  onDelete?: (asset: UIAsset) => void
  onSave?: (asset: UIAsset) => void
}) {
  const [current, setCurrent] = useState(asset || initialState)
  const [isEditing, setEditing] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (!asset && name === 'name') {
      setCurrent({ ...current, [name]: value, slug: kebabCase(value) })
    } else {
      setCurrent({ ...current, [name]: value })
    }
  }

  const save = (event: FormEvent) => {
    event.preventDefault()

    if (onSave) {
      onSave(current)
    }

    setCurrent(initialState)
    setEditing(false)
  }

  const remove = () => {
    if (asset && onDelete) {
      onDelete(asset)
    }
  }

  const cancel = () => {
    setEditing(false)
    setCurrent(asset!)
  }

  if (asset?.deleted) {
    return null
  }

  return (
    <form onSubmit={save} className="flex items-center gap-1">
      <div className="grid grid-cols-3 w-full gap-1">
        <Input
          name="name"
          placeholder="Name"
          value={current.name}
          required
          disabled={asset && !isEditing}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          name="description"
          placeholder="Description"
          value={current.description}
          required
          disabled={asset && !isEditing}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          name="image"
          placeholder="Image URL"
          value={current.image}
          required
          disabled={asset && !isEditing}
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      {!asset && (
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

      {!isEditing && asset && (
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
