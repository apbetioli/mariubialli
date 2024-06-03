import { useState } from 'react'

export const useUpload = () => {
  const [isUploading, setUploading] = useState(false)

  const upload = async (file: File) => {
    if (file.type.includes('image')) {
      return uploadImage(file)
    } else {
      return uploadAsset(file)
    }
  }

  const uploadImage = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    setUploading(true)
    try {
      const uploadResponse = await fetch('/api/admin/upload/image', {
        method: 'POST',
        body: formData,
      })

      return uploadResponse.json()
    } finally {
      setUploading(false)
    }
  }

  const uploadAsset = async (file: File) => {
    setUploading(true)

    try {
      // Generate presigned URL

      const { url, presignedUrl }: { url: string; presignedUrl: string } =
        await fetch('/api/admin/upload/asset', {
          method: 'POST',
          body: JSON.stringify({ name: file.name, type: file.type }),
        }).then((response) => response.json())

      // Upload directly to S3

      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      })

      console.log(uploadResponse)

      return {
        url,
      }
    } finally {
      setUploading(false)
    }
  }

  return [upload, isUploading] as const
}
