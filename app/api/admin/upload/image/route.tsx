import { getUserByClerkId } from '@/lib/server/auth'
import { ObjectCannedACL, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { kebabCase } from 'lodash'
import { NextResponse } from 'next/server'
import sharp from 'sharp'

/**
 * This service will resize the image and store it directly into AWS S3
 */
export async function POST(request: Request) {
  const user = await getUserByClerkId()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File
  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }
  if (!file.type.startsWith('image')) {
    return NextResponse.json(
      { error: `Not an image: ${file.type}` },
      { status: 400 },
    )
  }

  try {
    return NextResponse.json(await uploadImage(file))
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message })
  }
}

async function uploadImage(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer())
  const resized = await resizeImage(buffer)

  const filename = kebabCase(file.name)
  const Key = `images/${filename}.webp`

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Body: resized,
    Key,
    ContentType: 'image/webp',
    ACL: ObjectCannedACL.public_read,
  }

  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
  })
  const command = new PutObjectCommand(uploadParams)
  await s3Client.send(command)

  console.log(
    'Uploaded image to S3',
    `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${Key}`,
  )

  return {
    url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${Key}`,
  }
}

function resizeImage(buffer: Buffer) {
  return sharp(buffer)
    .resize({ height: 512, width: 512, fit: 'inside' })
    .webp({ quality: 75 })
    .toBuffer()
}
