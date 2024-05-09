'use client'

import LoadingPage from '@/app/loading'
import { CheckoutRequest, UIAsset } from '@/app/types'
import { AssetImage } from '@/components/AssetImage'
import { Sidebar } from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import getStripe from '@/lib/get-stripe'
import { useCourse, useUser } from '@/lib/hooks'

import { DownloadIcon, ShoppingBasketIcon } from 'lucide-react'
import Link from 'next/link'
import {
  notFound,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const AssetPage = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>()
  const { course, isLoading, isError, error } = useCourse(courseSlug)
  const user = useUser()
  const path = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Compra realizada com sucesso!')
    }
    if (searchParams.get('canceled')) {
      toast.error('Compra cancelada!')
    }
    router.replace(path)
  }, [path, router, searchParams])

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  const { assets } = course

  if (!assets) notFound()

  const buyNow = async (asset: UIAsset) => {
    const stripe = await getStripe()
    const response = await fetch(`/api/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assetId: asset.id,
        priceId: 'price_1PEWJ1HtZjx8TEfAFQhjRXP3',
        redirect: path,
      } satisfies CheckoutRequest),
    })
    const session = await response.json()
    await stripe?.redirectToCheckout({ sessionId: session.id })
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
                      onClick={() => buyNow(asset)}
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
