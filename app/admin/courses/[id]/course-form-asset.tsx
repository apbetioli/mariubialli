'use client'

import { UIAsset } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { deleteAsset, updateAsset } from '@/lib/features/course-slice'
import { useAppDispatch } from '@/lib/hooks'
import { EditIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { CourseFormAssetDialog } from './course-form-asset-dialog'

export function CourseFormAsset({ asset }: { asset: UIAsset }) {
  const dispatch = useAppDispatch()

  const remove = () => {
    try {
      dispatch(deleteAsset(asset))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onUpdateAsset = (asset: UIAsset) => {
    try {
      dispatch(updateAsset(asset))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  if (asset?.deleted) {
    return null
  }

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Course image preview"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={asset.image}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{asset.name}</TableCell>
      <TableCell className="hidden md:table-cell">
        R$ {Number(asset.price).toFixed(2)}
      </TableCell>
      <TableCell className="text-right space-x-1">
        <CourseFormAssetDialog asset={asset} onApply={onUpdateAsset}>
          <Button size="sm" variant="secondary">
            <EditIcon className="h-4 w-4" />
          </Button>
        </CourseFormAssetDialog>
        <ConfirmationDialog onConfirm={remove}>
          <Button size="sm" type="button" variant="secondary">
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </ConfirmationDialog>
      </TableCell>
    </TableRow>
  )
}
