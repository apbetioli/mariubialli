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
import { addToCart } from '@/lib/features/cart-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useUser } from '@/lib/use-user'
import { DownloadIcon, ShoppingBasketIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function AssetCard({ asset }: { asset: UIAsset }) {
  const user = useUser()
  const router = useRouter()

  const dispatch = useAppDispatch()
  const inCart = useAppSelector((state) =>
    state.cart.assets.some((a) => a.id === asset.id),
  )

  const addAsset = async (asset: UIAsset) => {
    if (!inCart) {
      dispatch(addToCart(asset))
      toast(`"${asset.name}" adicionado ao carrinho!`)
    }
    router.push('/cart')
  }

  return (
    <Card className="flex-col shadow-md">
      <CardMedia src={asset.image} alt={asset.name} />

      <CardContent className="flex flex-col gap-3 p-8 grow">
        <CardTitle>{asset.name}</CardTitle>
        <CardDescription>{asset.description}</CardDescription>
        <Link className="mb-6 grow" href={`/courses/${asset.courseId}`}>
          <Button className="pl-0" variant={'link'}>
            Ver curso
          </Button>
        </Link>

        {asset.price > 0 && !user.paidAssetIds.includes(asset.id!) ? (
          <>
            <span className="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
              R${' '}
              {`${new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format(asset.price)}`}
            </span>

            <Button
              variant={inCart ? 'default' : 'outline'}
              className="w-full"
              size="lg"
              onClick={() => addAsset(asset)}
            >
              <ShoppingBasketIcon />
              <span>{inCart ? 'Ver carrinho' : 'Adicionar ao carrinho'}</span>
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
