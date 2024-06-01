'use client'

import { UIAsset } from '@/app/types'
import { Empty } from '@/components/empty'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { addAsset } from '@/lib/features/admin-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PlusIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { CourseFormAsset } from './course-form-asset'
import { CourseFormAssetDialog } from './course-form-asset-dialog'

const initialState: UIAsset = {
  name: '',
  description: '',
  image: '',
  url: '',
  anchor_price: 0.0,
  price: 0.0,
  deleted: false,
}

export function CourseFormAssets() {
  const dispatch = useAppDispatch()
  const assets = useAppSelector((state) => state.admin.course.assets)
  const fileredAssets = assets.filter((asset) => !asset.deleted)

  const onAddAsset = (asset: UIAsset) => {
    try {
      dispatch(addAsset(asset))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className="mt-6 space-y-1">
      <div className="flex justify-end mb-6">
        <CourseFormAssetDialog asset={initialState} onApply={onAddAsset}>
          <Button size="sm">
            <PlusIcon className="h-4 w-4" /> Add new asset
          </Button>
        </CourseFormAssetDialog>
      </div>
      {fileredAssets.length === 0 && <Empty title="No assets yet" />}
      {fileredAssets.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fileredAssets.map((asset) => (
              <CourseFormAsset key={asset.name} asset={asset} />
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
