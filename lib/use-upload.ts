import { useState } from 'react'

export const useUpload = () => {
  const [isUploading, setUploading] = useState(false)

  const upload = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    setUploading(true)
    try {
      const uploadResponse = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })

      return uploadResponse.json()
    } finally {
      setUploading(false)
    }
  }

  return [upload, isUploading] as const
}
