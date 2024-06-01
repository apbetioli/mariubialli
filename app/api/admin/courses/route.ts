import { UIAsset, UICourse, UIGroup, UILesson } from '@/app/types'
import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const user = await getUserByClerkId()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const courses = await prisma.course.findMany({
    include: {
      assets: true,
      groups: {
        include: {
          lessons: {
            orderBy: {
              order: 'asc',
            },
          },
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })

  return NextResponse.json(courses)
}

export const POST = async (request: Request) => {
  const user = await getUserByClerkId()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const draftCourse = await request.json()

  const course = await upsertCourse(draftCourse)

  for (const draftGroup of draftCourse.groups) {
    const group = await upsertGroup(course.id, draftGroup)

    for (const draftLesson of draftGroup.lessons) {
      draftLesson.deleted ||= draftGroup.deleted

      await upsertLesson(group.id, draftLesson)
    }
  }

  for (const asset of draftCourse.assets) {
    await upsertAssets(course.id, asset)
  }

  return NextResponse.json(course)
}

async function upsertAssets(courseId: string, asset: UIAsset) {
  const {
    id,
    name,
    description,
    image,
    url,
    price,
    anchor_price,
    deleted,
    changed,
  } = asset

  if (deleted) {
    return await prisma.asset.delete({
      where: {
        id,
      },
    })
  }

  if (!id) {
    return await prisma.asset.create({
      data: {
        name,
        description,
        image,
        url,
        price,
        anchor_price,
        courseId,
      },
    })
  }

  if (!changed) {
    return { id }
  }

  return await prisma.asset.update({
    data: {
      name,
      description,
      image,
      url,
      price,
      anchor_price,
      courseId,
    },
    where: {
      id,
    },
  })
}

async function upsertLesson(
  groupId: string,
  { id, name, slug, video, deleted, order, changed }: UILesson,
) {
  if (deleted) {
    return await prisma.lesson.delete({
      where: {
        id,
      },
    })
  }

  if (!id) {
    return await prisma.lesson.create({
      data: { name, slug, video, order, groupId },
    })
  }

  if (!changed) {
    return { id }
  }

  return await prisma.lesson.update({
    data: { name, slug, video, order, groupId },
    where: {
      id,
    },
  })
}

async function upsertGroup(
  courseId: string,
  { id, name, order, deleted, changed }: UIGroup,
) {
  if (deleted) {
    return await prisma.group.delete({
      where: {
        id,
      },
    })
  }

  if (!id) {
    return await prisma.group.create({
      data: { name, order, courseId },
    })
  }

  if (!changed) {
    return { id }
  }

  return await prisma.group.update({
    data: { name, order, courseId },
    where: {
      id,
    },
  })
}

async function upsertCourse(course: UICourse) {
  const { id, assets, groups, ...data } = course

  if (!id) {
    return await prisma.course.create({
      data,
    })
  }

  return await prisma.course.update({
    data,
    where: {
      id,
    },
  })
}
