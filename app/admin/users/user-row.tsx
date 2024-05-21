'use client'

import { Switch } from '@/components/ui/switch'
import { TableCell, TableRow } from '@/components/ui/table'
import { useAdminUpdateUserMutation } from '@/lib/features/api-slice'
import { User } from '@prisma/client'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function UserRow({ user }: { user: User }) {
  const [current, setCurrent] = useState(user)
  const [updateUser] = useAdminUpdateUserMutation()

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

  return (
    <TableRow key={current.id}>
      <TableCell className="font-medium">{current.email}</TableCell>
      <TableCell className="font-medium">{current.name}</TableCell>
      <TableCell>
        <Switch
          checked={current.isAdmin}
          onCheckedChange={(checked) => toggleAdmin(current, checked)}
        />
      </TableCell>
    </TableRow>
  )
}
