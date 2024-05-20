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
import { InputWithLabel } from '@/components/ui/input'
import { SaveIcon } from 'lucide-react'
import { FormEvent, ReactNode, useEffect, useId, useState } from 'react'
export function CourseFormGroupDialog({
  children,
  group,
  onApply,
}: {
  children: ReactNode
  group: UIGroup
  onApply: (group: UIGroup) => void
}) {
  const [name, setName] = useState(group.name)
  const [open, setOpen] = useState(false)
  const nameFieldId = useId()

  useEffect(() => {
    setName(group.name)
  }, [group, open])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    onApply({
      ...group,
      name,
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>{group.uiId ? 'Edit group' : 'Add group'}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 my-6">
            <InputWithLabel
              id={nameFieldId}
              required
              name="name"
              label="Name"
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
