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
import { DialogDescription } from '@radix-ui/react-dialog'
import { EditIcon } from 'lucide-react'
import { FormEvent, useId, useState } from 'react'

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
        <Button variant="ghost" size="sm">
          <EditIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Edit group</DialogTitle>
            <DialogDescription>Change group details</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-4 items-center gap-4 my-4">
            <Label htmlFor={nameId} className="text-right">
              Name
            </Label>
            <Input
              id={nameId}
              className="col-span-3"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Apply</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
