import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import UsersList from './users-list'

export default async function AdminCourses() {
  const users = await prisma.user.findMany({
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  })

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-8">
      <Card>
        <CardHeader>
          <div className="flex items-center">
            <CardTitle>Users</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <UsersList users={users} />
        </CardContent>
      </Card>
    </main>
  )
}
