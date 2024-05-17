import { UIAsset } from '@/app/types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { InputWithLabel } from '@/components/ui/input'
import { SaveIcon } from 'lucide-react'
import Image from 'next/image'
import { FormEvent, ReactNode, useEffect, useState } from 'react'

export function CourseFormAssetDialog({
  children,
  asset,
  onApply,
}: {
  children: ReactNode
  asset: UIAsset
  onApply: (asset: UIAsset) => void
}) {
  const [current, setCurrent] = useState(asset)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setCurrent(asset)
  }, [asset])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    onApply(current)
    setOpen(false)
  }

  const handleInputEvent = (name: string, value: any) => {
    setCurrent({ ...current, [name]: value })
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

            <InputWithLabel
              required
              label="Image"
              name="image"
              value={current.image}
              onChange={(event) =>
                handleInputEvent(event.target.name, event.target.value)
              }
            />
            {current.image && (
              <Image
                src={current.image}
                width={100}
                height={100}
                alt="Asset image preview"
              />
            )}

            <InputWithLabel
              required
              label="URL"
              name="url"
              value={current.url}
              onChange={(event) =>
                handleInputEvent(event.target.name, event.target.value)
              }
            />

            <InputWithLabel
              type="number"
              step={0.01}
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
            <Button type="submit">
              <SaveIcon className="h-4 w-4" /> Apply
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
