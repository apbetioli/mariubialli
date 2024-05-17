'use client'

import LoadingPage from '@/app/loading'
import { UIAsset } from '@/app/types'
import { AssetImage } from './asset-image'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { useCourse, useUser } from '@/lib/hooks'

import useStripe from '@/lib/get-stripe'
import {
  ArrowLeftIcon,
  DownloadIcon,
  ShoppingBasketIcon,
  TerminalIcon,
} from 'lucide-react'
import Link from 'next/link'
import {
  notFound,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sidebar } from '../sidebar'

const AssetPage = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>()
  const { course, isLoading, isError, error } = useCourse(courseSlug)
  const user = useUser()
  const path = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [success, setSuccess] = useState(false)
  const { checkout } = useStripe()

  useEffect(() => {
    if (searchParams.get('success')) {
      setSuccess(true)
    }
    // Removes searchParams from the url
    router.replace(path)
  }, [path, router, searchParams])

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  const { assets } = course
  if (!assets) notFound()

  const buyNow = async (asset: UIAsset) => {
    await checkout(asset.id, path)
  }

  return (
    <>
      <Sidebar course={course} className="hidden md:flex" />

      <div className="flex flex-col w-full">
        <div className="max-w-4xl flex flex-col m-auto gap-4 p-4">
          <div>
            <Link href={`/courses/${courseSlug}`}>
              <Button variant="outline" className="inline-flex md:hidden">
                <ArrowLeftIcon />
                Ir ao curso
              </Button>
            </Link>
          </div>
          {success && (
            <Alert className="bg-green-100">
              <TerminalIcon className="h-4 w-4" />
              <AlertTitle>Compra realizada com sucesso!</AlertTitle>
              <AlertDescription>
                Faça o download clicando no botão abaixo
              </AlertDescription>
            </Alert>
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
