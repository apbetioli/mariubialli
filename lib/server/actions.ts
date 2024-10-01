'use server'

import { User } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { ensureUserIsAdmin } from './auth'
import { prisma } from './db'

export async function deleteUserAction(id: string) {
  await ensureUserIsAdmin()

  await prisma.user.delete({
    where: {
      id,
    },
  })

  revalidatePath('/admin/users')
}

export async function toggleUserAsAdminAction(
  id: string,
  isAdmin: boolean,
): Promise<User> {
  await ensureUserIsAdmin()

  return await prisma.user.update({
    data: {
      isAdmin,
    },
    where: {
      id,
    },
  })
}
