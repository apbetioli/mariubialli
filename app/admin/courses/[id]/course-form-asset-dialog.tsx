import LoadingPage from '@/app/loading'
import { UIAsset } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input, InputWithLabel } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Upload from '@/components/ui/upload'
import { useUpload } from '@/lib/use-upload'
import { SaveIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import { FormEvent, ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export function CourseFormAssetDialog({
  children,
  asset,
  onApply,
}: {
  children: ReactNode
  asset: UIAsset
  onApply: (asset: UIAsset) => void
}) {
  const [upload, isUploading] = useUpload()
  const [current, setCurrent] = useState(asset)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setCurrent(asset)
  }, [asset, open])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    onApply(current)
    setOpen(false)
  }

  const handleInputEvent = (name: string, value: any) => {
    setCurrent({ ...current, [name]: value })
  }

  const onUpload = async (field: string, file: File) => {
    if (!file) {
      toast.error('Please select a file to upload.')
      return
    }

    toast
      .promise(
        upload(file).then((response): Promise<string> => {
          if (response.error) {
            console.error(response.error)
            throw new Error(response.error)
          }
          return response.url
        }),
        {
          loading: 'Uploading, please wait...',
          success: <b>Uploaded!</b>,
          error: <b>Could not upload.</b>,
        },
      )
      .then((url) => {
        handleInputEvent(field, url)
      })
  }

  const deleteImage = () => {
    // TODO delete from S3
    handleInputEvent('image', '')
  }

  const deleteAsset = () => {
    // TODO delete from S3
    handleInputEvent('url', '')
  }

  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>{asset.uiId ? 'Edit asset' : 'Add asset'}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 my-6">
            <InputWithLabel
              required
              label="Name"
              name="name"
              value={current.name}
              onChange={(event) =>
                handleInputEvent(event.target.name, event.target.value)
              }
            />

            <InputWithLabel
              required
              label="Description"
              name="description"
              value={current.description}
              onChange={(event) =>
                handleInputEvent(event.target.name, event.target.value)
              }
            />

            <div className="flex flex-col gap-2">
              <Label>Image</Label>
              {current.image ? (
                <div className="flex items-center gap-2">
                  <Image
                    className="aspect-auto rounded-md object-cover"
                    src={current.image}
                    width={100}
                    height={100}
                    alt="Course cover image"
                  />
                  <ConfirmationDialog onConfirm={deleteImage}>
                    <Button size="sm" type="button" variant="secondary">
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </ConfirmationDialog>
                </div>
              ) : (
                <>
                  {isUploading ? (
                    <LoadingPage />
                  ) : (
                    <Upload
                      onUpload={(files) => onUpload('image', files[0])}
                      accept="image/*"
                    />
                  )}
                </>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label>Asset</Label>
              {current.url ? (
                <div className="flex items-center gap-2">
                  <Input value={current.url} disabled={true} required />
                  <ConfirmationDialog onConfirm={deleteAsset}>
                    <Button size="sm" type="button" variant="secondary">
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </ConfirmationDialog>
                </div>
              ) : (
                <Upload
                  onUpload={(files) => onUpload('url', files[0])}
                  accept="application/pdf"
                />
              )}
            </div>

            <InputWithLabel
              type="number"
              step={0.01}
              min={0}
              required
              label="Price"
              name="price"
              value={current.price}
              onChange={(event) =>
                handleInputEvent(event.target.name, event.target.valueAsNumber)
              }
            />

            <InputWithLabel
              type="number"
              step={0.01}
              min={0}
              required
              label="Anchor price"
              name="anchor_price"
              value={current.anchor_price}
              onChange={(event) =>
                handleInputEvent(event.target.name, event.target.valueAsNumber)
              }
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isUploading}>
              <SaveIcon className="h-4 w-4" /> Apply
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
