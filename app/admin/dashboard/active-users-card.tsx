import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import { Activity } from 'lucide-react'

export async function ActiveUsersCard({ from }: { from: Date }) {
  const users = await prisma.event.groupBy({
    by: ['userId'],
    where: {
      createdAt: {
        gte: from,
      },
    },
    _count: {
      id: true,
    },
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active this month</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{users.length}</div>
        <p className="text-xs text-muted-foreground">last 30 days</p>
      </CardContent>
    </Card>
  )
}
