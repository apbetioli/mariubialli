import { UIGroup } from '@/app/types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EditIcon, SaveIcon } from 'lucide-react'
import { FormEvent, useEffect, useId, useState } from 'react'

export function EditGroupDialog({
  group,
  onGroupChange,
}: {
  group: UIGroup
  onGroupChange: (group: UIGroup) => void
}) {
  const [name, setName] = useState(group.name)
  const [open, setOpen] = useState(false)
  const nameId = useId()

  useEffect(() => {
    setName(group.name)
  }, [group])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    onGroupChange({
      ...group,
      name,
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" title="Edit group">
          <EditIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Edit group</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 my-6">
            <Label htmlFor={nameId}>Name</Label>
            <Input
              id={nameId}
              className="col-span-4"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <DialogFooter>
            <Button type="submit">
              <SaveIcon className="h-4 w-4" /> Apply
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
