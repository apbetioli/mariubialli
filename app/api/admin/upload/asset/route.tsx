import { getUserByClerkId } from '@/lib/server/auth'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { kebabCase } from 'lodash'
import { NextResponse } from 'next/server'

/**
 * This service will generate a secure URL for uploading the PDF directly to AWS S3.
 * We won't receive it here because the file can be big and Vercel will refuse files bigger than 4.5mb.
 */
export async function POST(request: Request) {
  const user = await getUserByClerkId()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const json = await request.json()

  const originalFilename = json.name
  if (!originalFilename) {
    return NextResponse.json({ error: 'filename is missing' }, { status: 400 })
  }

  try {
    return NextResponse.json(await generateURLs(json.name, json.type))
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message })
  }
}

async function generateURLs(originalFilename: string, type: string) {
  const [name, extension] = originalFilename.split('.')
  const filename = kebabCase(name) + '.' + extension
  const Key = `assets/${filename}`

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    ContentType: type,
    Key,
  }

  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
  })
  const command = new PutObjectCommand(uploadParams)
  const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 360 })

  console.log('Generated presigned URL', presignedUrl)

  return {
    filename,
    url: `s3://${process.env.AWS_BUCKET_NAME}/${Key}`,
    presignedUrl,
  }
}
