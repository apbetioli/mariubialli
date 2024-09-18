'use client'

import { UIAsset } from '@/app/types'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { CardMedia } from '@/components/ui/card-media'
import useStripe from '@/lib/use-stripe'
import { useUser } from '@/lib/use-user'
import { redirectToSignIn } from '@clerk/nextjs'
import { DownloadIcon, ShoppingBasketIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AssetCard({ asset }: { asset: UIAsset }) {
  const user = useUser()
  const path = usePathname()
  const { checkout } = useStripe()

  const buyNow = async (asset: UIAsset) => {
    if (!user?.id) {
      redirectToSignIn({ returnBackUrl: path })
    }
    await checkout(asset.id!, path)
  }

  return (
    <Card className="flex-col shadow-md">
      <CardMedia src={asset.image} alt={asset.name} />

      <CardContent className="flex flex-col gap-3 p-8 grow">
        <CardTitle>{asset.name}</CardTitle>
        <CardDescription className="mb-6 grow">
          <div>{asset.description}</div>
          <Link className="mt-2" href={`/courses/${asset.courseId}`}>
            <Button className="pl-0" variant={'link'}>
              Ver curso
            </Button>
          </Link>
        </CardDescription>

        {asset.price > 0 && !user.paidAssetIds.includes(asset.id!) ? (
          <>
            <span className="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
              R${' '}
              {`${new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format(asset.price)}`}
            </span>

            <Button
              variant="outline"
              className="w-full"
              size="lg"
              onClick={() => buyNow(asset)}
            >
              <ShoppingBasketIcon />
              Adicionar ao carrinho
            </Button>
          </>
        ) : (
          <Link href={`/api/asset/${asset.id}`} target="_blank">
            <Button className="w-full" size="lg">
              <DownloadIcon />
              Baixar moldes
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
