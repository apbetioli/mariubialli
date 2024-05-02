import { auth, clerkClient, currentUser } from '@clerk/nextjs/server'

import { redirect } from 'next/navigation'
import { prisma } from './db'

/**
 * Uses Cleck to retrieve user from database or create it if it doesn't exist.
 */
export const getUserByClerkId = async () => {
  const authUser = await currentUser()
  if (!authUser) {
    redirect('/sign-in')
  }

  const email = authUser.emailAddresses[0].emailAddress

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      // Fields visible to the UI
      id: true,
      name: true,
      email: true,
      paidAssetIds: true,
      completedLessonIds: true,
    },
  })

  if (!user) {
    return await prisma.user.create({
      data: {
        clerkId: authUser.id,
        email,
        name: authUser.firstName + ' ' + authUser.lastName,
      },
    })
  }

  return user
}
