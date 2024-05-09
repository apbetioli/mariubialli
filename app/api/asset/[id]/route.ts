import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getUserByClerkId()

  const asset = await prisma.asset.findUniqueOrThrow({
    where: {
      id: params.id,
    },
  })

  if (asset.price > 0 && !user.paidAssetIds.includes(asset.id)) {
    return new Response('Payment Required', { status: 402 })
  }

  const Key = asset.url.replace(`s3://${process.env.AWS_BUCKET_NAME}/`, '')

  const getObjectParams = {
    Bucket: `${process.env.AWS_BUCKET_NAME}`,
    Key,
  }

  const filename = Key.replace(/.*\//gm, '')

  const s3Client = new S3Client()
  const { Body } = await s3Client.send(new GetObjectCommand(getObjectParams))
  const stream = Body?.transformToWebStream()

  const response = new NextResponse(stream, {
    status: 200,
    headers: new Headers({
      'content-disposition': `attachment; filename="${filename}"`,
      'content-type': 'application/pdf',
    }),
  })
  return response
}
