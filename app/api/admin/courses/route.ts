import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const user = await getUserByClerkId()

  // TODO protect with middleware?
  if (!user.isAdmin) {
    return NextResponse.json(
      { message: 'Only admins can create courses' },
      { status: 403 },
    )
  }

  const { id, assets, groups, ...data } = await request.json()

  const course = await prisma.course.upsert({
    create: data,
    update: data,
    where: {
      id,
    },
  })

  for (const { id, lessons, name } of groups) {
    if (id) {
      var newGroup = await prisma.group.update({
        data: { name, courseId: course.id },
        where: {
          id,
        },
      })
      console.log('Updated group', newGroup.id)
    } else {
      var newGroup = await prisma.group.create({
        data: { name, courseId: course.id },
      })
      console.log('Created group', newGroup.id)
    }

    for (const { id, name, slug, video } of lessons) {
      if (id) {
        var newLesson = await prisma.lesson.update({
          data: { name, slug, video, groupId: newGroup.id },
          where: {
            id,
          },
        })
        console.log('Created lesson', newLesson.id)
      } else {
        var newLesson = await prisma.lesson.create({
          data: { name, slug, video, groupId: newGroup.id },
        })
        console.log('Updated lesson', newLesson.id)
      }
    }
  }

  const updatedCourse = await prisma.course.findUnique({
    where: {
      id,
    },
  })

  return NextResponse.json(updatedCourse)
}
