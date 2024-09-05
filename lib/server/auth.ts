import { currentUser, User } from '@clerk/nextjs/server'

import { redirect } from 'next/navigation'
import { prisma } from './db'

/**
 * Uses Cleck to retrieve user from database or create it if it doesn't exist.
 */
export const getCurrentUser = async () => {
  const authUser = await currentUser()
  if (!authUser) {
    redirect('/sign-in')
  }

  const email = authUser.emailAddresses[0].emailAddress

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (!user) {
    return await prisma.user.create({
      data: {
        clerkId: authUser.id,
        email,
        name: formatName(authUser),
        completedLessonIds: [],
        paidAssetIds: [],
      },
    })
  }

  return user
}

function formatName(authUser: User) {
  if (!authUser.firstName && !authUser.lastName) {
    return null
  }

  return [authUser.firstName || '', authUser.lastName || ''].join(' ').trim()
}
