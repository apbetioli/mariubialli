'use client'
import { UICourse } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  useAddCourseMutation,
  useUpdateCourseMutation,
} from '@/lib/features/api-slice'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { kebabCase } from 'lodash'
import { SaveIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useReducer } from 'react'
import toast from 'react-hot-toast'

type FieldFormAction = {
  field: string
  value: string | number | boolean
}

const publish = createAction<void>('publish')
export const onChange = createAction<FieldFormAction>('handleInputChange')
export const updateSlug = createAction<string>('updateSlug')

const reducer = createReducer<Partial<UICourse>>({}, (builder) => {
  builder.addCase(publish, (state) => {
    return { ...state, published: !state.published }
  })

  builder.addCase(onChange, (state, action) => {
    return { ...state, [action.payload.field]: action.payload.value }
  })

  builder.addCase(updateSlug, (state, action) => {
    if (!state.id) {
      return { ...state, slug: action.payload }
    }
  })

  builder.addDefaultCase((state) => state)
})

export function CourseFormDetails({ course }: { course?: UICourse }) {
  const [addCourse, resultAdd] = useAddCourseMutation()
  const [updateCourse, resultUpdate] = useUpdateCourseMutation()

  const [state, dispatch] = useReducer(
    reducer,
    course || {
      id: '',
      name: '',
      slug: '',
      description: '',
      image: '',
      published: false,
    },
  )
  const router = useRouter()

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      if (state.id) {
        await updateCourse({ ...state, id: state.id })
        toast('Updated!')
        router.refresh()
        return
      }
      const newCourse = await addCourse(state).unwrap()
      toast('Success! ' + newCourse.id)
      router.push(`/admin/courses/${newCourse.id}`)
    } catch (e) {
      console.error(e)
      toast('An error occurred: ' + e)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    dispatch(onChange({ field, value }))

    if (field === 'name') {
      dispatch(updateSlug(kebabCase(value)))
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="flex items-center gap-2 justify-end w-full">
        {state.id && !state.published && (
          <Button
            type="button"
            variant="outline"
            onClick={() => dispatch(publish())}
          >
            Publish
          </Button>
        )}
        <Button type="submit">
          <SaveIcon />
          {state.published ? 'Save and publish' : 'Save draft'}
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <label>Name</label>
        <Input
          value={state.name}
          required
          onChange={(event) => handleInputChange('name', event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Slug</label>
        <Input
          value={state.slug}
          required
          onChange={(event) => handleInputChange('slug', event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Description</label>
        <Input
          value={state.description}
          required
          onChange={(event) =>
            handleInputChange('description', event.target.value)
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Image URL</label>
        <Input
          value={state.image}
          required
          onChange={(event) => handleInputChange('image', event.target.value)}
        />
        {state.image && (
          <Image
            src={state.image}
            width={64}
            height={64}
            alt="Course cover image"
          />
        )}
      </div>
    </form>
  )
}
