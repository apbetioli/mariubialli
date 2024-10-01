'use client'

import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { TableCell, TableRow } from '@/components/ui/table'
import { deleteUserAction, toggleUserAsAdminAction } from '@/lib/server/actions'
import { User } from '@prisma/client'
import { Trash2Icon } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function UserRow({ user }: { user: User }) {
  const [current, setCurrent] = useState(user)

  const toggleAdmin = async (user: User, checked: boolean) => {
    setCurrent({ ...current, isAdmin: checked })
    const promise = toggleUserAsAdminAction(user.id, checked)
      .then((updated) => {
        setCurrent(updated)
      })
      .catch((error) => {
        console.error(error)
        setCurrent(user)
        throw error
      })

    await toast.promise(promise, {
      loading: 'Updating user...',
      success: 'User updated!',
      error: 'Failed to update.',
    })
  }

  const remove = async (user: User) => {
    await deleteUserAction(user.id!)
    toast.success('User deleted')
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
