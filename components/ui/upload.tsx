import { UploadCloudIcon } from 'lucide-react'
import { DragEvent, useRef, useState } from 'react'

export default function Upload({
  onUpload,
  details,
  multiple,
  accept,
}: {
  onUpload: (files: FileList) => void
  details?: string
  multiple?: boolean
  accept?: string
}) {
  const [dragging, setDragging] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    onUpload(e.dataTransfer.files)
  }

  function handleDragOver(e: DragEvent<HTMLElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  function handleDragLeave(e: DragEvent<HTMLElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  return (
    <div
      className={`${
        dragging
          ? 'border border-primary bg-primary-foreground'
          : 'border-dashed border-gray-300'
      } flex items-center justify-center text-center border-2 rounded-md p-5`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="flex-1 flex flex-col">
        <div className="mx-auto text-gray-400 mb-2">
          <UploadCloudIcon size={18} />
        </div>
        <div className="text-base font-normal text-gray-500">
          <input
            className="opacity-0 hidden"
            type="file"
            multiple={multiple}
            accept={accept}
            ref={fileRef}
            onChange={(e) => e.target.files?.length && onUpload(e.target.files)}
          />
          <span
            className="text-primary cursor-pointer"
            onClick={() => {
              fileRef.current?.click()
            }}
          >
            Click to upload
          </span>{' '}
          or drag and drop
        </div>

        <div className="text-xs font-normal text-gray-500">{details}</div>
      </div>
    </div>
  )
}
