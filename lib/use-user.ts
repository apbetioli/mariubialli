import { DraftUser } from '@/app/types'
import { useGetUserQuery } from '@/lib/features/api-slice'
import { User } from '@prisma/client'

export const useUser = (): DraftUser | User => {
  const {
    data = {
      completedLessonIds: [],
      paidAssetIds: [],
    } as DraftUser,
  } = useGetUserQuery()
  return data
}
