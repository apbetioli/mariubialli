import { getUserByClerkId } from '@/lib/server/auth'
import { ObjectCannedACL, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { kebabCase } from 'lodash'
import { NextResponse } from 'next/server'
import sharp from 'sharp'

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

  try {
    if (file.type.startsWith('image')) {
      var url = await uploadImage(file)
    } else {
      var url = await uploadAsset(file)
    }

    return NextResponse.json({ url })
  } catch (error: any) {
    console.error(error)
    return Response.json({ error: error.message })
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

  const s3Client = new S3Client()
  await s3Client.send(new PutObjectCommand(uploadParams))

  console.log(
    'Uploaded image to S3',
    `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${Key}`,
  )

  return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${Key}`
}

async function uploadAsset(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer())

  const [name, extension] = file.name.split('.')
  const filename = kebabCase(name) + '.' + extension
  const Key = `assets/${filename}`

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Body: buffer,
    Key,
    ContentType: file.type,
  }

  const s3Client = new S3Client()
  await s3Client.send(new PutObjectCommand(uploadParams))

  console.log(
    'Uploaded asset to S3',
    `s3://${process.env.AWS_BUCKET_NAME}/${Key}`,
  )

  return `s3://${process.env.AWS_BUCKET_NAME}/${Key}`
}

function resizeImage(buffer: Buffer) {
  return sharp(buffer)
    .resize({ height: 512, width: 512, fit: 'inside' })
    .webp({ quality: 75 })
    .toBuffer()
}
