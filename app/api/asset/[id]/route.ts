import { getCurrentUser } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { EventType } from '@prisma/client'
import { kebabCase } from 'lodash'
import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getCurrentUser()

  const asset = await prisma.asset.findUnique({
    where: {
      id: params.id,
    },
  })
  if (!asset) notFound()

  if (asset.price > 0 && !user.paidAssetIds.includes(asset.id)) {
    return new Response('Payment Required', { status: 402 })
  }

  await prisma.event.create({
    data: {
      userId: user.id,
      type: EventType.DOWNLOAD,
      assetId: asset.id,
    },
  })

  const Key = asset.url.replace(`s3://${process.env.AWS_BUCKET_NAME}/`, '')

  const getObjectParams = {
    Bucket: `${process.env.AWS_BUCKET_NAME}`,
    Key,
  }

  const filename = kebabCase(asset.name)

  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
  })
  const { Body } = await s3Client.send(new GetObjectCommand(getObjectParams))
  const stream = Body!.transformToWebStream()

  const response = new NextResponse(stream, {
    status: 200,
    headers: new Headers({
      'Content-Disposition': `attachment; filename="${filename}.pdf"`,
      'Content-Type': 'application/pdf',
    }),
  })
  return response
}
