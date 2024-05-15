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

  // TODO improve this logic
  for (const { id, lessons, name, deleted: groupDeleted } of groups) {
    if (groupDeleted) {
      var newGroup = await prisma.group.delete({
        where: {
          id,
        },
      })
      console.log('Deleted group', newGroup.id)
    } else {
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
    }

    for (const { id, name, slug, video, deleted } of lessons) {
      if (deleted || groupDeleted) {
        var newLesson = await prisma.lesson.delete({
          where: {
            id,
          },
        })
        console.log('Deleted lesson', newLesson.id)
      } else {
        if (id) {
          var newLesson = await prisma.lesson.update({
            data: { name, slug, video, groupId: newGroup.id },
            where: {
              id,
            },
          })
          console.log('Updated lesson', newLesson.id)
        } else {
          var newLesson = await prisma.lesson.create({
            data: { name, slug, video, groupId: newGroup.id },
          })
          console.log('Created lesson', newLesson.id)
        }
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
