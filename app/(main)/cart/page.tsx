'use client'

import { Empty } from '@/components/empty'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { emptyCart, removeFromCart } from '@/lib/features/cart-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import useStripe from '@/lib/use-stripe'
import { useUser } from '@/lib/use-user'
import { Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { AssetImage } from '../courses/[courseSlug]/assets/asset-image'

export default function CartPage() {
  const user = useUser()
  const dispatch = useAppDispatch()
  const assets = useAppSelector((state) => state.cart.assets)
  const { checkout } = useStripe()
  const path = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('success')) {
      dispatch(emptyCart())
      toast.success('Compra realizada com sucesso!')
      router.push('/assets')
    }
  }, [path, router, searchParams, dispatch])

  const remove = (id: String) => {
    dispatch(removeFromCart(id))
  }

  const buyNow = async () => {
    if (!user?.id) {
      router.push(`/sign-in?redirect_url=${path}`)
    } else {
      await checkout(
        assets.map((asset) => asset.id!),
        path,
      )
    }
  }

  const total = assets.reduce((sum, asset) => {
    return sum + asset.price
  }, 0)

  return (
    <div className="w-full md:container pb-20 pt-8">
      <div className="flex flex-col gap-8 p-4 h-fit">
        <h1 className="text-2xl font-bold grow">Carrinho</h1>
        <div className="flex justify-end">
          {assets.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 justify-end">
              <span className="font-bold">
                Total: R${' '}
                {`${new Intl.NumberFormat('pt-BR', {
                  minimumFractionDigits: 2,
                }).format(total)}`}
              </span>
              <div className="flex grow justify-between gap-4">
                <Link href="/assets">
                  <Button variant="outline">Continuar Comprando</Button>
                </Link>
                <Button onClick={buyNow}>Finalizar Compra</Button>
              </div>
            </div>
          )}
        </div>

        {assets.length == 0 && (
          <Empty title="O carrinho está vazio!">
            <Link href="/assets">
              <Button variant="outline">Ver moldes</Button>
            </Link>
          </Empty>
        )}

        {assets.map((asset) => (
          <Card key={asset.id} className="flex-col md:flex-row shadow-md">
            <AssetImage
              src={asset.image}
              alt={asset.name}
              className="inline-flex shrink-0 m-auto"
            />

            <CardContent className="flex flex-col gap-3 p-8 grow">
              <CardTitle>{asset.name}</CardTitle>
              <CardDescription className="mb-6">
                {asset.description}
              </CardDescription>

              <span className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-2xl">
                R${' '}
                {`${new Intl.NumberFormat('pt-BR', {
                  minimumFractionDigits: 2,
                }).format(asset.price)}`}
              </span>

              <Button
                variant="outline"
                className="w-fit"
                onClick={() => remove(asset.id!)}
              >
                <Trash2Icon />
                Remover do carrinho
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
