'use client'

import LoadingPage from '@/app/loading'
import { UIAsset } from '@/app/types'
import { AssetImage } from '@/components/AssetImage'
import { Sidebar } from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { addToCart } from '@/lib/features/cartSlice'
import { useAppDispatch, useCourse, useUser } from '@/lib/hooks'
import { Asset } from '@prisma/client'

import {
  DownloadIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import toast from 'react-hot-toast'

const AssetPage = () => {
  const dispatch = useAppDispatch()
  const { courseSlug } = useParams<{ courseSlug: string }>()

  const user = useUser()
  const { course, isLoading, isError, error } = useCourse(courseSlug)

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  const { assets } = course

  if (!assets) notFound()

  const buyAsset = (asset: UIAsset) => {
    dispatch(addToCart(asset))
    toast.success('Produto adicionado ao carrinho!')
  }

  return (
    <>
      <Sidebar course={course} />

      <div className="flex flex-col w-full">
        <div className="max-w-4xl flex flex-col m-auto gap-4 p-4">
          {assets.map((asset) => (
            <Card key={asset.id} className="flex-col md:flex-row shadow-md">
              <AssetImage
                src={asset.image}
                alt={asset.name}
                className="inline-flex shrink-0 m-auto"
              />

              <CardContent className="flex flex-col gap-3 p-8">
                <CardTitle>{asset.name}</CardTitle>
                <CardDescription className="mb-6">
                  {asset.description}
                </CardDescription>

                {asset.price > 0 && !user.paidAssetIds.includes(asset.id) ? (
                  <>
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-3xl">
                      R$ {new Intl.NumberFormat('pt-BR').format(asset.price)}
                    </span>

                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => buyAsset(asset)}
                    >
                      <ShoppingCartIcon />
                      Adicionar ao carrinho
                    </Button>
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => buyAsset(asset)}
                    >
                      <ShoppingBasketIcon />
                      Comprar agora
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
          ))}
        </div>
      </div>
    </>
  )
}

export default AssetPage
