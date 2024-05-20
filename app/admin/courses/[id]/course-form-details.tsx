'use client'

import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { InputWithLabel } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Upload from '@/components/ui/upload'
import { updateCourseField } from '@/lib/features/admin-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useUpload } from '@/lib/use-upload'
import { Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent } from 'react'
import toast from 'react-hot-toast'

export function CourseFormDetails() {
  const course = useAppSelector((state) => state.admin.course)
  const dispatch = useAppDispatch()
  const [upload] = useUpload()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(updateCourseField({ name, value }))
  }

  const onUpload = async (file: File) => {
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
          loading: 'Uploading image, please wait...',
          success: <b>Image uploaded!</b>,
          error: <b>Could not upload image.</b>,
        },
      )
      .then((url) => {
        dispatch(updateCourseField({ name: 'image', value: url }))
      })
  }

  const deleteImage = () => {
    // TODO delete from S3
    dispatch(updateCourseField({ name: 'image', value: '' }))
  }

  return (
    <div className="space-y-8 mt-6">
      <div className="flex flex-col gap-2">
        <InputWithLabel
          name="name"
          label="Name"
          value={course.name}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <InputWithLabel
          name="description"
          label="Description"
          value={course.description}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Image</Label>
        {course.image ? (
          <div className="flex items-center gap-2">
            <Image
              className="aspect-auto rounded-md object-cover"
              src={course.image}
              width={200}
              height={200}
              alt="Course cover image"
            />
            <ConfirmationDialog onConfirm={deleteImage}>
              <Button size="sm" type="button" variant="secondary">
                <Trash2Icon className="w-4 h-4" />
              </Button>
            </ConfirmationDialog>
          </div>
        ) : (
          <Upload onUpload={(files) => onUpload(files[0])} accept="image/*" />
        )}
      </div>
    </div>
  )
}
