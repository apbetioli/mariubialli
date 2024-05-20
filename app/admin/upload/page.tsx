'use client'

import Upload from '@/components/ui/upload'
import { useUpload } from '@/lib/use-upload'
import Image from 'next/image'
import { useState } from 'react'

export default function Page() {
  const [upload, isUploading] = useUpload()
  const [url, setUrl] = useState()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onUpload = async (file: File) => {
    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    const response = await upload(file)

    if (response.error) {
      console.error('S3 Upload Error:', response.error)
      alert('Upload failed.')
      return
    }

    setUrl(response.url)

    alert('Upload successful!')
  }

  return (
    <main>
      <h1>Upload a File to S3</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Upload
          onUpload={(files) => onUpload(files[0])}
          accept="image/png, image/jpeg, image/webp, application/pdf"
        />

        {url && <Image src={url} width={500} height={500} alt="" />}
        <button type="submit" disabled={isUploading}>
          Upload
        </button>
      </form>
    </main>
  )
}
