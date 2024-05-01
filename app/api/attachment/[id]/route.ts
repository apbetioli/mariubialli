import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const filename = 'Mari Ubialli - Álbum Dia das Mães.pdf'

  const getObjectParams = {
    Bucket: `${process.env.AWS_BUCKET_NAME}`,
    Key: `Apostilas/${filename}`,
  }

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
