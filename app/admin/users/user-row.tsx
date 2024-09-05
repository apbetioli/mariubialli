'use client'

import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  useAdminDeleteUserMutation,
  useAdminUpdateUserMutation,
} from '@/lib/features/api-slice'
import { User } from '@prisma/client'
import { Trash2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function UserRow({ user }: { user: User }) {
  const [current, setCurrent] = useState(user)
  const [updateUser] = useAdminUpdateUserMutation()
  const [deleteUser] = useAdminDeleteUserMutation()
  const router = useRouter()

  const toggleAdmin = async (user: User, checked: boolean) => {
    setCurrent({ ...current, isAdmin: checked })
    const updated = await toast.promise(
      updateUser({ ...user, isAdmin: checked }).unwrap(),
      {
        loading: 'Updating user...',
        success: 'User updated!',
        error: 'Failed to update.',
      },
    )
    setCurrent(updated)
  }

  const remove = async (user: User) => {
    await deleteUser(user.id!)
    toast.success('User deleted')
    router.refresh()
  }

  return (
    <TableRow key={current.id}>
      <TableCell className="font-medium">{current.email}</TableCell>
      <TableCell className="font-medium">{current.name}</TableCell>
      <TableCell>{current.completedLessonIds.length}</TableCell>
      <TableCell>{current.updatedAt?.toLocaleString()}</TableCell>
      <TableCell>
        <Switch
          checked={current.isAdmin}
          onCheckedChange={(checked) => toggleAdmin(current, checked)}
        />
      </TableCell>
      <TableCell>
        <ConfirmationDialog onConfirm={() => remove(current)}>
          <Button size="sm" type="button" variant="secondary">
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </ConfirmationDialog>
      </TableCell>
    </TableRow>
  )
}
