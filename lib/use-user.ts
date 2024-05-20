import { DraftUser } from '@/app/types'
import { useGetUserQuery } from '@/lib/features/api-slice'

export const useUser = () => {
  const {
    data = {
      completedLessonIds: [],
      paidAssetIds: [],
    } as DraftUser,
  } = useGetUserQuery()
  return data
}
