'use client'

import LoadingPage from '@/app/loading'
import { AssetImage } from '@/components/AssetImage'
import { Sidebar } from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { buyAsset } from '@/lib/features/userSlice'
import { useCourse, useUser } from '@/lib/hooks'

import { DownloadIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const AssetPage = () => {
  const { courseId } = useParams<{ courseId: string }>()

  const dispatch = useDispatch()
  const user = useUser()

  const { course, isLoading, isError, error } = useCourse(courseId)

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  const { asset } = course

  if (!asset) notFound()

  const userHasPaidForIt = user.paidAssetIds.includes(asset.id)

  const buy = () => {
    dispatch(buyAsset(asset))
    toast.success('Compra realizada com sucesso!')
  }

  return (
    <>
      <Sidebar course={course} />

      <div className="flex flex-col w-full">
        <div className="max-w-4xl m-auto">
          <Card className="md:flex-row">
            <AssetImage
              src={asset.image}
              alt={asset.name}
              className="hidden md:inline-flex"
            />

            <CardContent className="flex flex-col gap-3 p-8">
              <CardTitle>{asset.name}</CardTitle>
              <CardDescription className="mb-6">
                {asset.description}
              </CardDescription>

              {asset.price > 0 && !userHasPaidForIt ? (
                <>
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-3xl">
                    R$ {new Intl.NumberFormat('pt-BR').format(asset.price)}
                  </span>

                  <Button className="w-full" size="lg" onClick={() => buy()}>
                    <ShoppingCartIcon />
                    Comprar
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
        </div>
      </div>
    </>
  )
}

export default AssetPage
