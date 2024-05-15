'use client'

import { UIAsset } from '@/app/types'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PlusIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { CourseFormAsset } from './course-form-asset'

export function CourseFormAssets() {
  const dispatch = useAppDispatch()
  const assets = useAppSelector((state) => state.course.value.assets)

  const onAddAsset = (asset: UIAsset) => {
    try {
      //dispatch(addAsset({ group, asset }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onDeleteAsset = (asset: UIAsset) => {
    try {
      //dispatch(deleteAsset({ group, asset }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onUpdateAsset = (asset: UIAsset) => {
    try {
      //dispatch(updateAsset({ group, asset }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  // TODO no assets page

  return (
    <div className="mt-6 space-y-2">
      <div className="flex justify-end">
        <Button size="sm">
          <PlusIcon className="h-4 w-4" /> Add new asset
        </Button>
      </div>
      {assets.map((asset) => (
        <CourseFormAsset
          key={asset.name}
          asset={asset}
          onDelete={() => onDeleteAsset(asset)}
          onSave={(updated) => onUpdateAsset(updated)}
        />
      ))}
    </div>
  )
}
