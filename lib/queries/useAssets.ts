import { UIAsset } from '@/app/types'
import { prisma } from '../server/db'

export const useAssets = async (): Promise<UIAsset[]> => {
  const assets = await prisma.asset.findMany({
    omit: {
      url: true,
    },
    where: {
      Course: {
        published: true,
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  return assets
}
